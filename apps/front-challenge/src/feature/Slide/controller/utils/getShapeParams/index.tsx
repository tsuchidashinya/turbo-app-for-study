type Rectangle = {
  width: number
  height: number
}
type Circle = {
  radius: number
}
type Position = {
  x: number
  y: number
}
type Triangle = {
  line1: {
    start: Position
    end: Position
  }
  line2: {
    start: Position
    end: Position
  }
}

/**
 * 同じ最小外接矩形を持つすべての図形タイプのパラメータを取得する
 * @param boundingRect 最小外接矩形
 */
const getShapeParams = (
  boundingRect: Rectangle
): {
  rectangle: Rectangle
  triangle: Triangle
  circle: Circle
} => {
  /** コードを記述 **/
}

export { getShapeParams }
