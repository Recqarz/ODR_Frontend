import React from 'react'
import Header from '../../pages/Header'
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <>
    <div className="logout">
        <Header />
        <div className="bound">
          
          <div className="intro-sec pb-40" id='intro-text'>
            <div className="intro-text">
              <h1>Welcome to Bharat ODR</h1>
              <p>Everything you need to access and manage the Bharat ODR — in one web interface</p>
              <div className="rg-link"><Link to="/login" className="rg-btn left-eft">Login Again</Link></div>
            </div>
            <div className="intro-img">
              <img className='land-ses' src="images/intro-img.png" alt="Intro Img" />
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Logout
