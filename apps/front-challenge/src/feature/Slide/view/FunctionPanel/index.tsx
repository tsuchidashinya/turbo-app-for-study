import { useStore } from "../../controller/state/slidePage"
import styles from "./index.module.scss"
import { SelectButton } from "./SelectButton"
import { ShapeAdditionButton } from "./ShapeAdditionButton"
import { ShapeFunctionPanel } from "./ShapeFunctionPanel"

const FunctionPanel = () => {
  const { slidePageState } = useStore((store) => store)

  return (
    <div className={styles["function-panel"]}>
      <SelectButton />
      <ShapeAdditionButton />
      {slidePageState.selectedShapeIds.length > 0 && <ShapeFunctionPanel />}
    </div>
  )
}

export { FunctionPanel }
