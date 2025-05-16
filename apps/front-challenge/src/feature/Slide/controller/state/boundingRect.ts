type Position = {
  x: number
  y: number
}

type RectSize = {
  width: number
  height: number
}

type NormalizedPosition = {
  x: number
  y: number
}

type NormalizedRectSize = {
  width: number
  height: number
}

/**
 * 図形の外接矩形のクラス
 */
class BoundingRect {
  private _width: number
  private _height: number
  private _centerPos: Position
  private _angle: number

  constructor(verticies: Position[]) {
    if (verticies.length < 2) {
      throw new Error("BoundingRect verticies is required 2 array")
    }

    const verticiesX = verticies.map((vertice) => vertice.x)
    const verticiesY = verticies.map((vertice) => vertice.y)
    const xMin = Math.min(...verticiesX)
    const xMax = Math.max(...verticiesX)
    const yMin = Math.min(...verticiesY)
    const yMax = Math.max(...verticiesY)
    this._width = xMax - xMin
    this._height = yMax - yMin
    this._centerPos = {
      x: (xMin + xMax) / 2,
      y: (yMin + yMax) / 2,
    }
    this._angle = 0
  }

  get width() {
    return this._width
  }

  get height() {
    return this._height
  }

  get centerPos() {
    return this._centerPos
  }

  get angle() {
    return this._angle
  }

  get verticies(): Position[] {
    const verticiesRectPos = [
      {
        x: this._centerPos.x - this._width / 2,
        y: this._centerPos.y - this._height / 2,
      },
      {
        x: this._centerPos.x + this._width / 2,
        y: this._centerPos.y - this._height / 2,
      },
      {
        x: this._centerPos.x - this._width / 2,
        y: this._centerPos.y + this._height / 2,
      },
      {
        x: this._centerPos.x + this._width / 2,
        y: this._centerPos.y + this._height / 2,
      },
    ]
    return verticiesRectPos.map((verticeRectPos) =>
      this.rectPosToPos(verticeRectPos)
    )
  }

  resize(rectSize: RectSize) {
    this._width = rectSize.width
    this._height = rectSize.height
  }

  translate(destination: Position) {
    this._centerPos = destination
  }

  rotate(diffAngle: number) {
    this._angle += diffAngle
  }

  private _rotateBoundingRect(pos: Position, angle: number) {
    return {
      x: Math.cos(angle) * pos.x - Math.sign(angle) * pos.y,
      y: Math.sign(angle) * pos.x + Math.cos(angle) * pos.y,
    }
  }

  /**
   * ピクセル座標系から外接矩形座標系に変換。外接矩形座標系の原点は矩形の中心点。
   * @param pos ピクセル座標
   * @returns 外接矩形座標
   */
  posToRectPos(pos: Position) {
    const translatedPos = {
      x: pos.x - this._centerPos.x + this._width / 2,
      y: pos.y - this._centerPos.y + this._height / 2,
    }
    return this._rotateBoundingRect(translatedPos, -this._angle)
  }

  /**
   * 外接矩形座標系からピクセル座標系に変換。
   * @param rectPos 外接矩形座標
   * @returns ピクセル座標
   */
  rectPosToPos(rectPos: Position) {
    const rotatedRectPos = this._rotateBoundingRect(rectPos, this._angle)
    return {
      x: rotatedRectPos.x + this._centerPos.x,
      y: rotatedRectPos.y + this._centerPos.y,
    }
  }

  /**
   * 外接矩形座標系を正規化する
   * @param rectPos 外接矩形座標の位置
   * @returns 正規化の結果
   */
  normalizeRectPos(rectPos: Position): NormalizedPosition {
    return {
      x: rectPos.x / this._width,
      y: rectPos.y / this._height,
    }
  }

  normalizeRectSize(rectSize: RectSize): NormalizedRectSize {
    return {
      width: rectSize.width / this._width,
      height: rectSize.height / this._height,
    }
  }

  /**
   * 正規化された外接矩形座標系を正規化前に戻す
   * @param normalizedRectPos
   * @returns
   */
  denormalizeRectPos(normalizedRectPos: NormalizedPosition): Position {
    return {
      x: normalizedRectPos.x * this._width,
      y: normalizedRectPos.y * this._height,
    }
  }

  denormalizeRectSize(normalizedRectSize: NormalizedRectSize): RectSize {
    return {
      width: normalizedRectSize.width * this._width,
      height: normalizedRectSize.height * this._height,
    }
  }
}

export { BoundingRect }
export type { NormalizedPosition, Position, RectSize }
