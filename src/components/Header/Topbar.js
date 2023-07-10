import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../Asset/Images/flipkart-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Topbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">

          <img src={logo} width='75' />

          <input className="border-end-0 border searchinput" type="search" id="example-search-input" placeholder='Search for products, brands and more' />
          <span className="input-group-append">
            <button className="bg-white border-start-0  border ms-n5 searchbutton" type="button">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </span>
          
          <button className="bg-white border-start-0  border ms-n5 py-1 px-4 loginbutton" type="button">
         Login
        </button>
     
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex" style={{width:'100%'}}>
              <li className="nav-item">
                <a className="nav-link text-white px-4" aria-current="page" href="#"><strong>Become a Seller</strong> </a>
              </li>
           
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 <strong>More</strong>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
          
              <li className="nav-item ms-auto">
              <a className="nav-link text-white" href="#"><FontAwesomeIcon icon={faCartShopping}/><sup className='cartitem'>2</sup>Cart</a>
            </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Topbar
