import styles from "./index.module.scss";
// import clsx from 'clsx'
// import { useState } from 'react'

type Shape = "triangle" | "rectangle" | "circle";

interface Props {
  onExecute?: (shape: Shape) => void;
}

const ShapeAdditionPopup = ({ onExecute }: Props) => {
  const handleClick = (shape: Shape): void => {
    // 処理を記述
  };
  return <div className={styles.ShapeAdditionPopup}>{/** JSXを記述 **/}</div>;
};

export { ShapeAdditionPopup };
