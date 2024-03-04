import Image from 'next/image';
import jasonAvatar from '@/public/images/avatars/jason.webp';

export default function Bio() {
  return (
    <section className="mt-8 flex gap-x-12 sm:mt-20">
      {/* Bio text */}
      <div className="flex flex-col gap-y-3 sm:mt-2 sm:gap-y-6">
        <p>
          Full-stack software engineer at{' '}
          <a
            href="https://coherehealth.com/"
            target="_blank"
            className="text-[#EA1D63] underline-offset-2 hover:text-[#F83275]"
          >
            Cohere Health
          </a>
          , striving to improve the patient healthcare experience by
          streamlining the prior authorization process.
        </p>
        <p>
          Enthusiastic about collaborating with product and design to deliver
          useful and efficient solutions for users. Experienced in TypeScript,
          Python, Java, React, Tailwind, Express, Postgres, Mongo, Docker, and
          AWS. Based in Los Angeles.
        </p>
      </div>
      {/* Avatar, hidden on mobile */}
      <div className="hidden w-[170px] shrink-0 sm:block">
        <Image
          src={jasonAvatar}
          alt="Jason Wang"
          placeholder="blur"
          className="rounded-full border border-gray-200"
          quality={100}
          priority
        />
      </div>
    </section>
  );
}
