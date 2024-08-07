type RequestFetchDevices = {
  offset?: number
  limit?: number
  name?: string
  model?: string
}

type ResponseFetchDevices = {
  offset: number
  total: number
  list: {
    id: string
    name: string
    model: string
    description: string | undefined
  }[]
  count: number
}

export type { RequestFetchDevices, ResponseFetchDevices }
