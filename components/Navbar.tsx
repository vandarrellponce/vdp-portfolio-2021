import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('About')
  const router = useRouter()
  useEffect(() => {
    if (router.pathname === '/') setActiveItem('About')
    if (router.pathname === '/projects') setActiveItem('Projects')
    if (router.pathname === '/resume') setActiveItem('Resume')
  }, [])

  return (
    <div className="flex justify-between p-4 my-3">
      <span className="text-3xl font-bold border-b-4 text-green md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-4 font-lg">
        {activeItem !== 'About' && (
          <Link href="/">
            <a
              className="hover:text-green"
              onClick={(e) => {
                e.preventDefault()
                setActiveItem('About')
              }}
            >
              About
            </a>
          </Link>
        )}

        {activeItem !== 'Projects' && (
          <Link href="/projects">
            <a
              className="hover:text-green"
              onClick={(e) => {
                e.preventDefault()
                setActiveItem('Projects')
              }}
            >
              Projects
            </a>
          </Link>
        )}

        {activeItem !== 'Resume' && (
          <Link href="/resume">
            <a
              className="hover:text-green"
              onClick={(e) => {
                e.preventDefault()
                setActiveItem('Resume')
              }}
            >
              Resume
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
