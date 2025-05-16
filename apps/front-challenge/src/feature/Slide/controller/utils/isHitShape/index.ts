import { Position } from "../../state/boundingRect"
import { Group } from "../../state/group"
import { Shape } from "../../state/shape"

/**
 * タッチポイントに当たった図形を返す
 * @param groups 図形のグループ群
 * @param shapes 図形群
 * @param touchPoint タッチポイントの位置
 */
const getHitShape = (
  groups: Group[],
  shapes: Shape[],
  touchPoint: Position
): Shape | Group | undefined => {
  let unGroupedShapes = shapes
  // グループの当たり判定
  for (const group of groups) {
    if (group.isShapeArea(touchPoint)) {
      return group
    }
    unGroupedShapes = unGroupedShapes.filter(
      (shape) => !group.memberIds.includes(shape.id)
    )
  }

  // グループに所属していない図形の当たり判定
  for (const shape of unGroupedShapes) {
    if (shape.isShapeArea(touchPoint)) {
      return shape
    }
  }

  return undefined
}

export { getHitShape }
