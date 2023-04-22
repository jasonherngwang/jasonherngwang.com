import Image from 'next/image';
import architectureImage from '@/public/images/seamless/architecture.webp';
import pipelineStagesImage from '@/public/images/seamless/pipeline-stages.webp';
import { ExternalLink } from 'lucide-react';

import PipelineAnimation from '@/components/pipeline-animation';
import SeamlessSummary from './seamless-summary';

export default function Seamless() {
  return (
    <section>
      <SeamlessSummary />
      <p className="mt-12 sm:mt-16">
        When code is updated in GitHub, Seamless will automatically{' '}
        <em>source</em>, <em>test</em>, <em>build</em>, and <em>deploy</em> it,
        enabling developers to deliver software quickly and reliably.
      </p>
      <div className="mt-10 hidden sm:mt-8 sm:block">
        <p className="mb-6 hidden sm:block">
          The following animation shows what Seamless does under the hood; click
          {'"'}Next Stage{'"'} to advance. For more detail on each stage, please
          read the{' '}
          <a
            href="https://seamless-cicd.com"
            target="_blank"
            className="underline-offset-2"
          >
            Case Study
          </a>
          .
        </p>
        <PipelineAnimation />
      </div>
      <div className="mt-8 block sm:mt-16 sm:hidden sm:px-8">
        <Image
          src={pipelineStagesImage}
          alt="Pipeline Stages"
          className="rounded-xl border border-gray-200 shadow-md sm:rounded-3xl sm:border-2 sm:shadow-lg"
          placeholder="blur"
          quality={100}
        />
      </div>
      <p className="mt-10 sm:mt-16">
        Seamless is a cloud-native solution built on AWS. It uses a Step
        Functions state machine for task management, and ECS on EC2 for task
        execution. All tasks share data via a Docker volume on EFS. A WebSockets
        API Gateway streams logs and status updates to the dashboard.
      </p>
      <div className="mt-10 block sm:mt-16 sm:px-8">
        <Image
          src={architectureImage}
          alt="Seamless AWS Architecture"
          placeholder="blur"
          quality={100}
        />
      </div>
      <div className="mt-16 flex justify-center sm:mt-20">
        <a
          href="https://seamless-cicd.com"
          target="_blank"
          className="group flex cursor-pointer items-center gap-x-1 text-gray-700 no-underline sm:gap-x-2"
        >
          <span className="group-hover:underline group-hover:underline-offset-4 sm:text-2xl">
            Read the <em>Seamless</em> Case Study
          </span>
          <ExternalLink className="h-4 w-4 sm:h-6 sm:w-6" />
        </a>
      </div>
    </section>
  );
}
