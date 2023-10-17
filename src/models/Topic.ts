export type Topic = {
  id?: number
  name: string
}

export type Topics = Required<Topic>[]

export type TopicTop = {
  id: number
  name: string
  resources: number
}

export type TopicsTop = TopicTop[]
