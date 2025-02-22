import { FillColorButton } from "./FillColorButton"
import styles from "./index.module.scss"
import { StrokeColorButton } from "./StrokeColorButton"

const ShapeFunctionPanel = () => {
  return (
    <div className={styles.ShapeFunctionPanel}>
      <FillColorButton />
      <StrokeColorButton />
    </div>
  )
}

export { ShapeFunctionPanel }
