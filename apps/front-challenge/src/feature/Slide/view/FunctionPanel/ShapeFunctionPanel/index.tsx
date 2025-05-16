import { FillColorButton } from "./FillColorButton"
import styles from "./index.module.scss"
import { StrokeColorButton } from "./StrokeColorButton"

const ShapeFunctionPanel = () => {
  return (
    <div className={styles["shape-function-panel"]}>
      <FillColorButton />
      <StrokeColorButton />
    </div>
  )
}

export { ShapeFunctionPanel }
