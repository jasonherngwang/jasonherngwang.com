import Bio from '@/components/bio';
import Seamless from '@/components/seamless';
import Separator from '@/components/ui/separator';

export default function Home() {
  return (
    <main>
      <Bio />
      <Separator className="my-12 sm:my-24" />
      <Seamless />
    </main>
  );
}
