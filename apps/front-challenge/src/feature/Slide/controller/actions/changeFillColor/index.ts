import cloneDeep from "lodash.clonedeep"
import { selectSelectedGroups } from "../../selectors/selectSelectedGroups"
import { selectSelectedShapes } from "../../selectors/selectSelectedShapes"
import { Color } from "../../state/shape"
import { SlidePage } from "../../state/slidePage"

type Params = {
  color: Color
}

/**
 * 図形の塗りつぶし色を変更する
 * @param state スライドページの状態
 * @param params パラメータ
 */
const changeFillColor = (state: SlidePage, params: Params): SlidePage => {
  const newState = cloneDeep(state)
  selectSelectedShapes(state).forEach((shape) => {
    shape.changeFillColor(params.color)
  })
  selectSelectedGroups(state).forEach((group) => {
    group.changeFillColor(params.color)
  })

  return newState
}

export { changeFillColor }
