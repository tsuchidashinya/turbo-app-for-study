type ComponentData = {
  name: string
  description: string | undefined
  props: {
    name: string
    type: string | undefined
    description?: string
    default?: string | undefined
    required?: boolean
  }[]
  states: {
    name: string
    type: string | undefined
    description?: string
    default?: string | undefined
  }[]
  events: {
    name: string
    args: string | undefined
    returnType: string | undefined
    description?: string
  }[]
  types: {
    name: string
    type: string | undefined
    description?: string
  }[]
  children: string[]
}

export type { ComponentData }
