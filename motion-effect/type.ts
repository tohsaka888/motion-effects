import { HTMLMotionProps } from "framer-motion";
import React, { CSSProperties } from "react";

export type AlbumProps = {
  children: React.ReactNode;
  text: React.ReactNode;
  subText: React.ReactNode;
  tag?: string;
  duration?: number;
  shadow?: [number, number];
  scaleSize?: number;
} & HTMLMotionProps<"div">;

export type TypingProps = {
  text: string;
  speed: number;
  conatinerStyle?: CSSProperties;
  textStyle?: CSSProperties;
  cursor?: React.ReactNode;
  deleteDelay?: number;
};
