import cloneDeep from "lodash.clonedeep"
import { SlidePage } from "../../state"

type Params = {
  shapeIds: string[]
}

/**
 * グループを作成する
 * @param state スライドページの状態
 * @param params パラメータ
 */
const addGroup = (state: SlidePage, params: Params): SlidePage => {
  const newState = cloneDeep(state)
  const newGroup = crypto.randomUUID()
  const newShapes = newState.shapes.map((shape) => {
    if (params.shapeIds.includes(shape.id)) {
      return {
        ...shape,
        group: newGroup,
      }
    }
    return shape
  })
  return {
    ...newState,
    shapes: newShapes,
  }
}

export { addGroup }
