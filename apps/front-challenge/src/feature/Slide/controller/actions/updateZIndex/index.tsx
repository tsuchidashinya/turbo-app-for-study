import cloneDeep from "lodash.clonedeep"
import { SlidePage } from "../../state"

type Params = {
  shapeId: string
  zIndex: number
}

/**
 * 図形の順序を更新する
 * @param state スライドページの状態
 * @param params パラメータ
 */
const updateZIndex = (state: SlidePage, params: Params): SlidePage => {
  const newState = cloneDeep(state)
  const newShapes = newState.shapes.map((shape) => {
    if (shape.id === params.shapeId) {
      return {
        ...shape,
        zIndex: params.zIndex,
      }
    }
    return shape
  })
  return {
    ...newState,
    shapes: newShapes,
  }
}

export { updateZIndex }
