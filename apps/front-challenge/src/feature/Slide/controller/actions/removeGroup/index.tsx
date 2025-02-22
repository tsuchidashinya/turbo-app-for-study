import cloneDeep from "lodash.clonedeep"
import { SlidePage } from "../../state"

type Params = {
  group: string
}

/**
 * グループを解除する
 * @param state スライドページの状態
 * @param params パラメータ
 */
const removeGroup = (state: SlidePage, params: Params): SlidePage => {
  const newState = cloneDeep(state)
  return {
    ...newState,
    shapes: newState.shapes.map((shape) => {
      if (shape.group === params.group) {
        return {
          ...shape,
          group: undefined,
        }
      }
      return shape
    }),
  }
}

export { removeGroup }
