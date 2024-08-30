import React from 'react';
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Header from './Header';
import Footer from './Footer';

function Home() {
  return (
    <>
      <div className="home">
        <div className="bound">
          <Header />
          <div className="intro-sec pb-40">
            <div className="intro-text">
              <h1>Introduction</h1>
              <p>Welcome to Resolve24x7, your efficient Online Dispute Resolution 
                  platform. We offer a secure, cost-effective way to resolve conflicts 
                  with expert arbitrators and mediators. Access fair resolutions quickly 
                  and easily, anytime, anywhere, without the hassle of traditional court 
                  proceedings. Simplify dispute resolution with Resolve24x7.</p>
                  <div className="rg-link"><Link to="/" className="rg-btn left-eft">Register Now</Link></div>
            </div>
            <div className="intro-img">
              <img className='land-ses' src="images/intro-img.png" alt="Intro Img" />
            </div>
          </div>
          <div className="arbit-sec pb-40">
            <h3 className='h3'>For Arbitrator</h3>
            <div className="arbit-box">
              <div className="arbit-text">
                <p>As an arbitrator on Resolve24x7, you gain access to a streamlined,
                digital environment where you can efficiently manage and resolve 
                disputes. Our platform provides the tools and support you need to 
                deliver fair, unbiased decisions, ensuring a transparent process for 
                all parties involved. Join us in making dispute resolution faster and 
                more accessible.</p>
                <div className='rg-link register-btn'><Link to="/" className="rg-btn right-aero">Register <KeyboardArrowRightIcon /></Link></div>

              </div>
              <div className="arbit-img">
                <img className='land-ses' src="images/arbit-img.png" alt="Arbitrator" />
              </div>
            </div>
          </div>
          {/* <div className="arbit-sec client-sec pb-40">
            <h3 className='h3'>For Client</h3>
            <div className="arbit-box">
              <div className="arbit-text">
                <p>As an arbitrator on Resolve24x7, you gain access to a streamlined,
                digital environment where you can efficiently manage and resolve 
                disputes. Our platform provides the tools and support you need to 
                deliver fair, unbiased decisions, ensuring a transparent process for 
                all parties involved. Join us in making dispute resolution faster and 
                more accessible.</p>
                <div className='rg-link register-btn'><Link to="/" className="rg-btn right-aero">Register <KeyboardArrowRightIcon /></Link></div>

              </div>
              <div className="arbit-img">
                <img className='land-ses' src="images/arbit-img.png" alt="Arbitrator" />
              </div>
            </div>
          </div> */}
          <Footer/>

        </div>
      </div>
    </>
  );
}

export default Home;
