import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className="sticky top-0 flex justify-between p-4 px-4 mb-3 bg-black2 sm:px-20 lg:px-40">
      <div className="flex ml-auto space-x-4 font-lg">
        <Link
          className="text-xs text-white cursor-pointer md:text-sm lg:text-md hover:text-red-400"
          activeClass="active"
          to={'about'}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About
        </Link>
        <Link
          className="text-xs text-white cursor-pointer md:text-sm lg:text-md hover:text-red-400"
          activeClass="active"
          to={'resume'}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Resume
        </Link>

        <Link
          className="text-xs text-white cursor-pointer md:text-sm lg:text-md hover:text-red-400"
          activeClass="active"
          to={'projects'}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Projects
        </Link>
      </div>
    </div>
  )
}

export default Navbar
