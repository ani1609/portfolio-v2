'use client';

import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import {
  CommitResponse,
  LanguageResponse,
  type Month,
  PrResponse,
  type Year,
} from '@/types/chart';
import { fetcher } from '@/lib/fetcher';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getMonthName } from '@/lib/utils';
import CommitGraph from './commit-graph';
import PrGraph from './pr-graph';
import LanguageGraph from './language-graph';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import { DotICon, InfoIcon } from '@/assets/icons';
import { Section } from './ui/section';
import { Heading, HeadingLine, HeadingMarker, HeadingText } from './ui/heading';

export default function GithubFootprints() {
  const githubFootprintsHeadingRef = useRef(null);
  const commitChartRef = useRef(null);
  const prChartRef = useRef(null);
  const languageChartRef = useRef(null);
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
  const [commitMonth, setCommitMonth] = useState<Month | 'all'>(
    (new Date().getMonth() + 1) as Month
  );
  const [commitYear, setCommitYear] = useState<Year>(
    new Date().getFullYear() as Year
  );
  const [prMonth, setPrMonth] = useState<Month>(
    (new Date().getMonth() + 1) as Month
  );
  const [prYear, setPrYear] = useState<Year>(new Date().getFullYear() as Year);

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

  const {
    data: languageResponse,
    isLoading: isLanguageLoading,
    error: isLanguageError,
  } = useSWR<LanguageResponse>(`/api/languages?username=ani1609`, fetcher);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
        }
      });
    }, options);

    const githubFootprintsHeading = githubFootprintsHeadingRef.current;
    const commitChart = commitChartRef.current;
    const prChart = prChartRef.current;
    const languageChart = languageChartRef.current;

    if (githubFootprintsHeading) observer.observe(githubFootprintsHeading);
    if (commitChart) observer.observe(commitChart);
    if (prChart) observer.observe(prChart);
    if (languageChart) observer.observe(languageChart);

    return () => {
      if (githubFootprintsHeading) observer.unobserve(githubFootprintsHeading);
      if (commitChart) observer.unobserve(commitChart);
      if (prChart) observer.unobserve(prChart);
      if (languageChart) observer.unobserve(languageChart);
    };
  }, []);

  return (
    <Section
      id='github-footprints-section'
      className='relative z-[2] mt-[150px] flex flex-col justify-start gap-y-6 sm:gap-y-10 mx-auto px-5 sm:px-10 md:px-20 w-full lg:px-0 lg:w-[75%]'
    >
      <Heading id='github-footprints-heading' ref={githubFootprintsHeadingRef}>
        <HeadingMarker>04.</HeadingMarker>
        <HeadingText> My GitHub Footprints</HeadingText>
        <HeadingLine />
      </Heading>

      <div className='flex flex-col gap-y-6'>
        {/* commit graph  */}
        <div
          ref={commitChartRef}
          id='commit-chart'
          className=' bg-[#15223e] w-full rounded-md overflow-hidden flex flex-col gap-y-4 p-4 sm:p-6'
        >
          <div className='w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-y-3'>
            <h2 className='font-noto-sans text-heading font-medium text-base sm:text-lg md:text-xl'>
              Code Commits
            </h2>

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

        <div className='flex flex-col lg:flex-row gap-6'>
          {/* pr graph  */}
          <div
            ref={prChartRef}
            id='pr-chart'
            className=' flex-1 bg-[#15223e] w-full rounded-md overflow-hidden flex flex-col gap-y-4 p-4 sm:p-6'
          >
            <div className='w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-y-3'>
              <h2 className='font-noto-sans text-heading font-medium text-base sm:text-lg md:text-xl'>
                Pull Requests
              </h2>

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

          {/* language graph  */}
          <div
            ref={languageChartRef}
            id='language-chart'
            className=' flex-1 bg-[#15223e] w-full rounded-md overflow-hidden flex flex-col gap-y-4 p-4 sm:p-6'
          >
            <div className='w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-y-3'>
              <h2 className='font-noto-sans text-heading font-medium text-base sm:text-lg md:text-xl'>
                Languages Used
              </h2>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className='p-1 text-primary cursor-pointer'>
                    <InfoIcon />
                  </TooltipTrigger>
                  <TooltipContent className='flex flex-col gap-y-1'>
                    <div className='flex items-center gap-x-1'>
                      <DotICon />
                      <p>Data is based on the most recent 100 repositories.</p>
                    </div>

                    <div className='flex items-center gap-x-1'>
                      <DotICon />
                      <p>All sizes are displayed in MB.</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <LanguageGraph
              chartData={languageResponse ? languageResponse.languages : []}
              isLoading={isLanguageLoading}
              error={isLanguageError}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
