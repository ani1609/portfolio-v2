// commit response from GitHub API

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
