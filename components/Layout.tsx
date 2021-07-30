import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="px-4 sm:px-20 md:px-24 lg:px-60">{children}</div>
    </div>
  )
}

export default Layout
