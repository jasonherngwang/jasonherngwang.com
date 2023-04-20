import clsx from 'clsx';

export default function Separator({ className }: { className: string }) {
  return (
    <div
      className={clsx('h-[1px] w-full shrink-0 bg-gray-300', className)}
    ></div>
  );
}
