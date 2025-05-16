import cloneDeep from "lodash.clonedeep"
import { Position } from "../../state/boundingRect"
import { createEllipse } from "../../state/ellipse"
import { createRectangle } from "../../state/rectangle"
import { Shape } from "../../state/shape"
import { SlidePage } from "../../state/slidePage"
import { createTriangle } from "../../state/triangle"

type Params = {
  boundingRectVerticies: Position[]
}

/**
 * 図形の作成する
 * @param state スライドページの状態
 * @param params パラメータ
 */
const createShape = (state: SlidePage, params: Params): SlidePage => {
  const newState = cloneDeep(state)
  const { createdShapeType, shapes, order } = newState

  if (createdShapeType === undefined) {
    throw new Error("No set created shape type")
  }

  let newShape: Shape
  if (createdShapeType === "rectangle") {
    newShape = createRectangle(params.boundingRectVerticies)
  } else if (createdShapeType === "ellipse") {
    newShape = createEllipse(params.boundingRectVerticies)
  } else {
    newShape = createTriangle(params.boundingRectVerticies)
  }

  shapes.set(newShape.id, newShape)
  order.push(newShape.id)

  return newState
}

export { createShape }
