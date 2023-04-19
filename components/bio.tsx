import Image from 'next/image';
import jasonAvatar from '@/public/images/avatars/jason.png';

export default function Bio() {
  return (
    <section className="mt-8 flex gap-x-12 sm:mt-20 sm:text-xl">
      {/* Bio text */}
      <div className="flex flex-col gap-y-3 sm:mt-4 sm:gap-y-6">
        <p className="sm:leading-relaxed">
          Full-stack software engineer with experience in JavaScript, Ruby,
          React, Tailwind, Express, PostgreSQL, Docker, and AWS. Based in Los
          Angeles.
        </p>
        <p className="sm:leading-relaxed">
          I recently created{' '}
          <a
            href="https://launchschool.com/capstone"
            target="_blank"
            className="font-semibold text-indigo-700 underline-offset-2"
          >
            Seamless
          </a>
          , an open-source CI/CD pipeline for containerized microservices.
        </p>
      </div>
      {/* Avatar, hidden on mobile */}
      <div className="hidden shrink-0 sm:block">
        <Image
          src={jasonAvatar}
          alt="Jason Wang"
          width={140}
          height={140}
          className="rounded-full border border-neutral-200"
          unoptimized={true}
          priority
        />
      </div>
    </section>
  );
}
