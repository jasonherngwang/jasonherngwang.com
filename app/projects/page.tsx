import Link from 'next/link';
import { ArrowLeft, ArrowUp } from 'lucide-react';

import { otherProjects } from '@/config/projects';
import Project from '@/components/project';
import SeamlessSummary from '@/components/seamless-summary';
import Separator from '@/components/ui/separator';

export const metadata = {
  title: 'Projects',
};

export default function Projects() {
  return (
    <main>
      <section className="mt-12 sm:mt-24">
        <SeamlessSummary />
      </section>
      <Separator className="my-16 sm:my-24" />
      <div className="mb-10 mt-2 sm:mb-16">
        <h1 className="text-2xl font-semibold text-gray-600 sm:text-4xl">
          Other Projects
        </h1>
      </div>
      {otherProjects.map((project, index) => (
        <Project key={project.title} project={project} index={index} />
      ))}
      <Separator className="mb-2 mt-20 sm:mt-28" />
      <div className="mb-12 flex justify-between sm:mb-20 sm:text-xl">
        <Link
          href="/"
          className="group flex cursor-pointer items-center gap-x-1 no-underline"
        >
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5 sm:h-6 sm:w-6" />
          <span>Home</span>
        </Link>
        <a
          href="#seamless"
          className="group flex cursor-pointer items-center gap-x-1 no-underline"
        >
          <span>
            Return to <em>Featured Project</em>
          </span>
          <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 sm:h-6 sm:w-6" />
        </a>
      </div>
    </main>
  );
}
