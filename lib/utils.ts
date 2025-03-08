import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getMonthDateRange({
  year,
  month,
}: {
  year: number;
  month: number;
}): { from: string; to: string } {
  const from = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0)).toISOString();
  const to = new Date(Date.UTC(year, month, 0, 23, 59, 59)).toISOString();

  return { from, to };
}
