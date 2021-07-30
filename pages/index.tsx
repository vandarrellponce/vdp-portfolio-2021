import React from 'react'
import Homepage from '../components/Homepage'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
import Resume from '../components/Resume'

const index = () => {
  return (
    <div>
      <Layout>
        <Homepage />
        <Resume />
        <Projects />
      </Layout>
    </div>
  )
}

export default index
