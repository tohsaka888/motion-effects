import React, { useEffect, useMemo, useRef, useState } from "react";
import { TypingProps } from "../type";
import { motion } from "framer-motion";

function Typing({
  text,
  speed,
  conatinerStyle,
  textStyle,
  cursor,
  deleteDelay = 3,
}: TypingProps) {
  const [characters, setCharacters] = useState<string[]>([]);

  // calculate the speed of the character movement
  const typingSpeend = useMemo(() => {
    return speed <= 0 ? 1 : 1 / speed;
  }, [speed]);

  const inputRef = useRef<number>(-1);
  const deleteRef = useRef<number>(-1);
  const [flag, setFlag] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const texts = text.split("");
    if (flag) {
      inputRef.current = window.setInterval(() => {
        if (index === texts.length - 1) {
          window.clearInterval(inputRef.current);
          window.setTimeout(() => {
            setFlag(false);
          }, deleteDelay * 1000);
        }
        setCharacters((s) => [...s, texts[index]]);
        setIndex((i) => i + 1);
      }, typingSpeend * 1000);
    }

    if (!flag) {
      deleteRef.current = window.setInterval(() => {
        if (index === 0) {
          setFlag(true);
          window.clearInterval(deleteRef.current);
        }
        setCharacters((s) => s.filter((c, i) => i < s.length - 2));
        setIndex((i) => i - 1);
      }, typingSpeend * 300);
    }

    return () => {
      window.clearInterval(inputRef.current);
      window.clearInterval(deleteRef.current);
    };
  }, [text, typingSpeend, flag, index, deleteDelay]);

  return (
    <motion.div
      initial={{ display: "flex", alignItems: "flex-end" }}
      style={conatinerStyle}
    >
      {characters.map((character, index) => {
        return (
          <motion.div
            key={index}
            style={textStyle}
            initial={{ visibility: "hidden" }}
            animate={{ visibility: ["hidden", "visible"] }}
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
          visibility: ["hidden", "visible"],
          opacity: [0, 1],
        }}
        transition={{
          type: "spring",
          repeat: Infinity,
          repeatType: "loop",
          duration: 0.8,
        }}
      >
        {cursor ? cursor : "_"}
      </motion.div>
    </motion.div>
  );
}

export default React.memo(Typing);
