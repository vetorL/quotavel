import { prisma } from "@/shared/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const quotes = await prisma.quote.findMany({
    take: 10,
  });
  return NextResponse.json(quotes);
}
