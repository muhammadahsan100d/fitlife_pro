"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import the named export 'ChatBot' to avoid SSR issues
const ChatBot = dynamic(
  () => import("@quickstart-ai/chatbot").then((mod) => mod.ChatBot),
  {
    ssr: false,
  }
);

export default function ChatBotWrapper() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // 1. Suppress third-party styled-components DOM attribute warnings in console
      const originalConsoleError = console.error;
      console.error = (...args) => {
        const msg = args[0];
        if (
          typeof msg === "string" &&
          (msg.includes("non-boolean attribute") || 
           msg.includes("unknown prop") || 
           msg.includes("styled-components"))
        ) {
          return; // Ignore styled-components DOM attribute warnings
        }
        originalConsoleError(...args);
      };

      // 2. Patch window.fetch to redirect Pollinations requests to our local API proxy
      if (!window.__chatbot_patched) {
        const originalFetch = window.fetch;
        
        window.fetch = async function (input, init) {
          let url = "";
          if (typeof input === "string") {
            url = input;
          } else if (input instanceof URL) {
            url = input.toString();
          } else {
            url = (input as Request).url;
          }

          // Intercept requests to text.pollinations.ai and route them through our API proxy
          if (url.startsWith("https://text.pollinations.ai")) {
            const proxyUrl = `/api/chatbot-proxy?url=${encodeURIComponent(url)}`;
            return originalFetch(proxyUrl, init);
          }

          return originalFetch(input, init);
        };

        window.__chatbot_patched = true;
      }
    }
  }, []);

  // Render with your newly registered business token
  return (
    <ChatBot
      token="A1ED-AFEFD52F-3233B0D3"
      greetingMessage="Hi! This is the FitLife Pro assistant. FitLife Pro is a premium. How can I help you today?"
    />
  );
}

// Extend global Window interface to avoid TypeScript errors
declare global {
  interface Window {
    __chatbot_patched?: boolean;
  }
}
