import { otherProjects } from '@/config/projects';
import Project from '@/components/project';
import SeamlessSummary from '@/components/seamless-summary';
import Separator from '@/components/ui/separator';

const UpArrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
  >
    <line x1="12" x2="12" y1="19" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);

export const metadata = {
  title: 'Projects',
};

export default function Projects() {
  return (
    <main>
      <section className="mt-12 sm:mt-24 sm:text-xl">
        <p
          id="featured-project"
          className="text-xs font-bold uppercase tracking-wider text-neutral-500 sm:text-base"
        >
          Featured Project
        </p>
        <SeamlessSummary />
      </section>
      <Separator className="my-16 sm:my-24" />
      <h1 className="mb-6 text-2xl font-semibold text-neutral-500 sm:mb-12 sm:text-3xl">
        Other Projects
      </h1>
      {otherProjects.map((project, index) => (
        <Project key={project.title} project={project} index={index} />
      ))}
      <Separator className="mb-2 mt-12 sm:mt-20" />
      <div className="mb-12 flex justify-end sm:mb-20 sm:text-xl">
        <a
          href="#featured-project"
          className="group flex cursor-pointer items-center gap-x-1 no-underline"
        >
          <span>
            Return to <em>Featured Project</em>
          </span>
          {UpArrowIcon}
        </a>
      </div>
    </main>
  );
}
