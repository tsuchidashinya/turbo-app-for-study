import { create } from "zustand"
import { SlidePage } from "../../view"
import { Group } from "./group"
import { Shape } from "./shape"

type ShapeType = "rectangle" | "ellipse" | "triangle"

type SlidePage = {
  mode: "select" | "shapeCreation"
  createdShapeType: ShapeType | undefined

  shapes: Map<string, Shape>
  groups: Map<string, Group>

  order: string[]

  selectedShapeIds: string[]
  selectedGroupIds: string[]
}

type Store = {
  slidePageState: SlidePage
  updateSlidePageState: (newState: SlidePage) => void
}

const useStore = create<Store>((set) => ({
  slidePageState: {
    mode: "select",
    createdShapeType: undefined,
    shapes: new Map(),
    groups: new Map(),
    order: [],
    selectedShapeIds: [],
    selectedGroupIds: [],
  },
  updateSlidePageState: (newState: SlidePage) =>
    set({
      slidePageState: {
        ...newState,
      },
    }),
}))

export { useStore }
export type { SlidePage }
