import React, { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { DetailSwitchProps } from "../type";

function DetailSwitch({ width, height, config }: DetailSwitchProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const calcTransformValue = useCallback(
    (idx: number) => {
      if (idx === currentIndex) {
        return {
          position: "translate3d(0%, 0, 0)",
          zIndex: 1,
        };
      } else {
        if (currentIndex !== config.length - 1) {
          if (idx === currentIndex + 1) {
            return {
              position: "translate3d(100%, 0, 0)",
              zIndex: -1,
            };
          } else {
            return {
              position: "translate3d(-100%, 0, 0)",
              zIndex: 1,
            };
          }
        } else {
          if (idx !== 0) {
            return {
              position: "translate3d(-100%, 0, 0)",
              zIndex: 1,
            };
          } else {
            return {
              position: "translate3d(100%, 0, 0)",
              zIndex: -1,
            };
          }
        }
      }
    },
    [config.length, currentIndex]
  );

  return (
    <motion.div
      initial={{
        width,
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
      onClick={() => {
        setCurrentIndex((currentIndex + 1) % config.length);
        // setCurrentIndex((config.length - 1 - currentIndex) % config.length);
      }}
    >
      {/* Picture Area */}
      <motion.div initial={{ flex: 1, overflow: "hidden", display: "flex" }}>
        {config.map((item, index) => {
          const { position, zIndex } = calcTransformValue(index);
          return (
            <motion.div
              key={index}
              initial={{
                width: `calc(${width} / 2)`,
                height,
                background: item.background,
                zIndex: 1,
                position: currentIndex === index ? "static" : "absolute",
                transform: position,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              animate={{
                position: currentIndex === index ? "static" : "absolute",
                transform: position,
                zIndex,
              }}
              transition={{
                ease: [0.8, 0.1, 0.1, 1],
                duration: 1,
              }}
            >
              <motion.img
                src={item.pic}
                width={"80%"}
                initial={{ transform: "translate3d(0%,0,0)" }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  transform: position,
                  zIndex,
                }}
                transition={{
                  delay: 0.15,
                  ease: [0.8, 0.1, 0.1, 0.9],
                  duration: 1,
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>
      {/* Text Area */}
      <motion.div
        initial={{
          flex: 1,
          zIndex: 2,
          background: "#fff",
          height,
          width: `calc(${width} / 2)`,
        }}
      >
        123
      </motion.div>
    </motion.div>
  );
}

export default DetailSwitch;
