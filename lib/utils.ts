import { Month } from '@/types/chart';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { NextResponse } from 'next/server';
import { GITHUB_ACCESS_TOKEN } from '@/lib/config';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const openProjectLink = ({
  deployedLink,
  githubLink,
}: {
  deployedLink?: string | undefined;
  githubLink?: string | undefined;
}) => {
  const link = deployedLink ?? githubLink;
  if (link) {
    window.open(link, '_blank');
  } else {
    console.warn('No link available');
  }
};

export const getMonthName = ({ monthNumber }: { monthNumber: Month }) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return months[monthNumber - 1];
};

export const getLanguageAbbreviations: Record<string, string> = {
  'astro': 'ASTRO',
  'bash': 'SH',
  'c': 'C',
  'c#': 'CS',
  'c++': 'CPP',
  'css': 'CSS',
  'dart': 'DART',
  'dockerfile': 'DOCKER',
  'go': 'GO',
  'graphql': 'GQL',
  'haskell': 'HS',
  'html': 'HTML',
  'java': 'JAVA',
  'javascript': 'JS',
  'json': 'JSON',
  'kotlin': 'KT',
  'less': 'LESS',
  'lua': 'LUA',
  'markdown': 'MD',
  'md': 'MD',
  'nuxt': 'NUXT',
  'objective-c': 'OBJC',
  'perl': 'PL',
  'php': 'PHP',
  'python': 'PY',
  'r': 'R',
  'ruby': 'RB',
  'rust': 'RS',
  'scala': 'SCALA',
  'scss': 'SCSS',
  'shell': 'SH',
  'solidity': 'SOL',
  'sql': 'SQL',
  'svelte': 'SVELTE',
  'swift': 'SWIFT',
  'toml': 'TOML',
  'typescript': 'TS',
  'vue': 'VUE',
  'yaml': 'YAML',
  'yml': 'YAML',
  'zig': 'ZIG',
};

export function validateGitHubToken(): NextResponse | null {
  if (!GITHUB_ACCESS_TOKEN) {
    return NextResponse.json(
      { error: 'GitHub Access Token is missing' },
      { status: 400 }
    );
  }

  return null;
}

export function getGitHubHeaders() {
  return {
    'Authorization': `Bearer ${GITHUB_ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
  };
}

export function validateUsername(req: Request): {
  error?: NextResponse;
  username?: string;
} {
  const url = new URL(req.url);
  const username = url.searchParams.get('username');

  if (!username) {
    return {
      error: NextResponse.json(
        { error: 'Username is required' },
        { status: 400 }
      ),
    };
  }

  return { username };
}

export function validateMonth(req: Request): {
  error?: NextResponse;
  month?: number;
} {
  const url = new URL(req.url);
  const month = url.searchParams.get('month');

  if (!month) {
    return {
      error: NextResponse.json({ error: 'Month is required' }, { status: 400 }),
    };
  }

  const monthNum = parseInt(month, 10);
  if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
    return {
      error: NextResponse.json(
        { error: 'Invalid month. Must be between 1 and 12' },
        { status: 400 }
      ),
    };
  }

  return { month: monthNum };
}

export function validateYear(req: Request): {
  error?: NextResponse;
  year?: number;
} {
  const url = new URL(req.url);
  const year = url.searchParams.get('year');

  if (!year) {
    return {
      error: NextResponse.json({ error: 'Year is required' }, { status: 400 }),
    };
  }

  const yearNum = parseInt(year, 10);
  const currentYear = new Date().getFullYear();

  if (isNaN(yearNum) || yearNum < 2000 || yearNum > currentYear) {
    return {
      error: NextResponse.json(
        { error: `Invalid year. Must be between 2000 and ${currentYear}` },
        { status: 400 }
      ),
    };
  }

  return { year: yearNum };
}

export const scrollToSection = ({ id }: { id: string }) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
