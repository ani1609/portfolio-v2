import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { PullRequestItem } from '@/types/github';
import ChartLoading from './chart-loading';
import ChartError from './chart-error';
import ChartNoData from './chart-no-data';

const chartConfig = {
  pullRequestCount: {
    label: 'Pull Requests',
    color: 'var(--primary)',
  },
} satisfies ChartConfig;

interface PrGraphProps {
  chartData: PullRequestItem[];
  isLoading: boolean;
  error: Error | undefined;
}

export default function PrGraph({ chartData, isLoading, error }: PrGraphProps) {
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
      className='w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[200px] xl:h-[250px]'
    >
      <BarChart accessibilityLayer data={chartData}>
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

        <Bar dataKey='pullRequestCount' fill='var(--primary)' radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
