import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { LanguageItem } from '@/types/github';
import ChartLoading from './chart-loading';
import ChartError from './chart-error';
import ChartNoData from './chart-no-data';
import { getLanguageAbbreviations } from '@/lib/utils';

const chartConfig = {
  size: {
    label: 'Name',
    color: 'var(--primary)',
  },
} satisfies ChartConfig;

interface LanguageGraphProps {
  chartData: LanguageItem[];
  isLoading: boolean;
  error: Error | undefined;
}

export default function LanguageGraph({
  chartData,
  isLoading,
  error,
}: LanguageGraphProps) {
  if (isLoading) {
    return (
      <div className='w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[200px] xl:h-[250px]'>
        <ChartLoading />
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[200px] xl:h-[250px]'>
        <ChartError />
      </div>
    );
  }

  if (chartData.length === 0) {
    return (
      <div className='w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[200px] xl:h-[250px]'>
        <ChartNoData />
      </div>
    );
  }

  return (
    <ChartContainer
      config={chartConfig}
      className='w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[200px] xl:h-[250px]'
    >
      <BarChart accessibilityLayer data={chartData} layout='vertical'>
        <CartesianGrid vertical={false} className='stroke-primary/20' />

        <YAxis
          dataKey='name'
          type='category'
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
          hide
        />
        <XAxis
          dataKey='size'
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={32}
          type='number'
          tickFormatter={(value) => `${value.toLocaleString()}`}
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
        <Bar
          dataKey='size'
          layout='vertical'
          fill='var(--color-size)'
          radius={4}
        >
          <LabelList
            dataKey='name'
            position='right'
            offset={8}
            className='fill-para'
            fontSize={12}
            formatter={(value: string) =>
              getLanguageAbbreviations[value.toLocaleLowerCase()]
            }
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}
