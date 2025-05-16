import cloneDeep from "lodash.clonedeep"
import { SlidePage } from "../../state/slidePage"

/**
 * 図形の選択を外す
 * @param state スライドページの状態
 * @param params パラメータ
 */
const deselectShape = (state: SlidePage): SlidePage => {
  const newState = cloneDeep(state)

  return {
    ...newState,
    selectedShapeIds: [],
    selectedGroupIds: [],
  }
}

export { deselectShape }
