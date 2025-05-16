import cloneDeep from "lodash.clonedeep"
import { selectSelectedGroups } from "../../selectors/selectSelectedGroups"
import { selectSelectedShapes } from "../../selectors/selectSelectedShapes"
import { Color } from "../../state/shape"
import { SlidePage } from "../../state/slidePage"

type Params = {
  color: Color
}

/**
 * 図形の枠線の色を変更する
 * @param state スライドページの状態
 * @param params パラメータ
 */
const changeStrokeColor = (state: SlidePage, params: Params): SlidePage => {
  const newState = cloneDeep(state)
  selectSelectedShapes(state).forEach((shape) => {
    shape.changeStrokeColor(params.color)
  })
  selectSelectedGroups(state).forEach((group) => {
    group.changeStrokeColor(params.color)
  })

  return newState
}

export { changeStrokeColor }
