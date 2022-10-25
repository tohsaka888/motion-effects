import React, { useMemo, useState } from "react";
import { TypingProps } from "../type";
import { motion } from "framer-motion";

function Typing({
  text,
  speed,
  conatinerStyle,
  textStyle,
  cursor,
}: TypingProps) {
  const characters = useMemo(() => {
    return text.split("");
  }, [text]);

  const typingSpeend = useMemo(() => {
    return speed <= 0 ? 1 : 1 / speed;
  }, [speed]);

  return (
    <motion.div
      initial={{ display: "flex", alignItems: "flex-end" }}
      style={conatinerStyle}
    >
      {characters.map((character, index) => {
        return (
          <motion.div
            key={index}
            initial={{ display: "none" }}
            animate={{
              display: "block",
            }}
            transition={{
              delay: (index + 1) * typingSpeend,
            }}
            style={textStyle}
          >
            {character !== " " ? (
              <motion.span>{character}</motion.span>
            ) : (
              <motion.span>&nbsp;</motion.span>
            )}
          </motion.div>
        );
      })}
      <motion.div
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          type: "spring",
          repeat: Infinity,
          repeatType: "loop",
          duration: 1,
        }}
      >
        {cursor ? cursor : "_"}
      </motion.div>
    </motion.div>
  );
}

export default Typing;
