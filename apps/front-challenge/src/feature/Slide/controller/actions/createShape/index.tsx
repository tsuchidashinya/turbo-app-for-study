import cloneDeep from "lodash.clonedeep"
import { DEFAULT_COLOR } from "../../../const"
import { Circle, Rectangle, ShapeType, SlidePage, Triangle } from "../../state"

type Params = {
  shapeType: ShapeType
  centerPos: { x: number; y: number }
  rectangle?: Rectangle
  triangle?: Triangle
  circle?: Circle
}

/**
 * 図形の作成する
 * @param state スライドページの状態
 * @param params パラメータ
 */
const createShape = (state: SlidePage, params: Params): SlidePage => {
  const newState = cloneDeep(state)
  const shapeId = crypto.randomUUID()

  newState.shapes.push({
    id: shapeId,
    centerPos: params.centerPos,
    shapeType: params.shapeType,
    group: undefined,
    zIndex: 0,
    strokeColor: DEFAULT_COLOR,
    fillColor: DEFAULT_COLOR,
  })

  if (params.shapeType === "circle" && params.circle) {
    newState.circles.set(shapeId, params.circle)
  } else if (params.shapeType === "rectangle" && params.rectangle) {
    newState.rectangles.set(shapeId, params.rectangle)
  } else if (params.shapeType === "triangle" && params.triangle) {
    newState.triangles.set(shapeId, params.triangle)
  }

  return newState
}

export { createShape }
