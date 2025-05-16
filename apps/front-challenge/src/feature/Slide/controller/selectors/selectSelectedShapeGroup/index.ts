import cloneDeep from "lodash.clonedeep"
import { createGroup, Group } from "../../state/group"
import { Shape } from "../../state/shape"
import { SlidePage } from "../../state/slidePage"

/**
 * 選択中の図形のグループを取得する
 * @param state スライドページの状態
 * @returns 選択中の図形のグループ
 */
const selectSelectedShapeGroup = (state: SlidePage): Group => {
  const newState = cloneDeep(state)
  const { selectedGroupIds, selectedShapeIds } = newState
  const selectedIds = state.order.filter(
    (id) => selectedGroupIds.includes(id) || selectedShapeIds.includes(id)
  )
  const selectedShapes = selectedIds.map((id) => state.shapes.get(id) as Shape)

  return createGroup(selectedShapes)
}

export { selectSelectedShapeGroup }
