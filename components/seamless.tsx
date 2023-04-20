import Image from 'next/image';
import architectureImage from '@/public/images/seamless/architecture.webp';
import pipelineStagesImage from '@/public/images/seamless/pipeline-stages.webp';
import { ArrowUpRight } from 'lucide-react';

import Separator from '@/components/ui/separator';
import SeamlessSummary from './seamless-summary';

export default function Seamless() {
  return (
    <section className="sm:text-xl">
      <SeamlessSummary />
      <p className="mt-10 sm:mt-16">
        When code is updated in GitHub, Seamless will automatically{' '}
        <em>source</em>, <em>test</em>, <em>build</em>, and <em>deploy</em> it,
        enabling developers to deliver software quickly and reliably.
      </p>
      <div className="mt-8 block sm:mt-16 sm:px-8">
        <Image
          src={pipelineStagesImage}
          alt="Pipeline Stages"
          className="rounded-xl border-2 border-gray-200 shadow-md sm:rounded-3xl sm:shadow-lg"
          priority
        />
      </div>
      <p className="mt-8 sm:mt-16">
        Seamless is a cloud-native solution built on AWS. It uses a Step
        Functions state machine for task management, and ECS on EC2 for task
        execution. All tasks share data via a Docker volume on EFS. A WebSockets
        API Gateway streams logs and status updates to the dashboard.
      </p>
      <div className="mt-8 block sm:mt-16 sm:px-8">
        <Image
          src={architectureImage}
          alt="Seamless AWS Architecture"
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
          <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
