import React from 'react'
import "./index.scss"

const Card = ({item}) => {
  return (
    <div className='course-card'>
        <img src={item.image} alt="" />
        <div className="card-text">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="author-price">
                <img src={item.avatar} alt="" />
                <h5>{item.author}, <p>Author</p></h5>
                <div className='price'>
                    <span>${item.price}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card