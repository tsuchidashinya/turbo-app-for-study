import { BoundingRect, Position } from "./boundingRect"
import { Shape, ShapeParam } from "./shape"

class Ellipse extends Shape {
  constructor(params: ShapeParam) {
    super({ ...params })
  }

  get vertices() {
    return []
  }

  isShapeArea(pos: { x: number; y: number }): boolean {
    const { x, y } = this._boundingRect.posToRectPos(pos)
    const a = this._boundingRect.width / 2
    const b = this._boundingRect.height / 2
    return (
      Math.pow(x, 2) / Math.pow(a, 2) + Math.pow(y, 2) / Math.pow(b, 2) <= 1
    )
  }
}

const createEllipse = (boundingRectVerticies: Position[]): Ellipse => {
  const id = crypto.randomUUID().toString()
  const boundingRect = new BoundingRect(boundingRectVerticies)

  return new Ellipse({
    id,
    boundingRect,
    strokeColor: "#000000",
    fillColor: "#ffffff",
  })
}

export { createEllipse, Ellipse }
