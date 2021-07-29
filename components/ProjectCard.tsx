import Link from 'next/link'
import { Project } from '../type'
import { AiFillGithub } from 'react-icons/ai'

const ProjectCard: React.FC<{
  project: Project
}> = ({
  project: { name, imageUrl, deployUrl, githubUrl, category, techStack },
}) => {
  return (
    <div className="flex flex-col p-4 overflow-hidden text-gray-300 bg-black3 rounded-2xl">
      <div>
        <img src={imageUrl} className="rounded-t-2xl" />
      </div>
      <div className="py-6 text-2xl">{name}</div>
      {/* links */}
      <div
        className="flex pb-4 align-center"
        style={{ borderBottom: '2px solid rgb(70, 70, 70)' }}
      >
        <div
          className="w-3 h-3 rounded-full bg-green"
          style={{ marginTop: '7px', marginRight: '14px' }}
        ></div>
        <a href={deployUrl} target="_blank" rel="noopener noreferrer">
          {deployUrl.slice(8, deployUrl.length)}
        </a>
      </div>
      <div className="flex items-center mt-4 ">
        <AiFillGithub className="w-5 h-5 mr-2" />{' '}
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          {githubUrl.slice(19, githubUrl.length)}
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
