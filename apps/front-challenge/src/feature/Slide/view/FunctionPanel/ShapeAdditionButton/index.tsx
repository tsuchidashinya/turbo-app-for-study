import styles from "./index.module.scss"
// import clsx from 'clsx'
import { ActionButton } from "@packages/ui-library"
import { useState } from "react"
import { changeMode } from "../../../controller/actions/changeMode"
import { useStore } from "../../../controller/state"
import { ShapeAdditionPopup } from "./ShapeAdditionPopup"

type ShapeType = "triangle" | "rectangle" | "circle"

const ShapeAdditionButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)
  const { slidePageState, updateSlidePageState } = useStore((store) => store)

  const handleClick = (): void => {
    setIsPopupOpen(true)
  }
  const handleExecute = (shapeType: ShapeType): void => {
    const newState = changeMode(slidePageState, { mode: "shape", shapeType })
    updateSlidePageState(newState)
    setIsPopupOpen(false)
  }
  return (
    <div className={styles.ShapeAdditionButton}>
      <ActionButton icon="category" onClick={handleClick} />
      {isPopupOpen && <ShapeAdditionPopup onExecute={handleExecute} />}
    </div>
  )
}

export { ShapeAdditionButton }
