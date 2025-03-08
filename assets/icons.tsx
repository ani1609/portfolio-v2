import * as React from 'react';

interface IconProps {
  className?: string;
  props?: React.SVGProps<SVGSVGElement>;
}

export const FolderIcon = ({ className, ...props }: IconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
    {...props}
  >
    <path d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z' />
  </svg>
);

export const GithubIcon = ({ className, ...props }: IconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
    {...props}
  >
    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
    <path d='M9 18c-4.51 2-5-2-7-2' />
  </svg>
);

export const InstagramIcon = ({ className, ...props }: IconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
    {...props}
  >
    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
    <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
    <line x1={17.5} x2={17.51} y1={6.5} y2={6.5} />
  </svg>
);

export const LinkedinIcon = ({ className, ...props }: IconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
    {...props}
  >
    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
    <rect width={4} height={12} x={2} y={9} />
    <circle cx={4} cy={4} r={2} />
  </svg>
);

export const RedirectIcon = ({ className, ...props }: IconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
    {...props}
  >
    <path d='M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6' />
    <path d='m21 3-9 9' />
    <path d='M15 3h6v6' />
  </svg>
);

export const RightChevronIcon = ({ className, ...props }: IconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
    {...props}
  >
    <path d='m9 18 6-6-6-6' />
  </svg>
);

export const TwitterIcon = ({ className, ...props }: IconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
    {...props}
  >
    <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
  </svg>
);

export const DiscordIcon = ({ className, ...props }: IconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    aria-hidden='true'
    className={className}
    {...props}
  >
    <path d='M18.93 5.641a16.5 16.5 0 0 0-4.07-1.262.06.06 0 0 0-.066.03c-.175.313-.37.721-.506 1.042a15.2 15.2 0 0 0-4.573 0A11 11 0 0 0 9.2 4.41a.06.06 0 0 0-.065-.031 16.5 16.5 0 0 0-4.07 1.262.06.06 0 0 0-.028.024c-2.593 3.873-3.303 7.652-2.954 11.383a.07.07 0 0 0 .026.047 16.6 16.6 0 0 0 4.994 2.524.06.06 0 0 0 .07-.023q.58-.788 1.022-1.661a.063.063 0 0 0-.035-.088 11 11 0 0 1-1.56-.744.064.064 0 0 1-.007-.107q.159-.118.31-.242a.06.06 0 0 1 .065-.009c3.273 1.494 6.817 1.494 10.051 0a.06.06 0 0 1 .066.008q.15.124.31.244a.064.064 0 0 1-.005.106q-.747.435-1.561.743a.064.064 0 0 0-.034.089c.3.581.643 1.135 1.02 1.66a.06.06 0 0 0 .07.024 16.5 16.5 0 0 0 5.003-2.524.07.07 0 0 0 .026-.046c.417-4.314-.699-8.062-2.957-11.384a.05.05 0 0 0-.026-.024M8.684 14.776c-.985 0-1.797-.905-1.797-2.016s.796-2.016 1.797-2.016c1.01 0 1.813.913 1.798 2.016 0 1.111-.796 2.016-1.798 2.016m6.646 0c-.985 0-1.797-.905-1.797-2.016s.796-2.016 1.797-2.016c1.009 0 1.813.913 1.797 2.016 0 1.111-.788 2.016-1.797 2.016' />
  </svg>
);

export const ArrowupFromDotIcon = ({ className, ...props }: IconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
    {...props}
  >
    <path d='m5 9 7-7 7 7' />
    <path d='M12 16V2' />
    <circle cx={12} cy={21} r={1} />
  </svg>
);
