import cloneDeep from "lodash.clonedeep"
import { Rectangle, ShapeType, SlidePage } from "../../state"
import { getBoundingRect } from "../../utils/getBoundingRect"
import { getShapeParams } from "../../utils/getShapeParams"

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

  const shape = newState.shapes.find((shape) => shape.id === params.shapeId)
  if (shape === undefined) {
    throw new Error("Invalid shapeId")
  }

  // 元の図形の最小外接矩形から新しい図形パラメータを取得
  let boundingRect: Rectangle
  if (shape.shapeType === "circle" && newState.circles.has(params.shapeId)) {
    boundingRect = getBoundingRect("circle", {
      circle: newState.circles.get(params.shapeId)!,
    })
  } else if (
    shape.shapeType === "rectangle" &&
    newState.rectangles.has(params.shapeId)
  ) {
    boundingRect = getBoundingRect("rectangle", {
      rectangle: newState.rectangles.get(params.shapeId)!,
    })
  } else if (
    shape.shapeType === "triangle" &&
    newState.rectangles.has(params.shapeId)
  ) {
    boundingRect = getBoundingRect("triangle", {
      triangle: newState.triangles.get(params.shapeId)!,
    })
  } else {
    throw new Error("Invalid params")
  }
  const newShapeParams = getShapeParams(boundingRect)

  // 元の図形パラメータを削除
  if (shape.shapeType === "circle") {
    newState.circles.delete(shape.id)
  } else if (shape.shapeType === "rectangle") {
    newState.rectangles.delete(shape.id)
  } else if (shape.shapeType === "triangle") {
    newState.triangles.delete(shape.id)
  }

  // 図形タイプを更新し、新しい図形パラメータを追加
  shape.shapeType = params.shapeType
  if (params.shapeType === "circle") {
    newState.circles.set(params.shapeId, newShapeParams.circle)
  } else if (params.shapeType === "rectangle") {
    newState.rectangles.set(params.shapeId, newShapeParams.rectangle)
  } else if (params.shapeType === "triangle") {
    newState.triangles.set(params.shapeId, newShapeParams.triangle)
  }

  return newState
}

export { changeShapeType }
