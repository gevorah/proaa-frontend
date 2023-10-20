import { Topic } from './Topic'

export type Resource = {
  id: number
  descriptionName: string
  url: string
  topic: Topic
}

export type ResourceDto = {
  id?: number
  descriptionName: string
  url: string
  topicId: number
}

export type Resources = Resource[]
