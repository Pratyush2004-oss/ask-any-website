import React from "react";
import { type Message as TMessage } from "ai/react";
import Message from "./Message";
import { MessageSquare } from "lucide-react";

interface MessagesProps {
  messages: TMessage[];
}
const Messages = ({ messages }: MessagesProps) => {
  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
      {messages.length>0 ? (
        messages.map((message, idx) => (
          <Message
            key={idx}
            content={message.content}
            isUserMessage={message.role === "user"}
          />
        ))
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
            <MessageSquare className="size-8 text-blue-500"/>
            <h3 className="font-semibold text-xl">You're all set</h3>
            <p className="text-zinc-500 text-sm">Ask your firist question to get started</p>
        </div>
      )}
    </div>
  );
};

export default Messages;