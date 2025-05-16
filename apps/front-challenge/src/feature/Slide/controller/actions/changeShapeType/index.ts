import cloneDeep from "lodash.clonedeep"
import { Circle } from "../../state/shape/circle"
import { Rectangle } from "../../state/shape/rectangle"
import { ShapeType, SlidePage } from "../../state/slidePage"
import { Triangle } from "../../state/triangle"

type Params = {
  shapeId: string
  shapeType: ShapeType
}

/**
 * 図形の種類を変更する
 * @param state スライドページの状態
 * @param params パラメータ
 */
const changeShapeType = (state: SlidePage, params: Params): SlidePage => {
  const newState = cloneDeep(state)

  const shapeIndex = newState.shapes.findIndex(
    (shape) => shape.id === params.shapeId
  )
  if (shapeIndex === undefined) {
    throw new Error("Invalid shapeId")
  }
  const shape = newState.shapes[shapeIndex]
  if (params.shapeType === "circle") {
    newState.shapes[shapeIndex] = new Circle(shape.params)
  } else if (params.shapeType === "triangle") {
    newState.shapes[shapeIndex] = new Triangle(shape.params)
  } else if (params.shapeType === "rectangle") {
    newState.shapes[shapeIndex] = new Rectangle(shape.params)
  }

  return newState
}

export { changeShapeType }
