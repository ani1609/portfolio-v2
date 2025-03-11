import { NextResponse } from 'next/server';
import axios, { AxiosResponse } from 'axios';
import { GITHUB_GRAPHQL_URL } from '@/lib/config';
import {
  CommitItem,
  ContributionCalendar,
  GitHubCommitUser,
} from '@/types/github';
import {
  getGitHubHeaders,
  validateGitHubToken,
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

    // Validate Year
    const { error: yearError, year } = validateYear(req);
    if (yearError || year === null || year === undefined) return yearError;

    const url = new URL(req.url);
    const month = url.searchParams.get('month');

    let fromDate = `${year}-01-01T00:00:00Z`;
    let toDate = `${year}-12-31T23:59:59Z`;

    if (month) {
      const monthNum = parseInt(month, 10);
      if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
        return NextResponse.json(
          { error: 'Month must be a valid number between 1 to 12' },
          { status: 400 }
        );
      }

      const monthPadded = monthNum.toString().padStart(2, '0');
      fromDate = `${year}-${monthPadded}-01T00:00:00Z`;
      const lastDay = new Date(year, monthNum, 0).getDate();
      toDate = `${year}-${monthPadded}-${lastDay}T23:59:59Z`;
    }

    const query = `
      query {
        user(login: "${username}") {
          contributionsCollection(from: "${fromDate}", to: "${toDate}") {
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
      { headers: getGitHubHeaders() }
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

    return NextResponse.json({
      username,
      month: month || null,
      year,
      contributions,
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
