"use client";

import Typewriter from "react-ts-typewriter";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-9xl font-bold italic">
        <Typewriter
          text="Quotavel"
          speed={300}
          cursor={true}
          onFinished={() => {}}
        />
      </h1>
    </div>
  );
}
