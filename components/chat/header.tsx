import Image from 'next/image';
import seamlessLogo from '@/public/images/seamless/seamless-logo.webp';

export default function ChatHeader() {
  return (
    <div className="absolute top-0 flex w-full items-center justify-center gap-x-4 rounded-t-3xl bg-gradient-to-b from-indigo-100/70 from-70% to-transparent px-3 pb-12 pt-5 backdrop-blur-sm">
      <Image
        src={seamlessLogo}
        alt="Seamless Logo"
        className="h-14 w-14 rounded-full border-2 border-gray-200 bg-white p-0.5 shadow"
        placeholder="blur"
        quality={100}
      />
      <div className="flex flex-col">
        <span className="text-lg font-bold sm:text-2xl">
          Ask <span className="text-indigo-600">Seamie</span> Anything!
        </span>
        <span className="text-sm font-medium">
          Seamie is a LangChain chatbot
        </span>
      </div>
    </div>
  );
}
