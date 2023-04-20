import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import Bio from '@/components/bio';
import Seamless from '@/components/seamless';
import Separator from '@/components/ui/separator';

export default function Home() {
  return (
    <main>
      <Bio />
      <Separator className="my-12 sm:my-24" />
      <Seamless />
      <Separator className="mb-2 mt-16 sm:mt-24" />
      <div className="mb-12 flex justify-end sm:mb-20 sm:text-xl">
        <Link
          href="/projects"
          className="group flex cursor-pointer items-center gap-x-1 no-underline"
        >
          <span>View all projects</span>
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 sm:h-6 sm:w-6" />
        </Link>
      </div>
    </main>
  );
}
