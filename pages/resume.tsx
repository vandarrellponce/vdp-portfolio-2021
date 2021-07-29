import Bar from '../components/Bar'
import { Stack, Tools } from '../data'
const resume = () => {
  return (
    <div className="px-6 py-4 ">
      <div className="grid gap-6 text-white md:grid-cols-2">
        <div>
          {/* EDUCATION */}
          <h5 className="mb-4 text-xl font-bold text-red-400">Education</h5>
          <div>
            <h5 className="font-semibold text-gray-300">
              University of San Carlos
            </h5>
            <p className="text-gray-300">
              Bachelor of Science Major in Electronics Engineering
            </p>
            <p className="text-gray-300">2008 - 2014</p>
          </div>
        </div>
        {/* EXPERIENCE */}
        <div>
          <h5 className="mb-4 text-xl font-bold text-red-400">Experience</h5>
          <div>
            <h5 className="font-semibold text-gray-300">Freelance Developer</h5>
            <p className="text-gray-300">
              Frontend Developer, delivering premium business site apps to small
              companies
            </p>
            <p className="text-gray-300">2019 - Present</p>
          </div>

          <div className="mt-4">
            <h5 className="font-semibold text-gray-300">Pre-Sales Engineer</h5>
            <p className="text-gray-300">
              Works fulltime as a Pre-sales Engineer in a System Integrator
              Company
            </p>
            <p className="text-gray-300">2019 - Present</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 mt-6 md:grid-cols-2">
        {/* TECH STACK */}
        <div className="p-6 rounded-lg bg-black1">
          <h5 className="my-3 mb-6 text-xl font-bold text-red-400">
            Tech Stack
          </h5>
          <div className="my-2">
            {Stack.map((stack, i) => (
              <Bar data={stack} key={i} />
            ))}
          </div>
        </div>
        {/* TOOLS AND SOFTWARE */}
        <div className="p-6 rounded-lg bg-black1">
          <h5 className="my-3 mb-6 text-xl font-bold text-red-400">
            Tools & Softwares
          </h5>
          <div className="my-2">
            {Tools.map((stack, i) => (
              <Bar data={stack} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default resume
