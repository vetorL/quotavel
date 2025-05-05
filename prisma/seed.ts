import { parse } from "csv-parse";
import { createReadStream } from "fs";
import { prisma } from "../shared/lib/prisma"; // adjust path if needed

async function main() {
  const quotes: { quote: string; author: string }[] = [];

  const parser = createReadStream("quotes.csv").pipe(
    parse({
      columns: true,
      trim: true,
      skip_empty_lines: true,
    })
  );

  for await (const record of parser) {
    if (record.quote && record.author) {
      quotes.push({
        quote: record.quote,
        author: record.author,
      });
    }
  }

  console.log(`Found ${quotes.length} quotes. Seeding...`);

  for (const quote of quotes) {
    await prisma.quote.create({ data: quote });
  }

  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
