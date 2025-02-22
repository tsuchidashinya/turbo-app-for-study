import { CSSProperties, ReactNode } from "react";
import styles from "./index.module.scss";
// import clsx from 'clsx'
// import { useState } from 'react'

interface Props {}

const CanvasPanel = ({}: Props) => {
  const handleMouseUp = (): void => {
    // 処理を記述
  };
  const calcSelectedShapeId = (): string | undefined => {
    // 処理を記述
  };
  const handleMouseDown = (): void => {
    // 処理を記述
  };
  const handleMouseMove = (): void => {
    // 処理を記述
  };
  return <div className={styles.CanvasPanel}>{/** JSXを記述 **/}</div>;
};

export { CanvasPanel };
