import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface MessageProps {
  content: string;
  isUserMessage: boolean;
}

const Message = ({ content, isUserMessage }: MessageProps) => {
  return (
    <div
      className={cn("chat px-3 my-3", {
        "chat-start": !isUserMessage,
        "chat-end": isUserMessage,
      })}
    >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <Image 
            width={100}
            height={100}
            alt={isUserMessage ? "user" : "Website"}
            src={isUserMessage ? "/user.jpg" : "/chatbot.png"}
          />
        </div>
      </div>
      <div
        className={cn("chat-bubble text-sm text-justify ", {
          "chat-bubble-success": isUserMessage,
        })}
      >
        {content}
      </div>
    </div>
  );
};

export default Message;
