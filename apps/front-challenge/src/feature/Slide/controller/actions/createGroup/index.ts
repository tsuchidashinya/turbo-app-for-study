import cloneDeep from "lodash.clonedeep"
import { selectSelectedShapeGroup } from "../../selectors/selectSelectedShapeGroup"
import { SlidePage } from "../../state/slidePage"

/**
 * グループを作成する
 * @param state スライドページの状態
 */
const createGroup = (state: SlidePage): SlidePage => {
  const newState = cloneDeep(state)

  const selectedShapeGroup = selectSelectedShapeGroup(state)
  newState.groups.set(selectedShapeGroup.id, selectedShapeGroup)
  newState.selectedGroupIds.forEach((groupId) => {
    newState.groups.delete(groupId)
  })
  newState.selectedGroupIds = [selectedShapeGroup.id]
  newState.selectedShapeIds = newState.selectedShapeIds.filter((shapeId) => {
    return !selectedShapeGroup.memberIds.includes(shapeId)
  })

  return newState
}

export { createGroup }
