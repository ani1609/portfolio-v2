import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { CommitItem } from '@/types/github';
import ChartLoading from './chart-loading';
import ChartError from './chart-error';
import ChartNoData from './chart-no-data';

const chartConfig = {
  contributionCount: {
    label: 'Commits',
    color: 'var(--primary)',
  },
} satisfies ChartConfig;

interface CommitGraphProps {
  chartData: CommitItem[];
  isLoading: boolean;
  error: Error | undefined;
}

export default function CommitGraph({
  chartData,
  isLoading,
  error,
}: CommitGraphProps) {
  if (isLoading) {
    return <ChartLoading />;
  }

  if (error) {
    return <ChartError />;
  }

  if (chartData.length === 0) {
    return <ChartNoData />;
  }

  return (
    <ChartContainer
      config={chartConfig}
      className='w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px]'
    >
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={
          {
            // left: 12,
            // right: 12,
          }
        }
      >
        <CartesianGrid vertical={false} className='stroke-primary/20' />
        <XAxis
          dataKey='date'
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={32}
          tickFormatter={(value) => {
            const date = new Date(value);
            return date.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            });
          }}
        />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              indicator='line'
              className='border border-primary bg-dark-navy text-para'
            />
          }
        />
        <defs>
          <linearGradient id='fillDesktop' x1='0' y1='0' x2='0' y2='1'>
            <stop
              offset='5%'
              stopColor='var(--color-contributionCount)'
              stopOpacity={0.8}
            />
            <stop
              offset='95%'
              stopColor='var(--color-contributionCount)'
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>

        <Area
          dataKey='contributionCount'
          type='natural'
          fill='url(#fillDesktop)'
          fillOpacity={0.4}
          stroke='var(--color-contributionCount)'
          stackId='a'
        />
      </AreaChart>
    </ChartContainer>
  );
}
