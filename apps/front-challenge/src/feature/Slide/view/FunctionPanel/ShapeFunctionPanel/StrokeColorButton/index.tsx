import { ActionButton } from "@packages/ui-library"
import { useState } from "react"
import { updateStrokeColor } from "../../../../controller/actions/updateStrokeColor"
import { useStore } from "../../../../controller/state"
import { ColorAdditionPopup } from "../../../common/ColorAdditionPopup"
import styles from "./index.module.scss"

const StrokeColorButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>()
  const { slidePageState, updateSlidePageState } = useStore((store) => store)

  const handleClick = (): void => {
    setIsPopupOpen(true)
  }

  const handleExecute = (color: Color): void => {
    const newState = updateStrokeColor(slidePageState, { strokeColor: color })
    updateSlidePageState(newState)
  }
  return (
    <div className={styles.StrokeColorButton}>
      <ActionButton icon="borderColor" />
      {isPopupOpen && <ColorAdditionPopup onExecute={handleExecute} />}
    </div>
  )
}

export { StrokeColorButton }
