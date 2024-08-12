import { cn } from "@/lib/utils";
import React from "react";

interface MessageProps {
  content: string;
  isUserMessage: boolean;
}

const Message = ({ content, isUserMessage }: MessageProps) => {
  return (
    <div
      className={cn("chat my-3", {
        "chat-start": !isUserMessage,
        "chat-end": isUserMessage,
      })}
    >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt={isUserMessage ? "user" : "Website"}
            src={isUserMessage ? "/user.jpg" : "/chatbot.jpg"}
          />
        </div>
      </div>
      <div
        className={cn("chat-bubble text-justify", {
          "chat-bubble-success": isUserMessage,
        })}
      >
        {content}
      </div>
    </div>
  );
};

export default Message;
