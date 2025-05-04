"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Typewriter from "react-ts-typewriter";

interface TitleProps {
  onFinished: () => void;
}

export default function Title({ onFinished }: TitleProps) {
  const [finished, setFinished] = useState(false);

  const handleFinish = () => {
    setFinished(true);
    onFinished();
  };

  return (
    <motion.h1
      className="text-9xl font-bold italic absolute"
      initial={{ top: "50%", left: "50%", x: "-50%", y: "-50%", scale: 1 }}
      animate={{
        top: finished ? "2rem" : "50%",
        left: "50%",
        x: "-50%",
        y: finished ? 0 : "-50%",
        scale: finished ? 0.6 : 1,
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Typewriter
        text="Quotavel"
        speed={300}
        cursor={false}
        onFinished={handleFinish}
      />
    </motion.h1>
  );
}
