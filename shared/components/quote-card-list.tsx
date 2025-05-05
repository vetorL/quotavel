"use client";

import { useQuotes } from "@/shared/hooks/useQuotes";
import { AnimatePresence, motion } from "framer-motion";
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
  const { quotes, loading } = useQuotes(visible);

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
