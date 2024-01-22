import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Keyboard } from 'swiper/modules';
import {Link} from "react-router-dom"
import "./index.scss"

const MainSlider = () => {
  return (
    <Swiper navigation={true} keyboard={true} modules={[Navigation, Keyboard]} className="mySwiper">
        <SwiperSlide>
            <div className='slider-1'>
                <h1>Get your <span>Education</span> today!</h1>
                <div className="slider-card-container">
                    <div className="slider-card">
                        <img src="https://preview.colorlib.com/theme/course/images/earth-globe.svg" alt="" />
                        <div className="card-text">
                            <h3>Online Courses</h3>
                            <Link to={"/"}>View More</Link>
                        </div>
                    </div>
                    <div className="slider-card">
                        <img src="https://preview.colorlib.com/theme/course/images/earth-globe.svg" alt="" />
                        <div className="card-text">
                            <h3>Online Courses</h3>
                            <Link to={"/"}>View More</Link>
                        </div>
                    </div>
                    <div className="slider-card">
                        <img src="https://preview.colorlib.com/theme/course/images/earth-globe.svg" alt="" />
                        <div className="card-text">
                            <h3>Online Courses</h3>
                            <Link to={"/"}>View More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slider-2'>
                <h1>Get your <span>Education</span> today!</h1>
                <div className="slider-card-container">
                    <div className="slider-card">
                        <img src="https://preview.colorlib.com/theme/course/images/earth-globe.svg" alt="" />
                        <div className="card-text">
                            <h3>Online Courses</h3>
                            <Link to={"/"}>View More</Link>
                        </div>
                    </div>
                    <div className="slider-card">
                        <img src="https://preview.colorlib.com/theme/course/images/earth-globe.svg" alt="" />
                        <div className="card-text">
                            <h3>Online Courses</h3>
                            <Link to={"/"}>View More</Link>
                        </div>
                    </div>
                    <div className="slider-card">
                        <img src="https://preview.colorlib.com/theme/course/images/earth-globe.svg" alt="" />
                        <div className="card-text">
                            <h3>Online Courses</h3>
                            <Link to={"/"}>View More</Link>
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className='slider-3'>
                <h1>Get your <span>Education</span> today!</h1>
                <div className="slider-card-container">
                    <div className="slider-card">
                        <img src="https://preview.colorlib.com/theme/course/images/earth-globe.svg" alt="" />
                        <div className="card-text">
                            <h3>Online Courses</h3>
                            <Link to={"/"}>View More</Link>
                        </div>
                    </div>
                    <div className="slider-card">
                        <img src="https://preview.colorlib.com/theme/course/images/earth-globe.svg" alt="" />
                        <div className="card-text">
                            <h3>Online Courses</h3>
                            <Link to={"/"}>View More</Link>
                        </div>
                    </div>
                    <div className="slider-card">
                        <img src="https://preview.colorlib.com/theme/course/images/earth-globe.svg" alt="" />
                        <div className="card-text">
                            <h3>Online Courses</h3>
                            <Link to={"/"}>View More</Link>
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>
      </Swiper>
  )
}

export default MainSlider