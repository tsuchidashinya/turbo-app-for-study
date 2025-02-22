import styles from "./index.module.scss";
// import clsx from 'clsx'
import { useState } from "react";
import { ColorAdditionPopup } from "../../../common/ColorAdditionPopup";

interface Props {}

const FillColorButton = ({}: Props) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>();

  const handleClick = (): void => {
    // 処理を記述
  };
  const handleExecute = (color: Color): void => {
    // 処理を記述
  };
  return (
    <div className={styles.FillColorButton}>
      {/** JSXを記述 **/}
      <ColorAdditionPopup />
    </div>
  );
};

export { FillColorButton };
