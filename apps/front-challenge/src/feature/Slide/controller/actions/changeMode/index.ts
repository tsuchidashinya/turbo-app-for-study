import cloneDeep from "lodash.clonedeep"
import { SlidePage } from "../../state/slidePage"

type Params = {
  mode: "select" | "shapeCreation"
  shapeType?: "rectangle" | "ellipse" | "triangle" | undefined
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
