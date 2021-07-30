import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="px-4 lg:px-40 sm:px-20">{children}</div>
    </div>
  )
}

export default Layout
