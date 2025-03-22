import { Month } from '@/types/chart';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { NextResponse } from 'next/server';
const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const openProjectLink = ({
  deployedLink,
  githubLink,
}: {
  deployedLink?: string;
  githubLink?: string;
}) => {
  const link = deployedLink || githubLink; // Open deployed link if available, else open github link
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
  'javascript': 'JS',
  'typescript': 'TS',
  'python': 'PY',
  'java': 'JAVA',
  'c': 'C',
  'c++': 'CPP',
  'c#': 'CS',
  'swift': 'SWIFT',
  'go': 'GO',
  'rust': 'RS',
  'ruby': 'RB',
  'php': 'PHP',
  'kotlin': 'KT',
  'dart': 'DART',
  'scala': 'SCALA',
  'r': 'R',
  'html': 'HTML',
  'css': 'CSS',
  'scss': 'SCSS',
  'less': 'LESS',
};

export function validateGitHubToken(): NextResponse | undefined {
  if (!GITHUB_ACCESS_TOKEN) {
    return NextResponse.json(
      { error: 'GitHub Access Token is missing' },
      { status: 400 }
    );
  }
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
