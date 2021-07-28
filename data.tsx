import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'

import { IService } from './type'

export const services: IService[] = [
  {
    name: 'Frontend Development',
    description:
      'I Build scalable Single Page Applications using <b> HTML, CSS, React.js, Redux and Next.js</b>',
    Icon: RiComputerLine,
  },
  {
    name: 'Backend Developer',
    description:
      'Deploy servers using <b>Node.js and Express</b>. Database management with <b>Mongoose,js and MongoDB</b>',
    Icon: FaServer,
  },
  {
    name: 'UI/UX Designing',
    description:
      'Currently learning UI and UX best practices and principles to constantly improve the designs of my projects',
    Icon: AiOutlineAntDesign,
  },
  {
    name: 'API Develpment',
    description:
      'I develop rest robust and expandable rest API using <b> Node.js and Express</b>',
    Icon: AiOutlineApi,
  },
]
