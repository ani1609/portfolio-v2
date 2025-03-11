import { NextResponse } from 'next/server';
import axios, { AxiosResponse } from 'axios';
import { GITHUB_GRAPHQL_URL } from '@/lib/config';
import {
  GitHubLanguageResponse,
  Repository,
  LanguageEdge,
  LanguageItem,
} from '@/types/github';
import {
  getGitHubHeaders,
  validateGitHubToken,
  validateUsername,
} from '@/lib/utils';

export async function GET(req: Request) {
  try {
    // Validate GitHub Token
    const tokenError = validateGitHubToken();
    if (tokenError) return tokenError;

    // Validate Username
    const { error: usernameError, username } = validateUsername(req);
    if (usernameError) return usernameError;

    const query = `
      query {
        user(login: "${username}") {
          repositoriesContributedTo(
            first: 100
            includeUserRepositories: true
          ) {
            totalCount
            nodes {
              name
              languages(first: 10) {
                edges {
                  size
                  node {
                    name
                  }
                }
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      }
    `;

    const response: AxiosResponse<GitHubLanguageResponse> = await axios.post(
      GITHUB_GRAPHQL_URL,
      { query },
      { headers: getGitHubHeaders() }
    );

    const repositories: Repository[] =
      response.data?.data?.user?.repositoriesContributedTo?.nodes || [];

    const languageMap: Record<string, number> = {};

    repositories.forEach((repo: Repository) => {
      repo.languages.edges.forEach((edge: LanguageEdge) => {
        const { node, size } = edge;
        languageMap[node.name] = (languageMap[node.name] || 0) + size;
      });
    });

    const topLanguages: LanguageItem[] = Object.entries(languageMap)
      .map(([name, size]) => ({ name, size }))
      .sort((a, b) => b.size - a.size)
      .slice(0, 5);

    return NextResponse.json(
      {
        username,
        languages: topLanguages,
      },
      { status: 200 }
    );
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
