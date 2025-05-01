"use client";

import Typewriter from "react-ts-typewriter";

export default function Title() {
  return (
    <h1 className="text-9xl font-bold italic">
      <Typewriter
        text="Quotavel"
        speed={300}
        cursor={true}
        onFinished={() => {}}
      />
    </h1>
  );
}
