// import clsx from 'clsx'
import { ActionButton } from "@packages/ui-library"
import { useState } from "react"
import { changeFillColor } from "../../../../controller/actions/changeFillColor"
import { Color, useStore } from "../../../../controller/state/slidePage"
import { ColorAdditionPopup } from "../../../common/ColorAdditionPopup"

const FillColorButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const { slidePageState, updateSlidePageState } = useStore((store) => store)

  const handleClick = (): void => {
    setIsPopupOpen(true)
  }
  const handleExecute = (color: Color): void => {
    const newState = changeFillColor(slidePageState, { fillColor: color })
    updateSlidePageState(newState)
  }
  return (
    <>
      <ActionButton size="small" icon="fillColor" onClick={handleClick} />
      {isPopupOpen && <ColorAdditionPopup onExecute={handleExecute} />}
    </>
  )
}

export { FillColorButton }
