import cloneDeep from "lodash.clonedeep"
import { Color, SlidePage } from "../../state"

type Params = {
  shapeId: string
  fillColor?: Color
}

/**
 * 図形の塗りつぶし色を変更する
 * @param state スライドページの状態
 * @param params パラメータ
 */
const updateFillColor = (state: SlidePage, params: Params): SlidePage => {
  const newState = cloneDeep(state)
  const newShapes = newState.shapes.map((shape) => {
    if (shape.id === params.shapeId) {
      return {
        ...shape,
        fillColor: params.fillColor,
      }
    }
    return shape
  })
  return {
    ...newState,
    shapes: newShapes,
  }
}

export { updateFillColor }
