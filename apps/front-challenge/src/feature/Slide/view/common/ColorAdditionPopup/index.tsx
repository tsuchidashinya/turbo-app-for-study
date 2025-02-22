import styles from "./index.module.scss";
// import clsx from 'clsx'
import { useState } from "react";
import { CircleButton } from "./CircleButton";

interface Props {
  onExecute?: (color: Color) => void;
}

const ColorAdditionPopup = ({ onExecute }: Props) => {
  const [color, setColor] = useState<Color>();

  const handleClick = (): void => {
    // 処理を記述
  };
  return (
    <div className={styles.ColorAdditionPopup}>
      {/** JSXを記述 **/}
      <CircleButton />
    </div>
  );
};

export { ColorAdditionPopup };
