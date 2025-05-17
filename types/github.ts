// GitHub API response types

// commit contributions response from GitHub API

export interface ContributionDay {
  date: string;
  contributionCount: number;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
  weeks: ContributionWeek[];
}

export interface CommitContributionsCollection {
  contributionCalendar: ContributionCalendar;
}

export interface GitHubCommitUser {
  contributionsCollection: CommitContributionsCollection;
}

export interface GitHubCommitResponse {
  data: {
    user: GitHubCommitUser | null;
  };
}

export type CommitItem = ContributionDay;

// pr response from GitHub API

export interface PullRequestContribution {
  pullRequest: {
    createdAt: string;
  };
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
}

export interface PullRequestContributionsCollection {
  pullRequestContributions: {
    totalCount: number;
    nodes: PullRequestContribution[];
    pageInfo: PageInfo;
  };
}

export interface GitHubPullRequestUser {
  contributionsCollection: PullRequestContributionsCollection;
}

export interface GitHubPullRequestResponse {
  data: {
    user: GitHubPullRequestUser | null;
  };
}

export interface PullRequestItem {
  date: string;
  pullRequestCount: number;
}

// languages used from GitHub API
export interface Language {
  name: string;
}

export interface LanguageEdge {
  size: number;
  node: Language;
}

export interface LanguageConnection {
  edges: LanguageEdge[];
}

export interface Repository {
  name: string;
  languages: LanguageConnection;
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
}

export interface RepositoriesContributedTo {
  totalCount: number;
  nodes: Repository[];
  pageInfo: PageInfo;
}

export interface GitHubLanguageUser {
  repositoriesContributedTo: RepositoriesContributedTo;
}

export interface GitHubLanguageResponse {
  data: {
    user: GitHubLanguageUser | null;
  };
}

export interface LanguageItem {
  name: string;
  size: number;
}
