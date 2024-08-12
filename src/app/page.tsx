"use client";
import { Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
  const [input, setInput] = useState("");
  const router = useRouter();

  let handleRoute = () => {
    if (input.includes("https:")) {
      router.push("/" + input);
    }
  };
  return (
    <main className="h-full">
      <div
        data-theme=""
        className="flex max-md:flex-col items-center h-full justify-evenly p-24 max-md:gap-8"
      >
        <div className="flex flex-col items-center justify-center gap-3">
          <Image src={"/chatbot.png"} width={250} height={250} alt="logo" />
          <p className="text-center text-nowrap max-md:text-xs text-gray-500">
            Paste your website Link and ask anything about it !
          </p>
        </div>

        <label className="input bg-transparent input-bordered border-white flex items-center gap-2">
          <input
            type="url"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="grow"
            placeholder="Paste your Website you want to talk"
          />
          <Search
            role="button"
            onClick={handleRoute}
            className="text-green-500"
          />
        </label>
      </div>
    </main>
  );
}
