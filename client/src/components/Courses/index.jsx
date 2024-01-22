import React from 'react'
import UseFetchData from '../../hooks/UseFetchData'
import Card from '../ProductCard'
import "./index.scss"

const Courses = () => {
    const {data} = UseFetchData()
  return (
    <div>
        <div className="course-main-container">
            <div className="border"></div>
            <h2>Courses</h2>
            <div className="products-main-container">
                {
                    data && data.map((item) => {
                        return (
                            <Card key={item._id} item={item} />
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Courses