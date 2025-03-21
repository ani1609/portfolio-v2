import React, { ReactNode, forwardRef } from 'react';
import { Section as SectionType } from '@/types/nav';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: SectionType;
  children: ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, children, ...props }, ref) => {
    return (
      <section id={id} ref={ref} {...props}>
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export { Section };
