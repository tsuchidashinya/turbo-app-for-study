import cloneDeep from "lodash.clonedeep"
import { SlidePage } from "../../state"

type Params = {
  shapeIds: string[]
}

/**
 * 図形の選択を外す
 * @param state スライドページの状態
 * @param params パラメータ
 */
const deselectShape = (state: SlidePage, params: Params): SlidePage => {
  const newState = cloneDeep(state)
  const newSelectedShapeIds = newState.selectedShapeIds.filter(
    (id) => !params.shapeIds.includes(id)
  )
  return {
    ...newState,
    selectedShapeIds: newSelectedShapeIds,
  }
}

export { deselectShape }
