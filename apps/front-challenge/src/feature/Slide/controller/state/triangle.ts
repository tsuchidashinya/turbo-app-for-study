import { BoundingRect, NormalizedPosition, Position } from "./boundingRect"
import { Shape, ShapeParam, Vertice } from "./shape"

type LinearCoefficient = {
  slope: number
  yIntercept: number
}

const calcLinearFunc = (x: number, coefficient: LinearCoefficient) => {
  return coefficient.slope * x + coefficient.yIntercept
}

const getLinearCoefficient = (pos1: Position, pos2: Position) => {
  const slope = (pos2.y - pos1.y) / (pos2.x - pos1.x)
  const yIntercept = pos2.y - slope * pos2.x
  return {
    slope,
    yIntercept,
  }
}

class Triangle extends Shape {
  private _normalizedTopVertice: NormalizedPosition
  private _normalizedBottomLeftVertice: NormalizedPosition
  private _normalizedBottomRightVertice: NormalizedPosition
  constructor(param: ShapeParam) {
    super({ ...param })
    this._normalizedTopVertice = { x: 0.5, y: 0 }
    this._normalizedBottomLeftVertice = { x: 0, y: 1 }
    this._normalizedBottomRightVertice = { x: 1, y: 1 }
  }

  get vertices(): Vertice[] {
    const convertVertice = (normalizedVertice: NormalizedPosition) => {
      const verticeRectPos =
        this._boundingRect.denormalizeRectPos(normalizedVertice)
      return this._boundingRect.rectPosToPos(verticeRectPos)
    }
    const vertices: Vertice[] = []
    vertices.push({
      pos: convertVertice(this._normalizedTopVertice),
      editableName: "top",
    })
    vertices.push({
      pos: convertVertice(this._normalizedBottomLeftVertice),
    })
    vertices.push({
      pos: convertVertice(this._normalizedBottomRightVertice),
    })
    return vertices
  }

  changeTopVerticePos(topVertice: Position) {
    const topVerticeRectPos = this._boundingRect.posToRectPos(topVertice)
    this._normalizedTopVertice =
      this._boundingRect.normalizeRectPos(topVerticeRectPos)
  }

  isShapeArea(pos: { x: number; y: number }): boolean {
    const { x, y } = this._boundingRect.posToRectPos(pos)
    const top = this._boundingRect.denormalizeRectPos(
      this._normalizedTopVertice
    )
    const bottomLeft = this._boundingRect.denormalizeRectPos(
      this._normalizedBottomLeftVertice
    )
    const bottomRight = this._boundingRect.denormalizeRectPos(
      this._normalizedBottomRightVertice
    )
    return (
      y >= bottomLeft.y &&
      y <= calcLinearFunc(x, getLinearCoefficient(bottomLeft, top)) &&
      y <= calcLinearFunc(x, getLinearCoefficient(bottomRight, top))
    )
  }
}

const createTriangle = (boundingRectVerticies: Position[]): Triangle => {
  const id = crypto.randomUUID().toString()
  const boundingRect = new BoundingRect(boundingRectVerticies)

  return new Triangle({
    id,
    boundingRect,
    strokeColor: "#000000",
    fillColor: "#ffffff",
  })
}

export { createTriangle, Triangle }
