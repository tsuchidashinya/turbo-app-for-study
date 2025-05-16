import { Shape } from "../../state/shape"
import { SlidePage } from "../../state/slidePage"

/**
 * 選択中の図形リストを取得する
 * @param state スライドページの状態
 * @returns 選択中の図形リスト
 */
const selectSelectedShapes = (state: SlidePage): Shape[] => {
  const { selectedShapeIds, shapes } = state
  return selectedShapeIds.map((shapeId) => shapes.get(shapeId) as Shape)
}

export { selectSelectedShapes }
