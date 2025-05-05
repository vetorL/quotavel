"use client";

import { fetchQuotes } from "@/shared/api/fetch-quotes";
import { Quote } from "@/shared/types/quote";
import { useEffect, useState } from "react";

export function useQuotes(enabled: boolean, search: string) {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const loadQuotes = async () => {
      try {
        const data = await fetchQuotes(search); // Pass search query
        setQuotes(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setLoading(false);
      }
    };

    loadQuotes();
  }, [enabled, search]); // Trigger when either 'enabled' or 'search' changes

  return { quotes, loading, error };
}
