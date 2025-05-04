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
  {
    quote:
      "To live is to suffer, to survive is to find some meaning in the suffering.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "There are no facts, only interpretations.",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "No one can construct for you the bridge upon which precisely you must cross the stream of life.",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "The man of knowledge must be able not only to love his enemies but also to hate his friends.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "The snake which cannot cast its skin has to die.",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "In individuals, insanity is rare; but in groups, parties, nations and epochs, it is the rule.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "You must have chaos within you to give birth to a dancing star.",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "Whoever fights monsters should see to it that in the process he does not become a monster.",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "Sometimes people don’t want to hear the truth because they don’t want their illusions destroyed.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Is man merely a mistake of God’s? Or God merely a mistake of man?",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Become who you are!",
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
