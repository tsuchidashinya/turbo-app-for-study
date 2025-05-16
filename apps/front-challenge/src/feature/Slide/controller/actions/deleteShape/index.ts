import cloneDeep from "lodash.clonedeep"
import { selectSelectedGroups } from "../../selectors/selectSelectedGroups"
import { SlidePage } from "../../state/slidePage"

/**
 * 図形を削除する
 * @param state スライドページの状態
 */
const deleteShape = (state: SlidePage): SlidePage => {
  const newState = cloneDeep(state)
  newState.selectedShapeIds.forEach((shapeId) => {
    newState.shapes.delete(shapeId)
  })
  newState.selectedShapeIds = []
  const selectedGroups = selectSelectedGroups(state)
  selectedGroups.forEach((group) => {
    group.memberIds.forEach((shapeId) => {
      newState.shapes.delete(shapeId)
    })
    newState.groups.delete(group.id)
  })
  newState.selectedGroupIds = []

  return newState
}

export { deleteShape }
