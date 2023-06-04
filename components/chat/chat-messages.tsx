import React from 'react';
import { ChatMessageType } from '@/types';

import ChatMessage, { LoadingMessage } from '@/components/chat/chat-message';

interface ChatMessageProps {
  messages: ChatMessageType[];
  isLoading: boolean;
}

export default function ChatMessages({
  messages,
  isLoading,
}: ChatMessageProps) {
  const bottomRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (messages.length > 1) {
      bottomRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [messages]);

  return (
    <div className="flex h-full flex-col overflow-y-auto overscroll-y-none">
      <div className="p-12"></div>
      <div className="mt-auto flex flex-col gap-y-6 p-7">
        {messages.map((message) => (
          <ChatMessage key={message.id} type={message.sender}>
            {message.message}
          </ChatMessage>
        ))}
        {isLoading && <LoadingMessage />}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
