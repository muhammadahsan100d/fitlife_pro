"use client";

import dynamic from "next/dynamic";

// Dynamically import ChatBot to avoid SSR issues
const ChatBotInner = dynamic(() => import("@quickstart-ai/chatbot").then((mod) => mod.ChatBot), {
  ssr: false,
});

interface ChatBotProps {
  token: string;
}

export default function ChatBot({ token }: ChatBotProps) {
  return <ChatBotInner token={token} />;
}
