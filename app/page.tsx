"use client";

import QuoteCardList from "@/shared/components/quote-card-list";
import SearchBar from "@/shared/components/search-bar";
import Title from "@/shared/components/title";
import { useState } from "react";

export default function Home() {
  const [titleFinished, setTitleFinished] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div>
        <Title onFinished={() => setTitleFinished(true)} />
      </div>

      <SearchBar visible={titleFinished} value={search} onChange={setSearch} />

      <div className="mt-16 px-4 pb-16">
        <QuoteCardList visible={titleFinished} search={search} />
      </div>
    </div>
  );
}
