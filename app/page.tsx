"use client";

import SearchBar from "@/shared/components/search-bar";
import Title from "@/shared/components/title";
import { useState } from "react";

export default function Home() {
  const [titleFinished, setTitleFinished] = useState(false);

  return (
    <div className="relative min-h-screen bg-white">
      <Title onFinished={() => setTitleFinished(true)} />
      <SearchBar visible={titleFinished} />
    </div>
  );
}
