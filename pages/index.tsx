import ServiceCard from '../components/ServiceCard'
import { services } from '../data'

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <div
        className="flex-grow p-4 mt-5 bg-black3"
        style={{
          marginLeft: '-1.5rem',
          marginRight: '-1.5rem',
        }}
      >
        <h6 className="mb-4 text-xl font-bold text-white">What I Can Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, i) => (
            <div className="rounded-lg bg-black2 lg:col-span-1" key={i}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
      <div className="my-1 font-normal text-white">
        <h6 className="mt-4 mb-4 text-xl font-bold text-white font-blackSans">
          About me
        </h6>
        <h5>
          I am a self-thought developer. I started my interest in programming
          since highscool creating simple html pages. In college I pursue an
          Engineering course and put away my coding interests.
        </h5>
        <br />
        <h5>
          Way back 2019 I started to get back at coding as a hobby and slowly
          got back on track. Now I learned so much thing specially in web
          development and I can now build a complete apps from scratch from
          ecommerce sites, premium business sites, realtime-chat apps with video
          calling, deploying servers and hosting webapps online.
        </h5>
        <br />
        <h5>
          I want to extend my interests in programming by landing a job in this
          industry and hoping to find a team that would really make me a good
          fit for them because I believe that I can be the best version of me
          when doing this thing that I love.
        </h5>{' '}
        <h6>
          (By the way, I work full-time as a Pre-sales Engineer of a System
          Integrator company as of this moment.)
        </h6>
      </div>
    </div>
  )
}

export default index
