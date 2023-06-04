'use client';

import React from 'react';
import { ChatMessageType } from '@/types';

import { API_URL } from '@/lib/constants';
import ChatInput from '@/components/chat/chat-input';
import ChatMessages from '@/components/chat/chat-messages';
import ChatHeader from '@/components/chat/header';

const initialMessages: ChatMessageType[] = [
  {
    id: '1',
    sender: 'ai',
    message:
      "Hi, I'm Seamie! Let me know if you have any questions about Seamless CI/CD.",
  },
];

export enum QueryStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

export default function Chat() {
  const [messages, setMessages] =
    React.useState<ChatMessageType[]>(initialMessages);
  const [queryStatus, setQueryStatus] = React.useState<QueryStatus>(
    QueryStatus.Idle,
  );

  const addMessage = (message: string, sender: string) => {
    setMessages((messages) => [
      ...messages,
      { id: (messages.length + 1).toString(), sender, message },
    ]);
  };

  const sendQuery = async (query: string) => {
    setQueryStatus(QueryStatus.Loading);

    const queryWithHistory = {
      query,
      history: messages,
    };

    addMessage(query, 'human');

    try {
      const response = await fetch(`${API_URL}/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(queryWithHistory),
      });

      const json = await response.json();

      if (json.answer) {
        addMessage(json.answer, 'ai');
        setQueryStatus(QueryStatus.Success);
      } else {
        throw new Error(json.error || json.detail);
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        addMessage(error.message, 'ai');
        setQueryStatus(QueryStatus.Error);
      }
    }
  };

  return (
    <div
      id="seamie"
      className="relative mx-auto flex h-[500px] max-w-4xl flex-col rounded-3xl border-2 border-indigo-500 shadow-lg sm:h-[700px]"
    >
      <div className="h-3" />
      <ChatHeader />
      <ChatMessages
        messages={messages}
        isLoading={queryStatus === QueryStatus.Loading}
      />
      <ChatInput
        sendQuery={sendQuery}
        isLoading={queryStatus === QueryStatus.Loading}
      />
    </div>
  );
}
