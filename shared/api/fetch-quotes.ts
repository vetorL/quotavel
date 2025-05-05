import { Quote } from "@/shared/types/quote";

export async function fetchQuotes(search: string = ""): Promise<Quote[]> {
  const res = await fetch(`/api/quotes?q=${encodeURIComponent(search)}`);

  if (!res.ok) {
    throw new Error("Failed to fetch quotes");
  }

  return res.json();
}
