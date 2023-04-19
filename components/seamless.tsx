import Image from 'next/image';
import architectureImage from '@/public/images/seamless/architecture.png';
import pipelineStagesImage from '@/public/images/seamless/pipeline-stages.png';

import Separator from '@/components/ui/separator';
import SeamlessSummary from './seamless-summary';

const UpRightArrowIcon = (
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
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

export default function Seamless() {
  return (
    <section className="sm:text-xl">
      <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 sm:text-base">
        Featured Project
      </p>
      <SeamlessSummary />
      <p className="mt-10 max-w-prose sm:mt-16 sm:leading-relaxed">
        When code is updated in GitHub, Seamless will automatically{' '}
        <em>source</em>, <em>test</em>, <em>build</em>, and <em>deploy</em> it,
        enabling developers to deliver software quickly and reliably.
      </p>
      <div className="mt-8 block sm:mt-16 sm:px-8">
        <Image
          src={pipelineStagesImage}
          alt="Pipeline Stages"
          width={992}
          className="rounded-xl shadow-md sm:rounded-3xl sm:shadow-lg"
          unoptimized={true}
          priority
        />
      </div>
      <p className="mt-8 max-w-prose sm:mt-16 sm:leading-relaxed">
        Seamless is a cloud-native solution built on AWS using EC2, ECS,
        Fargate, Step Functions, RDS, ElastiCache, EFS, SNS, Lambda, and API
        Gateway.
      </p>
      <div className="mt-8 block sm:mt-16 sm:px-8">
        <Image
          src={architectureImage}
          alt="Seamless AWS Architecture"
          width={992}
          unoptimized={true}
          priority
        />
      </div>
      <Separator className="mb-2 mt-12 sm:mt-20" />
      <div className="mb-12 flex justify-end sm:mb-20">
        <a
          href="https://seamless-cicd.com"
          target="_blank"
          className="group flex cursor-pointer items-center gap-x-1 no-underline"
        >
          <span>
            Read the <em>Seamless</em> Case Study
          </span>
          {UpRightArrowIcon}
        </a>
      </div>
    </section>
  );
}
