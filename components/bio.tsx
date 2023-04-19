import Image from 'next/image';
import jasonAvatar from '@/public/images/avatars/jason.png';

export default function Bio() {
  return (
    <section className="mt-8 flex gap-x-12 sm:mt-20 sm:text-xl">
      {/* Bio text */}
      <div className="flex flex-col gap-y-3 sm:mt-2 sm:gap-y-6">
        <p>
          Full-stack software engineer in Los Angeles, experienced in
          JavaScript, Ruby, React, Tailwind, Express, PostgreSQL, Docker, and
          AWS.
        </p>
        <p>
          I enjoy diving into complex domains and solving unstructured problems.
          I bring over a decade of engineering experience in autonomously
          accomplishing projects, leading cross-functional efforts, and
          mentoring junior team members. If you would like to work together, let
          {"'"}s chat:{' '}
          <a
            href="mailto:jasonherngwang@gmail.com"
            target="_blank"
            className="underline-offset-2"
          >
            jasonherngwang@gmail.com
          </a>
        </p>
        <p>
          Recently I created{' '}
          <a
            href="https://seamless-cicd.com"
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
          width={170}
          height={170}
          className="rounded-full border border-neutral-200"
          priority
        />
      </div>
    </section>
  );
}
