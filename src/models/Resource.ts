import { Topic } from './Topic'

export type Resource = {
  id?: number
  descriptionName: string
  url: string
  topic: Required<Topic>
}

export type Resources = Required<Resource>[]
