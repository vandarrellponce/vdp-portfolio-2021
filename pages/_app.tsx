import '../styles/globals.css'
import Sidebar from '../components/Sidebar'
import React from 'react'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6 px-4 my-6 lg:px-6 sm:px-20 md:px-24 ">
      <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
