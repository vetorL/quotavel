"use client";

import { AnimatePresence, motion } from "framer-motion";
import QuoteCard from "./quote-card";

const placeholderQuotes = [
  {
    quote: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Invisible threads are the strongest ties.",
    author: "Friedrich Nietzsche",
  },
];

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

type QuoteCardListProps = {
  visible: boolean;
};

export default function QuoteCardList({ visible }: QuoteCardListProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="grid gap-6 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {placeholderQuotes.map((q, index) => (
            <motion.div key={index} variants={itemVariants}>
              <QuoteCard quote={q.quote} author={q.author} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
