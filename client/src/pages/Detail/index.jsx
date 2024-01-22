import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import axios from "axios"
import "./index.scss"

const Detail = () => {
  const {id} = useParams()
  const [productData, setProductData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:7000/${id}`)
      setProductData(response.data)
    }
    fetchData()
  }, [])
  return (
    <div style={{padding: "300px"}}>
        <Helmet>
            <title>Detail</title>
        </Helmet>
        <div className='course-card'>
        <img src={productData.image} alt="" />
        <div className="card-text">
            <h3>{productData.name}</h3>
            <p>{productData.description}</p>
            <div className="author-price">
                <img src={productData.avatar} alt="" />
                <h5>{productData.author}, <p>Author</p></h5>
                <div className='price'>
                    <span>${productData.price}</span>
                </div>
            </div>
            <div style={{ width: "25%", margin: "0 auto", display: "flex", gap: "20px", marginTop: "20px"}}>
              <i style={{cursor: "pointer"}} class="fa-solid fa-cart-shopping"></i>
              <i style={{cursor: "pointer"}} class="fa-solid fa-heart"></i>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Detail