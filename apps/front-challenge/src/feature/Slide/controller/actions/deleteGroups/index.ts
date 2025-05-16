import cloneDeep from "lodash.clonedeep"
import { SlidePage } from "../../state/slidePage"

/**
 * グループを削除する
 * @param state スライドページの状態
 */
const deleteGroups = (state: SlidePage): SlidePage => {
  const newState = cloneDeep(state)
  newState.selectedGroupIds.forEach((groupId) => {
    newState.groups.delete(groupId)
  })
  newState.selectedGroupIds = []

  return newState
}

export { deleteGroups }
