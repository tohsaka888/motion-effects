import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AlbumProps } from "../";

function Album({
  children,
  text,
  subText,
  tag,
  duration = 0.6,
  shadow = [0.5, 1],
  ...props
}: AlbumProps) {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [shadowSize, setShadowSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const [from, to] = shadow;

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
      {...props}
    >
      {/* 标签 */}
      {tag && (
        <motion.div
          initial={{
            position: "absolute",
            top: "0px",
            left: "0px",
            padding: "0 8px",
            borderRadius: "0 0 4px",
            background: "#ffd75a",
            lineHeight: "28px",
            zIndex: 3,
          }}
        >
          {tag}
        </motion.div>
      )}
      {/* 阴影部分 */}
      <motion.div
        initial={{
          opacity: 0.5,
          zIndex: 1,
        }}
        animate={{
          width: shadowSize.width,
          height: shadowSize.height,
          position: "absolute",
          opacity: isHover ? to : from,
          borderRadius: "3px",
          background:
            "linear-gradient(rgba(0,0,0,0) 0%,rgba(0,0,0,.25) 70%,rgba(0,0,0,.65) 100%)",
        }}
        transition={{
          duration,
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
          width: "100%",
          height: "100%",
          padding: "8px",
        }}
      >
        <motion.div
          initial={{
            position: "absolute",
            bottom: "8px",
            left: "16px",
            zIndex: 2,
          }}
        >
          {text}
          <motion.div
            initial={{
              height: "0px",
              opacity: 0,
              zIndex: 2,
              margin: "8px 0px",
            }}
            animate={{
              height: isHover ? "max-content" : "0px",
              opacity: isHover ? 1 : 0,
              margin: isHover ? "12px 0px" : "8px 0px",
            }}
            transition={{
              duration,
            }}
          >
            {subText}
          </motion.div>
        </motion.div>

        {/* children */}
        <motion.div
          animate={{
            scale: isHover ? 1.1 : 1,
          }}
          transition={{
            duration,
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Album;
