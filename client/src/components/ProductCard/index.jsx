import React from 'react'
import "./index.scss"
import {useNavigate} from "react-router-dom"

const Card = ({item}) => {
  const navigate = useNavigate()
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
            <div style={{ width: "25%", margin: "0 auto", display: "flex", gap: "20px", marginTop: "20px"}}>
              <i style={{cursor: "pointer"}} class="fa-solid fa-cart-shopping"></i>
              <i style={{cursor: "pointer"}} class="fa-solid fa-heart"></i>
              <i onClick={() => navigate(`${item._id}`)} style={{cursor: "pointer"}} class="fa-solid fa-eye"></i>
            </div>
        </div>
    </div>
  )
}

export default Card