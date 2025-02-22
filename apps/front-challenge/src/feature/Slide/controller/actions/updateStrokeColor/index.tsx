import cloneDeep from "lodash.clonedeep"
import { Color, SlidePage } from "../../state"

type Params = {
  shapeId: string
  strokeColor?: Color
}

/**
 * 図形の枠線の色を更新する
 * @param state スライドページの状態
 * @param params パラメータ
 */
const updateStrokeColor = (state: SlidePage, params: Params): SlidePage => {
  const newState = cloneDeep(state)
  const newShapes = newState.shapes.map((shape) => {
    if (shape.id === params.shapeId) {
      return {
        ...shape,
        strokeColor: params.strokeColor,
      }
    }
    return shape
  })
  return {
    ...newState,
    shapes: newShapes,
  }
}

export { updateStrokeColor }
