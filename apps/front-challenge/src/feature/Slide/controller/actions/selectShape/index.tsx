import cloneDeep from "lodash.clonedeep"
import { SlidePage } from "../../state"

type Params = {
  shapeIds: string[]
}

/**
 * 図形を選択する
 * @param state スライドページの状態
 * @param params パラメータ
 */
const selectShape = (state: SlidePage, params: Params): SlidePage => {
  const newState = cloneDeep(state)
  const newSelectedShapeIds = newState.selectedShapeIds.concat(params.shapeIds)
  return {
    ...newState,
    selectedShapeIds: newSelectedShapeIds,
  }
}

export { selectShape }
