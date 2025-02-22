import cloneDeep from "lodash.clonedeep"
import { SlidePage } from "../../state"

type Params = {
  mode: "select" | "shape" | "fillColor" | "strokeColor"
  shapeType?: "rectangle" | "circle" | "triangle" | undefined
}

/**
 * モードを切り替える
 * @param state スライドページの状態
 * @param params パラメータ
 */
const changeMode = (state: SlidePage, params: Params): SlidePage => {
  const newState = cloneDeep(state)
  return {
    ...newState,
    mode: params.mode,
    createdShapeType: params.shapeType ?? newState.createdShapeType,
  }
}

export { changeMode }
