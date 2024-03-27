import React from "react";
import { motion } from "framer-motion";

const AnimatedHeading = ({ children }) => {
  return (
    <motion.h1
      style={{
        background: "linear-gradient(to right, brown, orange)",
        WebkitBackgroundClip: "text",
        color: "transparent",
        display: "inline-block",
        margin: "0",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
    >
      <span
        style={{
          animation: "color-change 5s linear infinite",
        }}
      >
        {children}
      </span>
      <style>
        {`
          @keyframes color-change {
            0% { color: brown; }
            50% { color: orange; }
            100% { color: brown; }
          }
        `}
      </style>
    </motion.h1>
  );
};

export default AnimatedHeading;
