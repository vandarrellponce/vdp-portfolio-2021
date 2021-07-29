import { IconType } from 'react-icons'
export interface IService {
  name: string
  description: string
  Icon: IconType
}

export interface Skill {
  name: string
  level: string
  Icon: IconType
}

export interface Projects {
  name: string
  imageUrl: string
  githubUrl: string
  deployUrl: string
  category: string
  techStack: string[]
}

export type Category = '2019' | '2020' | '2021'
