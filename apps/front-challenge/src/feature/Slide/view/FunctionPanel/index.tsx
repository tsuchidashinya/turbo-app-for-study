import { useStore } from "../../controller/state"
import styles from "./index.module.scss"
import { SelectButton } from "./SelectButton"
import { ShapeAdditionButton } from "./ShapeAdditionButton"
import { ShapeFunctionPanel } from "./ShapeFunctionPanel"

const FunctionPanel = () => {
  const { slidePageState } = useStore((store) => store)

  return (
    <div className={styles.FunctionPanel}>
      <SelectButton />
      <ShapeAdditionButton />
      {slidePageState.mode === "shape" && <ShapeFunctionPanel />}
    </div>
  )
}

export { FunctionPanel }
