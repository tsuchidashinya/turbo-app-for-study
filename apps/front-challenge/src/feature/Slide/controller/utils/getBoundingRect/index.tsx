import { Circle, Triangle } from "../../state"

type Rectangle = {
  width: number
  height: number
}
type ShapeType = "rectangle" | "circle" | "triangle"
type ShapeSizeParam = {
  rectangle?: Rectangle
  triangle?: Triangle
  circle?: Circle
  angle?: number
}

/**
 * 最小外接矩形を取得する
 * @param shapeType 図形の種類
 * @param shapeSizeParams 図形のサイズに関するパラメータ
 */
const getBoundingRect = (
  shapeType: ShapeType,
  shapeSizeParams: ShapeSizeParam
): Rectangle => {
  /** コードを記述 **/
}

export { getBoundingRect }
