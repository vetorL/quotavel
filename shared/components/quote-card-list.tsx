"use client";

import { Quote } from "@/shared/type/quote";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import QuoteCard from "./quote-card";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1.2,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

export default function QuoteCardList({ visible }: { visible: boolean }) {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!visible) return;

    const fetchQuotes = async () => {
      try {
        const res = await fetch("/api/quotes");
        const data = await res.json();
        setQuotes(data);
      } catch (error) {
        console.error("Failed to fetch quotes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && !loading && (
        <motion.div
          className="grid gap-6 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {quotes.map((q, index) => (
            <motion.div key={index} variants={itemVariants}>
              <QuoteCard quote={q.quote} author={q.author} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
