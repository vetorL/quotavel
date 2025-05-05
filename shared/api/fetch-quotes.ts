import { Quote } from "@/shared/types/quote";

export async function fetchQuotes(): Promise<Quote[]> {
  const res = await fetch("/api/quotes");

  if (!res.ok) {
    throw new Error("Failed to fetch quotes");
  }

  return res.json();
}
