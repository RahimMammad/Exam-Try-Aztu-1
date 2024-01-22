import React from 'react'
import { Helmet } from 'react-helmet-async'
import MainSlider from '../../components/MainSlider'
import Courses from '../../components/Courses'
import Contact from '../../components/Contact'
import Services from '../../components/Services'
import Events from '../../components/Events'

const Home = () => {
  return (
    <div style={{width: "100%", position: "relative"}}>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <MainSlider />
        <Courses />
        <Contact />
        <Services />
        <Events />
    </div>
  )
}

export default Home