import React, { ReactNode, forwardRef } from 'react';
import { Section as SectionType } from '@/types/nav';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: SectionType;
  className?: string;
  children: ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, className, children, ...props }, ref) => {
    return (
      <section id={id} ref={ref} className={cn('', className)} {...props}>
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export { Section };
