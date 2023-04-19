import { ArrowUp } from 'lucide-react';

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
      <section className="mt-12 sm:mt-24 sm:text-xl">
        <SeamlessSummary />
      </section>
      <Separator className="my-16 sm:my-24" />
      <div className="mb-10 mt-2 sm:mb-16">
        <h1 className="text-2xl font-semibold text-neutral-500 sm:text-3xl">
          Other Projects
        </h1>
        <p className="mt-2 sm:text-xl">
          Personal and group projects created during Launch School
        </p>
      </div>
      {otherProjects.map((project, index) => (
        <Project key={project.title} project={project} index={index} />
      ))}
      <Separator className="mb-2 mt-12 sm:mt-20" />
      <div className="mb-12 flex justify-end sm:mb-20 sm:text-xl">
        <a
          href="#seamless"
          className="group flex cursor-pointer items-center gap-x-1 no-underline"
        >
          <span>
            Return to <em>Featured Project</em>
          </span>
          <ArrowUp className="transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>
    </main>
  );
}
