import ProjectCard from '../components/ProjectCard'
import { projectsData } from '../data'

const projects = () => {
  return (
    <div className="p-4">
      {/*   <nav>Navbar</nav> */}
      <div className="grid grid-cols-12 gap-4 my-3">
        {projectsData.map((project, i) => (
          <div className="col-span-12 p-2 sm:col-span-6 lg:col-span-6" key={i}>
            <ProjectCard project={project} key={i} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default projects
