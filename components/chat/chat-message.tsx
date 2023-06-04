import React from 'react';

import { cn } from '@/lib/utils';

interface ChatMessageProps {
  type: string;
  children: React.ReactNode;
}

export default function ChatMessage({ type, children }: ChatMessageProps) {
  return (
    <div
      className={cn(
        'max-w-2xl rounded-2xl px-3 py-2 shadow-sm',
        type === 'ai'
          ? 'self-start rounded-bl-sm bg-gray-200'
          : 'self-end rounded-br-sm bg-indigo-600 text-white ',
      )}
    >
      {children}
    </div>
  );
}

export function LoadingMessage() {
  return (
    <ChatMessage type="ai">
      <div className="flex h-5 items-center px-2 pt-2">
        <div className="mr-1 h-2 w-2 animate-dot-color-change rounded-full"></div>
        <div className="mr-1 h-2 w-2 animate-dot-color-change rounded-full animation-delay-[667ms]"></div>
        <div className="mr-1 h-2 w-2 animate-dot-color-change rounded-full animation-delay-[1333ms]"></div>
      </div>
    </ChatMessage>
  );
}
