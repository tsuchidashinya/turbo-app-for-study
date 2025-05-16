import {
  BoundingRect,
  NormalizedPosition,
  Position,
  RectSize,
} from "./boundingRect"
import { Color, Shape } from "./shape"

type GroupParam = {
  id: string
  members: Shape[]
  strokeColor: Color
  fillColor: Color
}

type Member = {
  shape: Shape
  normalizedBoundingRect: {
    width: number
    height: number
    centerPos: NormalizedPosition
    angle: number
  }
}

class Group extends Shape {
  readonly id: string
  private _members: Member[]

  constructor(params: GroupParam) {
    const verticies = params.members.reduce(
      (previousValue: Position[], currentValue: Shape) => {
        return [...previousValue, ...currentValue.boundingRect.verticies]
      },
      []
    )
    const boundingRect = new BoundingRect(verticies)
    super({
      ...params,
      boundingRect,
    })
    this.id = params.id
    this._members = params.members.map((shape) => {
      const { width, height } = this._boundingRect.normalizeRectSize({
        width: shape.boundingRect.width,
        height: shape.boundingRect.height,
      })
      const centerRectPos = this._boundingRect.normalizeRectPos(
        shape.boundingRect.centerPos
      )
      return {
        shape,
        normalizedBoundingRect: {
          width,
          height,
          centerPos: this._boundingRect.rectPosToPos(centerRectPos),
          angle: shape.boundingRect.angle - this.boundingRect.angle,
        },
      }
    })
  }

  get memberIds() {
    return this._members.map((member) => member.shape.id)
  }

  get vertices() {
    return []
  }

  isShapeArea(pos: Position): boolean {
    return this._members.some((member) => {
      return member.shape.isShapeArea(pos)
    })
  }

  resize(rectSize: RectSize) {
    super.resize(rectSize)

    this._members.forEach((member) => {
      const { width, height } = this._boundingRect.denormalizeRectSize(
        member.normalizedBoundingRect
      )
      member.shape.resize({ width, height })

      const newCenterRectPos = this._boundingRect.denormalizeRectPos(
        member.normalizedBoundingRect.centerPos
      )
      const newCenterPos = this._boundingRect.rectPosToPos(newCenterRectPos)
      member.shape.translate(newCenterPos)
    })
  }

  rotate(diffAngle: number) {
    super.rotate(diffAngle)

    // グループの回転によりメンバーの図形の移動、回転した分を適用
    this._members.forEach((member) => {
      const newCenterRectPos = this._boundingRect.denormalizeRectPos(
        member.normalizedBoundingRect.centerPos
      )
      const newCenterPos = this._boundingRect.rectPosToPos(newCenterRectPos)
      member.shape.translate(newCenterPos)

      member.shape.rotate(diffAngle)
    })
  }

  translate(destination: Position): void {
    super.translate(destination)

    this._members.forEach((member) => {
      member.shape.translate(destination)
    })
  }

  changeFillColor(fillColor: Color): void {
    super.changeFillColor(fillColor)

    this._members.forEach((member) => {
      member.shape.changeFillColor(fillColor)
    })
  }

  changeStrokeColor(strokeColor: Color): void {
    super.changeStrokeColor(strokeColor)

    this._members.forEach((member) => {
      member.shape.changeStrokeColor(strokeColor)
    })
  }
}

const createGroup = (members: Shape[]): Group => {
  const id = crypto.randomUUID().toString()

  return new Group({
    id,
    members,
    strokeColor: "#000000",
    fillColor: "#ffffff",
  })
}

export { createGroup, Group }
