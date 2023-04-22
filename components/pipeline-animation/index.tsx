'use client';

import { SVGProps, useState } from 'react';
import Image from 'next/image';
import { PipelineStage } from '@/types';
import { AnimatePresence, motion } from 'framer-motion';

import Separator from '../ui/separator';
import { pipelineStages } from './stagesInfo';

const placeholderImageBase64 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAXklEQVR4AV3B0QnEIBBF0VuapdhJ0tkUpGFYP1aHRN6yhEDwHP5K+trwULOauX22qccl34CaL71NlUQzLboRWg0nXIsQ3bRoRklTb6dqBnw/9Zg6dm41NwsN71YSwA9ayaQhdqaOlAAAAABJRU5ErkJggg==';

export default function PipelineAnimation() {
  const [step, setStep] = useState(1);
  const currentStage = pipelineStages[step - 1];

  return (
    <div className="mx-auto hidden w-full max-w-5xl flex-col items-center rounded-3xl border-2 border-indigo-500 bg-white p-12 py-8 shadow-lg sm:flex">
      <h2 className="mt-2 shrink-0 font-semibold text-indigo-800 sm:text-2xl md:text-3xl">
        Stages of the <em>Seamless CI/CD</em> Pipeline
      </h2>
      <div className="mt-12 flex w-full items-start justify-between gap-x-2 rounded">
        {pipelineStages.map((stage) => (
          <Step
            key={stage.step}
            step={stage.step}
            currentStep={step}
            title={pipelineStages[stage.step - 1].title}
          />
        ))}
      </div>
      <Separator className="my-10" />
      <Content
        currentStage={currentStage}
        step={currentStage.step}
        setStep={setStep}
      />
    </div>
  );
}

interface StepProps {
  step: number;
  currentStep: number;
  title: string;
}

function Step({ step, currentStep, title }: StepProps) {
  const status =
    currentStep === step
      ? 'active'
      : currentStep < step
      ? 'inactive'
      : 'complete';

  return (
    <motion.div
      animate={status}
      initial={status}
      className="flex w-32 flex-col items-center gap-y-2"
    >
      <div className="relative">
        <motion.div
          transition={rippleTransition}
          variants={rippleVariants}
          className="absolute inset-0 rounded-full"
        />

        <motion.div
          variants={backgroundVariants}
          transition={backgroundTransition}
          className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-400 bg-white font-semibold text-gray-500"
        >
          <div className="relative flex items-center justify-center">
            <AnimatePresence>
              {status === 'complete' ? (
                <CheckIcon className="h-5 w-5 text-white" />
              ) : (
                <motion.span
                  key="step"
                  animate={{ opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  className="absolute font-bold"
                >
                  {step}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      <motion.span
        transition={titleTransition}
        variants={titleVariants}
        className="text-center text-base"
      >
        {title}
      </motion.span>
    </motion.div>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <motion.path
        variants={checkIconVariants}
        transition={checkIconTransition}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

interface ContentProps {
  currentStage: PipelineStage;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function Content({ currentStage, step, setStep }: ContentProps) {
  const { title, imageName, purpose, how } = currentStage;
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="grid grid-cols-4 gap-x-8">
      <div className="col-span-1">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={step}
            custom={direction}
            variants={contentIconVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              ease: 'easeOut',
              type: 'tween',
              opacity: { duration: 0.7 },
            }}
            className="mx-auto sm:w-[120px] sm:px-1 md:w-[160px] md:px-4 lg:w-[200px]"
          >
            <Image
              src={`/images/seamless/pipeline-stage-icons/${imageName}`}
              alt={title}
              width={250}
              height={250}
              className="w-full rounded-full shadow-lg"
              blurDataURL={placeholderImageBase64}
              placeholder="blur"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="col-span-3 flex min-h-[360px] flex-col justify-between">
        <div>
          <h2 className="mb-2 font-bold uppercase tracking-wider text-indigo-700">
            Purpose
          </h2>
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.p
              key={step}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                ease: 'easeOut',
                type: 'tween',
                opacity: { duration: 0.7 },
              }}
              className="text-lg leading-relaxed"
            >
              {purpose}
            </motion.p>
          </AnimatePresence>
          <h2 className="mb-2 mt-8 font-bold uppercase tracking-wider text-indigo-700">
            How Seamless does it
          </h2>
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.p
              key={step}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                ease: 'easeOut',
                type: 'tween',
                opacity: { duration: 0.5 },
              }}
              className="max-w-prose pr-4 text-lg leading-relaxed"
            >
              {how}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="mt-4 flex justify-between">
          <button
            onClick={() => {
              paginate(-1);
              setStep(step < 2 ? step : step - 1);
            }}
            className="rounded-lg bg-gray-100 px-5 py-2 font-semibold text-gray-600 hover:bg-gray-200 hover:text-gray-800 active:bg-gray-300"
          >
            Previous
          </button>
          <button
            onClick={() => {
              paginate(1);
              setStep(step > pipelineStages.length - 1 ? step : step + 1);
            }}
            className={`${
              step > pipelineStages.length - 1
                ? 'pointer-events-none opacity-50'
                : ''
            } flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2 font-semibold text-white hover:bg-indigo-700 active:bg-indigo-800`}
          >
            Next Stage
          </button>
        </div>
      </div>
    </div>
  );
}

const x = 1;
const t = (v: number) => x * v;

const titleTransition = { duration: t(0.2) };
const titleVariants = {
  inactive: {
    fontWeight: 500,
    color: 'var(--gray-600)',
  },
  active: {
    fontWeight: 700,
    color: 'var(--indigo-700)',
  },
  complete: {
    fontWeight: 500,
    color: 'var(--gray-600)',
  },
};

const backgroundTransition = { duration: t(0.2) };
const backgroundVariants = {
  inactive: {
    background: 'var(--white)',
    borderColor: 'var(--gray-200)',
    color: 'var(--gray-400)',
  },
  active: {
    background: 'var(--indigo-50)',
    borderColor: 'var(--indigo-700)',
    color: 'var(--indigo-700)',
  },
  complete: {
    background: 'var(--indigo-500)',
    borderColor: 'var(--indigo-500)',
  },
};

const rippleTransition = {
  duration: t(0.6),
  delay: t(0.2),
  type: 'tween',
  ease: 'circOut',
};

const rippleVariants = {
  inactive: {
    background: 'var(--indigo-200)',
  },
  active: {
    background: 'var(--indigo-200)',
    scale: 1,
    transition: {
      duration: t(0.3),
      type: 'tween',
      ease: 'circOut',
    },
  },
  complete: {
    background: 'var(--indigo-200)',
    scale: 1.25,
  },
};

const checkIconTransition = {
  ease: 'easeOut',
  type: 'tween',
  delay: t(0.2),
  duration: t(0.3),
};
const checkIconVariants = {
  complete: {
    pathLength: [0, 1],
  },
};

const contentIconVariants = {
  enter: (direction: number) => {
    return {
      // x: direction > 0 ? 5 : -5,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      // x: direction < 0 ? 5 : -5,
      opacity: 0,
    };
  },
};

const contentVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 30 : -30,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 30 : -30,
      opacity: 0,
    };
  },
};
