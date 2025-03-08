import { NextResponse } from 'next/server';
import axios, { AxiosResponse } from 'axios';
import { GITHUB_GRAPHQL_URL } from '@/lib/config';

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

    const monthPadded = month.length === 1 ? `0${month}` : month;

    // Get the last day of the month
    const lastDay = new Date(parseInt(year), parseInt(month), 0).getDate();
    const fromDate = `${year}-${monthPadded}-01T00:00:00Z`;
    const toDate = `${year}-${monthPadded}-${lastDay}T23:59:59Z`;

    const allPRs: Record<string, number> = {};
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
        data: {
          user: {
            contributionsCollection?: {
              pullRequestContributions?: {
                nodes: { pullRequest: { createdAt: string } }[];
                pageInfo: { hasNextPage: boolean; endCursor: string | null };
              };
            };
          } | null;
        };
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

      const userData = response.data?.data?.user;
      if (!userData || !userData.contributionsCollection) {
        return NextResponse.json(
          { error: 'User not found or no PRs' },
          { status: 404 }
        );
      }

      const prContributions =
        userData.contributionsCollection.pullRequestContributions;
      if (!prContributions) break;

      prContributions.nodes.forEach((node) => {
        const date = node.pullRequest.createdAt.split('T')[0];
        allPRs[date] = (allPRs[date] || 0) + 1;
      });

      hasNextPage = prContributions.pageInfo.hasNextPage;
      endCursor = prContributions.pageInfo.endCursor;
    }

    const sortedPRs = Object.fromEntries(
      Object.entries(allPRs).sort(([a], [b]) => a.localeCompare(b))
    );

    return NextResponse.json({
      username,
      month,
      year,
      pullRequests: sortedPRs,
    });
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('Error fetching PR contributions:', error.response.data);
      return NextResponse.json(
        { error: error.response.data.message || 'Internal Server Error' },
        { status: error.response.status }
      );
    } else {
      console.error('Error fetching PR contributions:', error);
      return NextResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
      );
    }
  }
}
