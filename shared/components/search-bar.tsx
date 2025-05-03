"use client";

import SearchIcon from "@/shared/assets/search-icon";
import { motion } from "framer-motion";

interface SearchBarProps {
  visible: boolean;
}

export default function SearchBar({ visible }: SearchBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100vh" }}
      animate={
        visible
          ? {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
            }
          : {}
      }
      className="max-w-md mx-auto pt-40"
    >
      <div
        className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg 
        bg-white overflow-hidden border border-gray-300"
      >
        <div className="grid place-items-center h-full w-12 text-gray-300">
          <SearchIcon />
        </div>

        <input
          className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
          type="text"
          id="search"
          placeholder="Search quotes..."
        />
      </div>
    </motion.div>
  );
}
