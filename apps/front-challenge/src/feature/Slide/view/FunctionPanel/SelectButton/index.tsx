import { ActionButton } from "@packages/ui-library"
import { changeMode } from "../../../controller/actions/changeMode"
import { useStore } from "../../../controller/state"

const SelectButton = () => {
  const { slidePageState, updateSlidePageState } = useStore((store) => store)

  const handleClick = (): void => {
    const newState = changeMode(slidePageState, { mode: "select" })
    updateSlidePageState(newState)
  }

  return <ActionButton icon="adsClick" onClick={handleClick} />
}

export { SelectButton }
