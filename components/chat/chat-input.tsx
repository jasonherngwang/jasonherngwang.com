import React from 'react';

import { cn } from '@/lib/utils';

interface ChatInputProps {
  sendQuery: (query: string) => void;
  isLoading: boolean;
}

export default function ChatInput({ sendQuery, isLoading }: ChatInputProps) {
  const [query, setQuery] = React.useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (query) {
      sendQuery(query);
      setQuery('');
    }
  };

  return (
    <div className="flex shrink-0 items-center justify-center rounded-b-3xl border-t border-gray-200 bg-gray-100">
      <form onSubmit={handleSubmit} className="relative mb-10 mt-8 w-10/12">
        <input
          id="query-input"
          required
          className="w-full appearance-none rounded-xl border-2 border-gray-300 px-4 py-3 pr-12 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none"
          placeholder="Ask a question"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          type="submit"
          disabled={!query || isLoading}
          className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg bg-indigo-500 transition-colors hover:bg-indigo-600 disabled:cursor-auto disabled:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={cn(
              'h-6 w-6 stroke-2',
              query && !isLoading
                ? 'fill-white stroke-indigo-600'
                : 'fill-white stroke-gray-400',
            )}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
