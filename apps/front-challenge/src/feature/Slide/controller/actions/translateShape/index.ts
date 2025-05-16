import cloneDeep from "lodash.clonedeep"
import { selectSelectedShapeGroup } from "../../selectors/selectSelectedShapeGroup"
import { Position } from "../../state/boundingRect"
import { SlidePage } from "../../state/slidePage"

type Params = {
  destination: Position
}

/**
 * 図形を移動させる
 * @param state スライドページの状態
 * @param params パラメータ
 */
const translateShape = (state: SlidePage, params: Params): SlidePage => {
  const newState = cloneDeep(state)

  const selectedShape = selectSelectedShapeGroup(state)
  selectedShape.translate(params.destination)

  return newState
}

export { translateShape }
