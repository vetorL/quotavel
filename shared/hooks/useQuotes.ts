"use client";

import { fetchQuotes } from "@/shared/api/fetch-quotes";
import { Quote } from "@/shared/types/quote";
import { useEffect, useState } from "react";

export function useQuotes(enabled: boolean) {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const loadQuotes = async () => {
      try {
        const data = await fetchQuotes();
        setQuotes(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setLoading(false);
      }
    };

    loadQuotes();
  }, [enabled]);

  return { quotes, loading, error };
}
