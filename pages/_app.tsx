import '../styles/globals.css'
import Sidebar from '../components/Sidebar'

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6 lg:px-24 my-14 px-4 sm:px-20 md:px-24 ">
      <div className="lg:col-span-3 bg-white rounded-2xl col-span-12 p-4 text-center">
        <Sidebar />
      </div>
      <div className="lg:col-span-9 bg-white rounded-2xl col-span-12">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
