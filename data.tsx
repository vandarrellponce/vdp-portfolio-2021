import { RiComputerLine } from 'react-icons/ri'
import { FaServer, FaPython, FaReact } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io'
import {
  SiNextDotJs,
  SiRedux,
  SiTypescript,
  SiMongodb,
  SiVisualstudio,
  SiPostman,
  SiAdobepremiere,
} from 'react-icons/si'

import { IService, Skill } from './type'

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

export const Stack: Skill[] = [
  {
    name: 'Javascript',
    level: '80%',
    Icon: IoLogoJavascript,
  },
  {
    name: 'Typescript',
    level: '70%',
    Icon: SiTypescript,
  },
  {
    name: 'React.js',
    level: '80%',
    Icon: FaReact,
  },
  {
    name: 'Redux',
    level: '75%',
    Icon: SiRedux,
  },
  {
    name: 'Next.js',
    level: '70%',
    Icon: SiNextDotJs,
  },

  {
    name: 'Node.js',
    level: '80%',
    Icon: IoLogoNodejs,
  },
  {
    name: 'Python',
    level: '60%',
    Icon: FaPython,
  },
  {
    name: 'MongoDB',
    level: '60%',
    Icon: SiMongodb,
  },
]

export const Tools: Skill[] = [
  {
    name: 'Visual Studio Code',
    level: '90%',
    Icon: SiVisualstudio,
  },
  {
    name: 'Postman',
    level: '80%',
    Icon: SiPostman,
  },
  {
    name: 'Adobe Premier Pro',
    level: '70%',
    Icon: SiAdobepremiere,
  },
]
