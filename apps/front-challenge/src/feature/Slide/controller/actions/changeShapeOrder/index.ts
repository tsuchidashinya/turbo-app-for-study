import cloneDeep from "lodash.clonedeep"
import { SlidePage } from "../../state/slidePage"

type Params = {
  sendTo: "front" | "back" | "veryFront" | "veryBack"
}

/**
 * 図形の順序を変更する
 * @param state スライドページの状態
 * @param params パラメータ
 */
const changeShapeOrder = (state: SlidePage, params: Params): SlidePage => {
  const newState = cloneDeep(state)
  newState.shapes.newState.shapes.forEach((shape) => {
    if (newState.selectedShapeIds.includes(shape.id)) {
      shape.changeOrder(params.order)
    }
  })

  return newState
}

export { changeShapeOrder }
