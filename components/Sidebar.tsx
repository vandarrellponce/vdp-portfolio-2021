import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
} from 'react-icons/ai'

import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import Link from 'next/link'
const Sidebar = () => {
  return (
    <div className="px-0 py-0">
      <img
        src="https://scontent.fceb2-1.fna.fbcdn.net/v/t1.6435-9/133079395_4003491639663437_7040102776429762782_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGYAe8PhoX64Bvpp2M_oax39AvjL3xrYQr0C-MvfGthCtsTOV2EP87y4i9FmiMJC5Yp39RfVh96kp-dG_DxEdel&_nc_ohc=skp2sJwp2GAAX-l-bCP&tn=0XpDb6VUv5jaqUUY&_nc_ht=scontent.fceb2-1.fna&oh=4fd3566bce3886c761a201f194795ecf&oe=61266D39"
        alt="Van Darrell Ponce"
        className="object-contain mx-auto rounded-full w-52 "
      />

      <h3 className="my-4 text-xl font-bold tracking-wider text-white font-blackSans">
        <span>Van Darrell </span>Ponce
      </h3>
      <p className="px-2 py-1 my-3 text-white rounded-full bg-black3">
        Web Developer
      </p>
      <a
        href="/VanDarrellBPonce2021.pdf"
        download="VanDarrellPonce_Resume"
        className="flex items-center justify-center px-2 py-1 my-3 text-white rounded-full bg-black3"
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
        className="py-4 my-5 text-white bg-black3"
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
