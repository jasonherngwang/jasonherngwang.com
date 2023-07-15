import Image from 'next/image';
import seamlessScreenshot from '@/public/images/seamless/seamless.webp';
import { ArrowUpRight } from 'lucide-react';

import GradientButtonLink from '@/components/ui/gradient-button-link';

export default function SeamlessSummary() {
  return (
    <div id="seamless">
      <p className="text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-base">
        Featured Project
      </p>
      <div className="mt-2 flex flex-col justify-between sm:flex-row sm:items-center">
        <h2 className="text-2xl font-bold text-indigo-700 sm:text-4xl">
          Seamless CI/CD
        </h2>
        <GradientButtonLink
          href="https://seamless-cicd.com/case-study"
          title="Read Case Study"
        >
          <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </GradientButtonLink>
      </div>
      <p className="mt-8">
        Recently I created Seamless, an open-source, low-config CI/CD pipeline
        for containerized microservice applications on ECS Fargate. It features
        a CLI for AWS deployment, a real-time dashboard, integration testing
        with Docker Compose, rollbacks, log storage in Redis, and parallel
        execution of pipelines.
      </p>
      <div className="mt-8 block sm:mt-16">
        <Image
          src={seamlessScreenshot}
          alt="Seamless CI/CD screenshot"
          className="rounded-xl shadow-lg sm:rounded-3xl"
          placeholder="blur"
          quality={100}
          priority
        />
      </div>
    </div>
  );
}
