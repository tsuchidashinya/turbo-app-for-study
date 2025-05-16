import cloneDeep from "lodash.clonedeep"
import { selectSelectedShapeGroup } from "../../selectors/selectSelectedShapeGroup"
import { RectSize } from "../../state/boundingRect"
import { SlidePage } from "../../state/slidePage"

type Params = {
  rectSize: RectSize
}
/**
 * 図形の大きさを更新する
 * @param state スライドページの状態
 * @param params サイズパラメータ
 */
const resizeShape = (state: SlidePage, params: Params): SlidePage => {
  const newState = cloneDeep(state)
  const selectedShape = selectSelectedShapeGroup(state)
  selectedShape.resize(params.rectSize)

  return newState
}

export { resizeShape }
