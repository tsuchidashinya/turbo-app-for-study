import cloneDeep from "lodash.clonedeep"
import { selectSelectedShapeGroup } from "../../selectors/selectSelectedShapeGroup"
import { SlidePage } from "../../state/slidePage"

type Params = {
  angle: number
}

/**
 * 図形を回転させる
 * @param state スライドページの状態
 * @param params パラメータ
 */
const rotateShape = (state: SlidePage, params: Params): SlidePage => {
  const newState = cloneDeep(state)

  const selectedShape = selectSelectedShapeGroup(state)
  selectedShape.rotate(params.angle)

  return newState
}

export { rotateShape }
