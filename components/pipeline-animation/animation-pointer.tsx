'use client';

import React from 'react';
import { X } from 'lucide-react';

export default function AnimationPointer() {
  const [isShown, setIsShown] = React.useState(false);

  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsShown(entry.isIntersecting);
    });

    if (wrapperRef.current !== null) {
      observer.observe(wrapperRef.current);
    }
  }, []);

  return (
    <div ref={wrapperRef} className="hidden xl:relative xl:block">
      <div
        className={`absolute right-[-80px] top-[25px] transition-all duration-1000 ${
          isShown
            ? 'visible translate-x-0 opacity-100'
            : 'invisible translate-x-[30px] opacity-0'
        }`}
      >
        <div className="flex w-[230px] items-center gap-x-2 rounded-2xl bg-indigo-50 px-4 py-3">
          <div className="text-3xl">✨</div>
          <div className="pointer-events-none text-base font-semibold leading-tight text-indigo-700">
            Learn how Seamless works!
          </div>
          <button
            type="button"
            className="z-10 cursor-pointer"
            onClick={() => {
              setIsShown(false);
            }}
          >
            <X className="text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
