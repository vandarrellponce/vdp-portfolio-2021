import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import { projectsData } from '../data'

const Projects = () => {
  return (
    <div className="mt-20" id="projects">
      <span className="mx-2 text-2xl font-bold text-red-400 ">Projects</span>
      <div
        className="grid grid-cols-12 gap-4 pt-4 my-3"
        style={{ borderTop: '2px solid rgb(54, 54, 54)' }}
      >
        {projectsData.map((project, i) => (
          <div className="col-span-12 p-2 sm:col-span-6 lg:col-span-4" key={i}>
            <ProjectCard project={project} key={i} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
