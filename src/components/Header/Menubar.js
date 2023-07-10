import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from '@trendyol-js/react-carousel';
import img1 from '../../Asset/menubarImages/1.png'
import img2 from '../../Asset/menubarImages/2.png'
import img3 from '../../Asset/menubarImages/3.png'
import img4 from '../../Asset/menubarImages/4.png'
import img5 from '../../Asset/menubarImages/5.jpg'
import img6 from '../../Asset/menubarImages/6.png'
import img7 from '../../Asset/menubarImages/7.png'
import img8 from '../../Asset/menubarImages/8.png'
import img9 from '../../Asset/menubarImages/9.png'
import img10 from '../../Asset/menubarImages/10.png'


const Menubar = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)

  })
  return (
    <>
      {
        width > 900 ? <div className="container">
          <div className="row mx-auto">

            <ul className='d-flex category' style={{ listStyleType: 'none' }}>
              <li>
                <img src={img1} width='70px' />
                <a href="#" className='text-dark'>Grocery</a>
              </li>
              <li>
                <img src={img2} width='70px' />
                <a href="#" className='text-dark'>Mobiles</a>
              </li>
              <li>

                <img src={img3} width='70px' />
                <div className="dropdown">
                  <p className="dropdown-toggle" type="text" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Fashion
                  </p>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>

              </li>
              <li>
                <img src={img4} width='70px' />
                <div className="dropdown">
                  <p className="dropdown-toggle" type="text" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Electronics
                  </p>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <img src={img5} width='70px' /><br/>
                Home & Furniture
              </li>
              <li>
                <img src={img6} width='70px' />
                Appliances

              </li>
              <li>
                <img src={img7} width='70px' />
                Travel
              </li>
              <li>
              <img src={img8} width='70px' /><br/>
              Top Offers
            </li>
              <li>
                <img src={img9} width='70px' />
                <div className="dropdown">
                  <p className="dropdown-toggle" type="text" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Beauty, Toys & More
                  </p>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <img src={img10} width='70px' />
                <div className="dropdown">
                  <p className="dropdown-toggle" type="text" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Two Wheelers
                  </p>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </li>


            </ul>


          </div>
        </div> : <Carousel show={3.5} slide={3} >
          <div>
          <img src={img1} width='70px' />
          <a href="#" className='text-dark'>Grocery</a>
          </div>
          <div>
          <img src={img2} width='70px' />
          <a href="#" className='text-dark'>Mobiles</a>
          </div>
          <div>
          <img src={img3} width='70px' />
                <div className="dropdown">
                  <p className="dropdown-toggle" type="text" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Fashion
                  </p>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
          </div>
          <div>
          <img src={img4} width='70px' />
                <div className="dropdown">
                  <p className="dropdown-toggle" type="text" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Electronics
                  </p>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
          </div>
          <div>
          <img src={img5} width='70px' /><br/>
          Home & Furniture
          </div>
          <div>
          <img src={img6} width='70px' />
                Appliances
          </div>
          <div>
          <img src={img7} width='70px' />
                Travel
          </div>
          <div>
          <img src={img8} width='70px' /><br/>
          Top Offers
          </div>
          <div>
          <img src={img9} width='70px' />
          <div className="dropdown">
            <p className="dropdown-toggle" type="text" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Beauty, Toys & More
            </p>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          </div>
          <div>
          <img src={img10} width='70px' />
                <div className="dropdown">
                  <p className="dropdown-toggle" type="text" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Two Wheelers
                  </p>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
          </div>
       
        </Carousel>
      }





    </>
  )
}

export default Menubar
