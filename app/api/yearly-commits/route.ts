import { NextResponse } from 'next/server';
import axios, { AxiosResponse } from 'axios';
import { GITHUB_GRAPHQL_URL } from '@/lib/config';
import {
  CommitItem,
  ContributionCalendar,
  GitHubCommitUser,
} from '@/types/github';

const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const username = url.searchParams.get('username');
    const year =
      url.searchParams.get('year') || new Date().getFullYear().toString();

    if (!username) {
      return NextResponse.json(
        { error: 'Username is required' },
        { status: 400 }
      );
    }

    const query = `
      query {
        user(login: "${username}") {
          contributionsCollection(from: "${year}-01-01T00:00:00Z", to: "${year}-12-31T23:59:59Z") {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    const response: AxiosResponse<{
      data: { user: GitHubCommitUser | null };
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

    if (!userData) {
      return NextResponse.json(
        { error: 'User not found or no contributions' },
        { status: 404 }
      );
    }

    const contributionCalendar: ContributionCalendar =
      userData.contributionsCollection.contributionCalendar;

    const contributions: CommitItem[] = contributionCalendar.weeks.flatMap(
      (week) => week.contributionDays
    );

    return NextResponse.json({ username, year, contributions });
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
