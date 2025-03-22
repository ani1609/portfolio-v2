import * as React from 'react';
import { cn } from '@/lib/utils';

// interface HeadingProps {
//   className?: string;
//   marker: string;
//   text: string;
// }

// const Heading = React.forwardRef<HTMLDivElement, HeadingProps>(
//   ({ marker, text, className, ...props }, ref) => {
//     return (
//       <div
//         ref={ref}
//         className={cn(
//           `flex justify-start items-center gap-x-2 sm:gap-x-4`,
//           className
//         )}
//         {...props}
//       >
//         <h1 className='font-sf-mono mt-auto text-base sm:text-lg md:text-xl lg:text-[1.375rem] text-primary font-light'>
//           {marker}
//         </h1>
//         <h1 className='font-noto-sans text-heading text-[1.375rem] sm:text-2xl md:text-[1.6255rem] lg:text-[1.75rem] font-semibold'>
//           {text}
//         </h1>
//         <span className='inline-block h-px grow bg-light-navy max-w-[17rem]'></span>
//       </div>
//     );
//   }
// );

// Heading.displayName = 'Heading';

// export { Heading };

interface HeadingProps {
  className?: string;
  children: React.ReactNode;
}

interface HeadingMarkerProps {
  className?: string;
  children: React.ReactNode;
}

interface HeadingTextProps {
  className?: string;
  children: React.ReactNode;
}

interface HeadingLineProps {
  className?: string;
}

const Heading = React.forwardRef<HTMLDivElement, HeadingProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          `flex justify-start items-center gap-x-2 sm:gap-x-4`,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Heading.displayName = 'Heading';

const HeadingMarker = React.forwardRef<HTMLDivElement, HeadingMarkerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(
          `font-sf-mono mt-auto text-base sm:text-lg md:text-xl lg:text-[1.375rem] text-primary font-light`,
          className
        )}
        {...props}
      >
        {children}
      </h1>
    );
  }
);

HeadingMarker.displayName = 'HeadingMarker';

const HeadingText = React.forwardRef<HTMLDivElement, HeadingTextProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(
          `font-noto-sans text-heading text-[1.375rem] sm:text-2xl md:text-[1.6255rem] lg:text-[1.75rem] font-semibold`,
          className
        )}
        {...props}
      >
        {children}
      </h1>
    );
  }
);

HeadingText.displayName = 'HeadingText';

const HeadingLine = React.forwardRef<HTMLSpanElement, HeadingLineProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          `inline-block h-px grow bg-light-navy max-w-[17rem]`,
          className
        )}
        {...props}
      ></span>
    );
  }
);

HeadingLine.displayName = 'HeadingLine';

export { Heading, HeadingMarker, HeadingText, HeadingLine };
