import React from 'react'
import "./index.scss"

const Contact = () => {
  return (
    <div className='contact-main'>
        <div className='contact-left'>
            <h2>Register now and get a discount 50% discount until 1 January</h2>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
            <button>REGISTER NOW</button>
        </div>  
        <div className="shadow">
          <div className="contact-right">
              <h3>Search for your course</h3>
              <form action="">
                  <input type="text" placeholder='Course Name' />
                  <input type="text" placeholder='Category' />
                  <input type="text" placeholder='Degree' />
                  <button>SEARCH COURSE</button>
              </form>
          </div>
        </div>
    </div>
  )
}

export default Contact