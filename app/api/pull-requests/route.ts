import { NextResponse } from 'next/server';
import axios, { AxiosResponse } from 'axios';
import { GITHUB_GRAPHQL_URL } from '@/lib/config';
import {
  GitHubPullRequestResponse,
  PageInfo,
  PullRequestContribution,
  PullRequestItem,
} from '@/types/github';
import {
  getGitHubHeaders,
  validateGitHubToken,
  validateMonth,
  validateUsername,
  validateYear,
} from '@/lib/utils';

export async function GET(req: Request) {
  try {
    // Validate GitHub Token
    const tokenError = validateGitHubToken();
    if (tokenError) return tokenError;

    // Validate Username
    const { error: usernameError, username } = validateUsername(req);
    if (usernameError) return usernameError;

    // Validate Month
    const { error: monthError, month } = validateMonth(req);
    if (monthError) return monthError;

    // Validate Year
    const { error: yearError, year } = validateYear(req);
    if (yearError) return yearError;

    const monthPadded = (month as number).toString().padStart(2, '0');
    const fromDate = `${year as number}-${monthPadded}-01T00:00:00Z`;
    const lastDay = new Date(year as number, month as number, 0).getDate();
    const toDate = `${year as number}-${monthPadded}-${lastDay}T23:59:59Z`;

    const prContributions: Record<string, number> = {};
    let endCursor: string | null = null;
    let hasNextPage = true;

    while (hasNextPage) {
      const query = `
        query {
          user(login: "${username}") {
            contributionsCollection(from: "${fromDate}", to: "${toDate}") {
              pullRequestContributions(first: 100${endCursor ? `, after: "${endCursor}"` : ''}) {
                nodes {
                  pullRequest {
                    createdAt
                  }
                }
                pageInfo {
                  hasNextPage
                  endCursor
                }
              }
            }
          }
        }
      `;

      const response: AxiosResponse<GitHubPullRequestResponse> =
        await axios.post(
          GITHUB_GRAPHQL_URL,
          { query },
          { headers: getGitHubHeaders() }
        );

      const userData = response.data.data.user;
      if (!userData) {
        return NextResponse.json(
          { error: 'User not found or no PRs' },
          { status: 404 }
        );
      }

      const prNodes: PullRequestContribution[] =
        userData.contributionsCollection.pullRequestContributions.nodes;
      prNodes.forEach((node) => {
        const date = node.pullRequest.createdAt.split('T')[0];
        prContributions[date] = (prContributions[date] || 0) + 1;
      });

      const pageInfo: PageInfo =
        userData.contributionsCollection.pullRequestContributions.pageInfo;
      hasNextPage = pageInfo.hasNextPage;
      endCursor = pageInfo.endCursor;
    }

    const formattedResponse: PullRequestItem[] = Object.entries(prContributions)
      .map(([date, count]) => ({ date, pullRequestCount: count }))
      .sort((a, b) => a.date.localeCompare(b.date));

    return NextResponse.json({
      username,
      month,
      year,
      pullRequests: formattedResponse,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });
    } else {
      console.error('Unexpected error:', error);
    }
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
