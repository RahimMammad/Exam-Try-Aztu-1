import React from 'react'
import { Helmet } from 'react-helmet-async'
import MainSlider from '../../components/MainSlider'
import Courses from '../../components/Courses'

const Home = () => {
  return (
    <div style={{width: "100%", position: "relative"}}>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <MainSlider />
        <Courses />
    </div>
  )
}

export default Home