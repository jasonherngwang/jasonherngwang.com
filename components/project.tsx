import Image from 'next/image';
import { ProjectDetails } from '@/types';

import { getPlaceholderImage } from '@/lib/image-utils';
import Separator from './ui/separator';

interface ProjectProps {
  project: ProjectDetails;
  index: number;
}

export default (async function Project({ project, index }: ProjectProps) {
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

  const imagePath = `/images/projects/${imageName}`;
  const blurDataURL = await getPlaceholderImage(imagePath);

  return (
    <div>
      {index !== 0 && <Separator className="mb-14 mt-16 sm:mb-20 sm:mt-24" />}
      <div className="block">
        <Image
          src={imagePath}
          alt={imageAlt}
          width={1500}
          height={750}
          className="rounded-xl shadow sm:rounded-3xl"
          blurDataURL={blurDataURL}
          placeholder="blur"
          quality={100}
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
      <p className="mt-4">{description}</p>
      {/* <p className="mt-4 text-sm text-gray-500">{stack}</p> */}
    </div>
  );
} as unknown as (props: ProjectProps) => JSX.Element);
