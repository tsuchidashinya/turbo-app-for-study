import cloneDeep from "lodash.clonedeep"
import { SlidePage } from "../../state"

type Params = {
  shapeIds: string[]
}

/**
 * 図形の削除する
 * @param state スライドページの状態
 * @param params パラメータ
 */
const deleteShape = (state: SlidePage, params: Params): SlidePage => {
  const newState = cloneDeep(state)
  const newShapes = newState.shapes.filter((shape) => {
    return !params.shapeIds.includes(shape.id)
  })
  return {
    ...newState,
    shapes: newShapes,
  }
}

export { deleteShape }
