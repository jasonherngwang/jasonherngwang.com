import { ReactNode } from 'react';
import clsx from 'clsx';

interface GradientButtonLinkProps {
  href: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function GradientButtonLink({
  href,
  title,
  children,
  className,
}: GradientButtonLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      className={clsx(
        'group mt-2 flex w-fit cursor-pointer items-center gap-x-1 rounded-full border-none bg-gradient-to-r from-indigo-700 from-0% via-indigo-700 via-40% to-indigo-800 to-90% px-5 py-2 text-sm font-bold tracking-wide text-white no-underline shadow-lg hover:from-indigo-800 hover:via-indigo-800 hover:to-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95 dark:shadow-indigo-600/30 sm:mt-0 sm:px-6 sm:py-2.5 sm:text-base',
        className,
      )}
    >
      <span>{title}</span>
      {children}
    </a>
  );
}
