"use client";
import { Message, useChat } from "ai/react";
import React from "react";
import Messages from "./Messages";
import { ArrowLeftSquare, SendHorizonal } from "lucide-react";
import { useRouter } from "next/navigation";

export const ChatWrapper = ({
  sessionId,
  initialMessages,
}: {
  sessionId: string;
  initialMessages: Message[];
}) => {
  const router = useRouter();
  const Back = () => {
    router.back();
  };
  const { messages, handleInputChange, handleSubmit, input } = useChat({
    api: "/api/chat-stream",
    body: { sessionId },
    initialMessages,
  });

  return (
    <div
      data-theme=""
      className="relative h-screen bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2 p-3"
    >
      <span className="flex gap-1 text-sm items-center" onClick={Back}>
        <ArrowLeftSquare className="" />
        Back
      </span>
      <div className="flex-1 text-white bg-zinc-800 justify-between flex flex-col ">
        <Messages messages={messages} />
      </div>
      <form onSubmit={handleSubmit}>
        <label className="input border-none my-2 max-md:input-sm flex items-center gap-2">
          <input
            placeholder="Ask Anything"
            value={input}
            className="input w-full text-black border-none relative"
            onChange={handleInputChange}
            type="text"
          />
          <button className="btn btn-ghost btn-sm" type="submit">
            <SendHorizonal className="text-black" />
          </button>
        </label>
      </form>
    </div>
  );
};
