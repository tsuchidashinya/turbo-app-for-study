import { Position, Rectangle, SlidePage } from "../../state"

/**
 * 選択された図形全てに対する最小外接矩形を取得する
 * @param state スライドページの状態
 */
const selectSelectedShapesBoundingRect = (
  state: SlidePage
): {
  centerPos: Position
  rectangle: Rectangle
} => {
  /** コードを記述 **/
}

export { selectSelectedShapesBoundingRect }
