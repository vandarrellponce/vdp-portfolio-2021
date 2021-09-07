import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
} from 'react-icons/ai'

import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'

const ProfilePic = '/images/darrell.jpg'
const Sidebar = () => {
  return (
    <div className="px-0 py-0">
      <img
        src={ProfilePic}
        alt="Van Darrell Ponce"
        className="object-contain mx-auto rounded-full w-52 "
      />

      <h3 className="my-4 text-xl font-bold tracking-wider text-white font-blackSans">
        <span>Van Darrell </span>Ponce
      </h3>
      <p className="px-2 py-1 my-3 text-white border-2 border-solid rounded-full border-black2 ">
        Web Developer
      </p>
      <a
        href="/VanDarrellBPonce2021.pdf"
        download="VanDarrellPonce_Resume"
        className="flex items-center justify-center px-2 py-1 my-3 text-white border-2 border-solid rounded-full bg-black2 border-black2"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-white md:w-full">
        <a
          href="https://youtube.com/motofreakph"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillYoutube className="w-8 h-8" />
        </a>
        <a
          href="https://github.com/vandarrellponce"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="w-8 h-8" />
        </a>

        <a
          href="https://facebook.com/vpdevlife"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillFacebook className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/van-darrell-ponce-5aba7310a/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="w-8 h-8" />
        </a>
      </div>

      {/* address */}
      <div
        className="py-4 my-5 text-white bg-black2"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="w-4 h-4" />
          <span> Cebu, Philippines</span>
        </div>
        <p className="my-2">vandarrell.ponce@gmail.com</p>
        <p className="my-2">+63-956-0351422</p>
      </div>
      {/* Buttons */}
      <div>
        <button
          onClick={() => window.open('mailto:vandarrell.ponce@gmail.com')}
          className="w-8/12 px-5 py-2 my-2 text-sm text-white rounded-full bg-gradient-to-r from-red-600 to-black3 focus:outline-none"
        >
          Email me
        </button>
        {/*  <button className="w-8/12 px-5 py-2 my-2 text-sm text-white rounded-full bg-customBlack focus:outline-none">
          Change Theme
        </button> */}
      </div>
    </div>
  )
}

export default Sidebar
