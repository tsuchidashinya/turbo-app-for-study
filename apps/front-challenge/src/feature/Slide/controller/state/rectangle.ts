import { BoundingRect, Position } from "./boundingRect"
import { Shape, ShapeParam } from "./shape"

class Rectangle extends Shape {
  constructor(param: ShapeParam) {
    super({ ...param })
  }

  isShapeArea(pos: { x: number; y: number }): boolean {
    const rectPos = this._boundingRect.posToRectPos(pos)
    return (
      rectPos.x >= 0 &&
      rectPos.x <= this._boundingRect.width &&
      rectPos.y >= 0 &&
      rectPos.y <= this._boundingRect.height
    )
  }

  get vertices() {
    return this._boundingRect.verticies.map((pos) => {
      return { pos }
    })
  }

  get width() {
    return this.boundingRect.width
  }

  get height() {
    return this.boundingRect.height
  }
}

const createRectangle = (boundingRectVerticies: Position[]): Rectangle => {
  const id = crypto.randomUUID().toString()
  const boundingRect = new BoundingRect(boundingRectVerticies)

  return new Rectangle({
    id,
    boundingRect,
    strokeColor: "#000000",
    fillColor: "#ffffff",
  })
}

export { createRectangle, Rectangle }
