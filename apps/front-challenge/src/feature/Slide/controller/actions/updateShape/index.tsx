import cloneDeep from "lodash.clonedeep"
import { Circle, Rectangle, SlidePage, Triangle } from "../../state"

type Params = {
  shapeId: string
  rectangle?: Rectangle
  triangle?: Triangle
  circle?: Circle
}

/**
 * 図形の大きさや位置を更新する
 * @param state スライドページの状態
 * @param params パラメータ
 */
const updateShape = (state: SlidePage, params: Params): SlidePage => {
  const newState = cloneDeep(state)
  const shapeType = newState.shapes.find(
    (shape) => shape.id === params.shapeId
  )?.shapeType
  if (shapeType) {
    return {
      ...newState,
      [shapeType]: params[shapeType],
    }
  }
  return newState
}

export { updateShape }
