import { prisma } from "@/shared/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || ""; // Get the search query or default to empty string

  const quotes = await prisma.quote.findMany({
    take: 10,
    where: {
      OR: [
        { quote: { contains: query, mode: "insensitive" } },
        { author: { contains: query, mode: "insensitive" } },
      ],
    },
    orderBy: { id: "asc" },
  });

  return NextResponse.json(quotes);
}
