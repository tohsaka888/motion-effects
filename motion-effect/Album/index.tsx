import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type AlbumProps = {
  children: React.ReactNode;
  text: React.ReactNode;
  subText: React.ReactNode;
};

function Album({ children, text, subText }: AlbumProps) {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [shadowSize, setShadowSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  const containerRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const bounds = containerRef.current.getBoundingClientRect();
    setShadowSize({
      width: bounds.width,
      height: bounds.height,
    });
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{
        width: "max-content",
        height: "max-content",
        position: "relative",
        cursor: "pointer",
        overflow: "hidden",
      }}
      onHoverStart={() => {
        setIsHover(true);
      }}
      onHoverEnd={() => {
        setIsHover(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0.15,
        }}
        animate={{
          width: shadowSize.width,
          height: shadowSize.height,
          position: "absolute",
          opacity: isHover ? 0.3 : 0.15,
          borderRadius: "3px",
          background:
            "linear-gradient(rgba(0,0,0,0) 0%,rgba(0,0,0,.25) 70%,rgba(0,0,0,.65) 100%)",
        }}
        transition={{
          duration: 0.5,
          width: {
            duration: 0,
          },
          height: {
            duration: 0,
          },
        }}
      />
      <motion.div
        initial={{
          position: "absolute",
          bottom: "0px",
          left: "0px",
        }}
      >
        {text}
        <motion.div
          initial={{
            height: "0px",
            display: "none",
            opacity: 0,
          }}
          animate={{
            height: isHover ? "max-content" : "0px",
            opacity: isHover ? 1 : 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          {subText}
        </motion.div>
      </motion.div>
      <motion.div
        animate={{
          scale: isHover ? 1.2 : 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default Album;
