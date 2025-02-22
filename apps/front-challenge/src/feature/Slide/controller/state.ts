import { create } from "zustand"
import { SlidePage } from "../view"

type Rectangle = {
  width: number
  height: number
}

type Circle = {
  radius: number
}
type Position = {
  x: number
  y: number
}
type Triangle = {
  line1: {
    start: Position
    end: Position
  }
  line2: {
    start: Position
    end: Position
  }
}

type ShapeType = "rectangle" | "circle" | "triangle"

type Color = "#e44e44" | "#FFFFFF" | "#000000"

type SlidePage = {
  mode: "select" | "shape" | "fillColor" | "strokeColor"
  createdShapeType: ShapeType | undefined

  triangles: Map<string, Triangle>
  rectangles: Map<string, Rectangle>
  circles: Map<string, Circle>

  shapes: {
    id: string
    shapeType: ShapeType
    centerPos: { x: number; y: number }
    group: string | undefined
    zIndex: number
    strokeColor: Color | undefined
    fillColor: Color | undefined
  }[]

  selectedShapeIds: string[]
}

type Store = {
  slidePageState: SlidePage
  updateSlidePageState: (newState: SlidePage) => void
}

const useStore = create<Store>((set) => ({
  slidePageState: {
    mode: "select",
    createdShapeType: undefined,
    circles: new Map(),
    rectangles: new Map(),
    triangles: new Map(),
    shapes: [],
    selectedShapeIds: [],
  },
  updateSlidePageState: (newState: SlidePage) =>
    set({
      slidePageState: {
        ...newState,
      },
    }),
}))

export { useStore }
export type {
  Circle,
  Color,
  Position,
  Rectangle,
  ShapeType,
  SlidePage,
  Triangle,
}
