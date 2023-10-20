export type Topic = {
  id: number
  name: string
}

export type TopicDto = {
  id?: number
  name: string
}

export type Topics = Topic[]

export type TopicTop = {
  id: number
  name: string
  resources: number
}

export type TopicsTop = TopicTop[]
