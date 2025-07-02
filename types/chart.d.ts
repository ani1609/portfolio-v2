import { CommitItem, LanguageItem, PullRequestItem } from './github';

export interface CommitResponse {
  usename: string;
  year: number;
  contributions: CommitItem[];
}

export interface PrResponse {
  username: string;
  year: number;
  month: number;
  pullRequests: PullRequestItem[];
}

export interface LanguageResponse {
  username: string;
  languages: LanguageItem[];
}

export type Year = 2021 | 2022 | 2023 | 2024 | 2025;

export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
