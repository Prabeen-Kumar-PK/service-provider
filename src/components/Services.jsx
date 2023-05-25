import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"

const Services = () => {
  return (
    <div className='services'>
      <Carousel 
      infiniteLoop 
      autoPlay 
      showStatus={false} 
      showArrows={false}
      interval={1000}
      showThumbs={false}
      
      >
        <div>
          <img  className="img-fluid" src={img1} alt="Item-1" />
          <p className='legend'>Full stack</p>
        </div>
        <div>
          <img  className="img-fluid" src={img2} alt="Item-2" />
          <p className='legend'>Ui/UX  design</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services
