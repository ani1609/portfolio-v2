'use client';

import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import CommitGraph from './commit-graph';
import '../styles/github-footprints.css';
import { CommitResponse, Month, PrResponse, Year } from '@/types/chart';
import { fetcher } from '@/lib/fetcher';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getMonthName } from '@/lib/utils';
import PrGraph from './pr-graph';

export default function GithubFootprints() {
  const githubFootprintsHeadingRef = useRef(null);
  const commitChartRef = useRef(null);
  const prChartRef = useRef(null);
  const years: Year[] = [2021, 2022, 2023, 2024, 2025];
  const commitMonths: (Month | 'all')[] = [
    'all',
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ];
  const prMonths: Month[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [commitMonth, setCommitMonth] = useState<Month | 'all'>(1);
  const [commitYear, setCommitYear] = useState<Year>(2025);
  const [prMonth, setPrMonth] = useState<Month>(1);
  const [prYear, setPrYear] = useState<Year>(2025);

  const {
    data: commitResponse,
    isLoading: isCommitLoading,
    error: isCommitError,
  } = useSWR<CommitResponse>(
    commitMonth && commitYear
      ? `/api/commits?username=ani1609&month=${commitMonth === 'all' ? '' : commitMonth}&year=${commitYear}`
      : null,
    fetcher
  );

  const {
    data: prResponse,
    isLoading: isPrLoading,
    error: isPrError,
  } = useSWR<PrResponse>(
    prMonth && prYear
      ? `/api/pull-requests?username=ani1609&month=${prMonth}&year=${prYear}`
      : null,
    fetcher
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showGithubFootprint');
        }
      });
    }, options);

    const githubFootprintsHeading = githubFootprintsHeadingRef.current;
    const commitChart = commitChartRef.current;
    const prChart = prChartRef.current;

    if (githubFootprintsHeading) observer.observe(githubFootprintsHeading);
    if (commitChart) observer.observe(commitChart);
    if (prChart) observer.observe(prChart);

    return () => {
      if (githubFootprintsHeading) observer.unobserve(githubFootprintsHeading);
      if (commitChart) observer.unobserve(commitChart);
      if (prChart) observer.unobserve(prChart);
    };
  }, []);

  return (
    <section className='github_footprints_parent'>
      <h1 ref={githubFootprintsHeadingRef}>My GitHub Footprints</h1>

      <div className='flex flex-col gap-y-6'>
        {/* commit graph  */}
        <div
          ref={commitChartRef}
          className='commit-chart bg-[#15223e] w-full rounded-md overflow-hidden flex flex-col gap-y-4 p-4 sm:p-6'
        >
          <div className='w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-y-3'>
            <h2>Code Commits</h2>

            <div className='flex items-center gap-x-4'>
              <Select
                value={commitMonth.toString()}
                onValueChange={(value) =>
                  setCommitMonth(
                    value === 'all' ? 'all' : (parseInt(value, 10) as Month)
                  )
                }
              >
                <SelectTrigger className='w-32 h-8 border-primary text-primary hover:bg-hover transition-colors cursor-pointer focus-visible:ring-0'>
                  <SelectValue placeholder='Select Month' />
                </SelectTrigger>
                <SelectContent className='w-32 border-primary z-50'>
                  {commitMonths.map((month, index) => (
                    <SelectItem
                      key={index}
                      value={month.toString()}
                      className='bg-dark-navy text-primary hover:bg-hover cursor-pointer transition-colors'
                    >
                      {month === 'all'
                        ? 'All Month'
                        : getMonthName({ monthNumber: month })}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={commitYear.toString()}
                onValueChange={(value) =>
                  setCommitYear(parseInt(value, 10) as Year)
                }
              >
                <SelectTrigger className='w-20 h-8 border-primary text-primary hover:bg-hover transition-colors cursor-pointer focus-visible:ring-0'>
                  <SelectValue placeholder='Select Year' />
                </SelectTrigger>
                <SelectContent className='w-20 border-primary z-50'>
                  {years.map((year, index) => (
                    <SelectItem
                      key={index}
                      value={year.toString()}
                      className='bg-dark-navy text-primary hover:bg-hover cursor-pointer transition-colors'
                    >
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <CommitGraph
            chartData={commitResponse ? commitResponse.contributions : []}
            isLoading={isCommitLoading}
            error={isCommitError}
          />
        </div>

        {/* pr graph  */}
        <div
          ref={prChartRef}
          className='pr-chart bg-[#15223e] w-full rounded-md overflow-hidden flex flex-col gap-y-4 p-4 sm:p-6'
        >
          <div className='w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-y-3'>
            <h2>Pull Requests</h2>

            <div className='flex items-center gap-x-4'>
              <Select
                value={prMonth.toString()}
                onValueChange={(value) =>
                  setPrMonth(parseInt(value, 10) as Month)
                }
              >
                <SelectTrigger className='w-32 h-8 border-primary text-primary hover:bg-hover transition-colors cursor-pointer focus-visible:ring-0'>
                  <SelectValue placeholder='Select Month' />
                </SelectTrigger>
                <SelectContent className='w-32 border-primary z-50'>
                  {prMonths.map((month, index) => (
                    <SelectItem
                      key={index}
                      value={month.toString()}
                      className='bg-dark-navy text-primary hover:bg-hover cursor-pointer transition-colors'
                    >
                      {getMonthName({ monthNumber: month })}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={prYear.toString()}
                onValueChange={(value) =>
                  setPrYear(parseInt(value, 10) as Year)
                }
              >
                <SelectTrigger className='w-20 h-8 border-primary text-primary hover:bg-hover transition-colors cursor-pointer focus-visible:ring-0'>
                  <SelectValue placeholder='Select Year' />
                </SelectTrigger>
                <SelectContent className='w-20 border-primary z-50'>
                  {years.map((year, index) => (
                    <SelectItem
                      key={index}
                      value={year.toString()}
                      className='bg-dark-navy text-primary hover:bg-hover cursor-pointer transition-colors'
                    >
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <PrGraph
            chartData={prResponse ? prResponse.pullRequests : []}
            isLoading={isPrLoading}
            error={isPrError}
          />
        </div>
      </div>
    </section>
  );
}
