import cloneDeep from "lodash.clonedeep"
import { Group } from "../../state/group"
import { Shape } from "../../state/shape"
import { SlidePage } from "../../state/slidePage"

type Params = {
  shape: Shape | Group
  selectMode: "add" | "overwrite"
}

/**
 * 図形を選択する
 * @param state スライドページの状態
 * @param params パラメータ
 */
const selectShape = (state: SlidePage, params: Params): SlidePage => {
  const newState = cloneDeep(state)
  const { selectedGroupIds, selectedShapeIds } = newState

  if (params.shape instanceof Group) {
    if (selectedGroupIds.includes(params.shape.id)) {
      return {
        ...newState,
        selectedGroupIds: selectedGroupIds.filter(
          (id) => id !== params.shape.id
        ),
      }
    }
    return {
      ...newState,
      selectedGroupIds:
        params.selectMode === "add"
          ? [...selectedGroupIds, params.shape.id]
          : [params.shape.id],
    }
  } else {
    if (selectedShapeIds.includes(params.shape.id)) {
      return {
        ...newState,
        selectedShapeIds: selectedShapeIds.filter(
          (id) => id !== params.shape.id
        ),
      }
    }
    return {
      ...newState,
      selectedShapeIds:
        params.selectMode === "add"
          ? [...selectedShapeIds, params.shape.id]
          : [params.shape.id],
    }
  }
}

export { selectShape }
