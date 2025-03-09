import { NextResponse } from 'next/server';
import axios, { AxiosResponse } from 'axios';
import { GITHUB_GRAPHQL_URL } from '@/lib/config';
import {
  GitHubPullRequestUser,
  PageInfo,
  PullRequestContribution,
  PullRequestItem,
} from '@/types/github';

const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const username = url.searchParams.get('username');
    const month =
      url.searchParams.get('month') || (new Date().getMonth() + 1).toString();
    const year =
      url.searchParams.get('year') || new Date().getFullYear().toString();

    if (!username) {
      return NextResponse.json(
        { error: 'Username is required' },
        { status: 400 }
      );
    }

    const monthPadded = month.padStart(2, '0');
    const fromDate = `${year}-${monthPadded}-01T00:00:00Z`;
    const toDate = new Date(parseInt(year), parseInt(month), 0).toISOString();

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

      const response: AxiosResponse<{
        data: { user: GitHubPullRequestUser | null };
      }> = await axios.post(
        GITHUB_GRAPHQL_URL,
        { query },
        {
          headers: {
            'Authorization': `Bearer ${GITHUB_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
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
