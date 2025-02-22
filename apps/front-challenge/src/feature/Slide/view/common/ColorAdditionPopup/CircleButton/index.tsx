import { CSSProperties, ReactNode } from "react";
import styles from "./index.module.scss";
// import clsx from 'clsx'
// import { useState } from 'react'

type Color = "#000000";

interface Props {
  color?: Color;

  onClick?: (color: Color) => void;
}

const CircleButton = ({ color, onClick }: Props) => {
  return <div className={styles.CircleButton}>{/** JSXを記述 **/}</div>;
};

export { CircleButton };
