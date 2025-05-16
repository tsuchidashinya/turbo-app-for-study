import { Group } from "../../state/group"
import { SlidePage } from "../../state/slidePage"

/**
 * 選択中のグループリストを取得する
 * @param state スライドページの状態
 * @returns 選択中のグループリスト
 */
const selectSelectedGroups = (state: SlidePage): Group[] => {
  const { selectedGroupIds, groups } = state
  return selectedGroupIds.map((id) => groups.get(id) as Group)
}

export { selectSelectedGroups }
