import React from 'react'
// import { Carousel } from '@trendyol-js/react-carousel';
import 'bootstrap/dist/css/bootstrap.css';
import slider1 from '../../Asset/sliderImages/slider1.jpg'
import slider2 from '../../Asset/sliderImages/slider2.jpg'
import slider3 from '../../Asset/sliderImages/slider3.jpg'
import slider4 from '../../Asset/sliderImages/slider4.jpg'
import slider5 from '../../Asset/sliderImages/slider5.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const HomeSlider = () => {
  return (
    <>
      <Carousel showIndicators={false} showThumbs={false} autoPlay={true} interval={2000} infiniteLoop={true} showStatus={false}>
        <div>
          <img src={slider1} />
        </div>
        <div>
          <img src={slider2} />
        </div>
        <div>
          <img src={slider3} />
        </div>
        <div>
          <img src={slider4} />
        </div>
        <div>
          <img src={slider5} />
        </div>
      </Carousel>

    </>
  )
}

export default HomeSlider
