import Image from 'next/image';
import { ProjectDetails } from '@/types';

import Separator from './ui/separator';

interface ProjectProps {
  project: ProjectDetails;
  index: number;
}

export default function Project({ project, index }: ProjectProps) {
  const {
    title,
    description,
    stack,
    imageName,
    imageAlt,
    siteUrl,
    githubUrl,
    blogUrl,
  } = project;

  return (
    <div>
      {index !== 0 && <Separator className="mb-14 mt-16 sm:mb-20 sm:mt-24" />}
      <div className="block">
        <Image
          src={`/images/projects/${imageName}`}
          alt={imageAlt}
          width={992}
          height={496}
          className="rounded-xl shadow sm:rounded-3xl"
        />
      </div>
      <div className="mt-6 flex flex-col justify-between sm:mt-12 sm:flex-row sm:items-center">
        <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
        <div className="mt-2 flex gap-x-2 text-sm sm:mt-0 sm:gap-x-6 sm:text-lg">
          <a href={siteUrl} target="_blank">
            Website
          </a>
          <a href={githubUrl} target="_blank">
            GitHub
          </a>
          {blogUrl && (
            <a href={blogUrl} target="_blank">
              Blog Post
            </a>
          )}
        </div>
      </div>
      <p className="mt-4 sm:text-xl sm:leading-relaxed">{description}</p>
      <p className="mt-4 text-sm text-gray-500">{stack}</p>
    </div>
  );
}
