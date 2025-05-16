import { BoundingRect, Position, RectSize } from "./boundingRect"

type Color =
  | "#d71515"
  | "#ff8b8b"
  | "#e1af12"
  | "#ede624"
  | "#bcfeb7"
  | "#35a122"
  | "#a72fc8"
  | "#c5b7fe"
  | "#3d21d9"
  | "#898989"
  | "#3b3b3b"
  | "#dad8d8"
  | "#ffffff"
  | "#000000"

type ShapeParam = {
  id: string
  boundingRect: BoundingRect
  strokeColor: Color
  fillColor: Color
}

type Vertice = {
  pos: Position
  editableName?: string
}

abstract class Shape {
  readonly id: string
  private _strokeColor: Color
  private _fillColor: Color
  protected _boundingRect: BoundingRect

  constructor(params: ShapeParam) {
    this.id = params.id
    this._strokeColor = params.strokeColor
    this._fillColor = params.fillColor
    this._boundingRect = params.boundingRect
  }

  abstract vertices: Vertice[]

  get strokeColor() {
    return this._strokeColor
  }

  get fillColor() {
    return this._fillColor
  }

  get params(): ShapeParam {
    return {
      id: this.id,
      boundingRect: this._boundingRect,
      fillColor: this.fillColor,
      strokeColor: this.strokeColor,
    }
  }

  get boundingRect() {
    return {
      width: this._boundingRect.width,
      height: this._boundingRect.height,
      centerPos: this._boundingRect.centerPos,
      angle: this._boundingRect.angle,
      verticies: this._boundingRect.verticies,
    }
  }

  abstract isShapeArea(pos: Position): boolean

  changeStrokeColor(strokeColor: Color) {
    this._strokeColor = strokeColor
  }

  changeFillColor(fillColor: Color) {
    this._fillColor = fillColor
  }

  resize(rectSize: RectSize) {
    this._boundingRect.resize(rectSize)
  }

  translate(destination: Position) {
    this._boundingRect.translate(destination)
  }

  rotate(diffAngle: number) {
    this._boundingRect.rotate(diffAngle)
  }
}

const createShapeParam = (boundingRectVerticies: Position[]): ShapeParam => {
  const id = crypto.randomUUID().toString()
  const boundingRect = new BoundingRect(boundingRectVerticies)

  return {
    id,
    boundingRect,
    strokeColor: "#000000",
    fillColor: "#ffffff",
  }
}

export { createShapeParam, Shape }
export type { Color, ShapeParam, Vertice }
