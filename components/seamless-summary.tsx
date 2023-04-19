import Image from 'next/image';
import seamlessImage from '@/public/images/seamless/seamless.png';

import GradientButtonLink from '@/components/ui/gradient-button-link';

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
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

export default function SeamlessSummary() {
  return (
    <div id="seamless">
      <div className="mt-2 flex flex-col justify-between sm:flex-row sm:items-center">
        <h2 className="text-2xl font-bold text-indigo-700 sm:text-4xl">
          Seamless CI/CD
        </h2>
        <GradientButtonLink
          href="https://seamless-cicd.com"
          title="Read Case Study"
        >
          {UpArrowIcon}
        </GradientButtonLink>
      </div>
      <p className="mt-8 leading-relaxed">
        Seamless is an open-source, low-config CI/CD pipeline for containerized
        microservice applications on ECS Fargate. It features a CLI for AWS
        deployment, a real-time dashboard, integration testing with Docker
        Compose, rollbacks, containerized task execution, and parallel execution
        of pipelines.
      </p>
      <div className="mt-8 block sm:mt-16">
        <Image
          src={seamlessImage}
          alt="Seamless CI/CD screenshot"
          width={992}
          className="rounded-xl shadow-lg sm:rounded-3xl"
          unoptimized={true}
          priority
        />
      </div>
    </div>
  );
}
