import React from 'react'
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <>
        <div className="land-footer">
            <div className="foot-left">
                <h3>Registered Office Address</h3>
                <div className="address">
                    <strong>RECHT TECH PRIVATE LIMITED</strong><br/>
                    5 Sardar Patel Marg Diplomatic Enclave Chanakyapuri New Delhi-110021
                </div>
                <div className="phone"><strong>Telephone:</strong> 0987654321</div>
            </div>
            <div className="foot-right">
                <div className="foot-col1">
                    <h3>Company</h3>
                    <ul>
                    <li><ScrollLink to="intro-text" smooth={true} duration={500}>Introduction</ScrollLink></li>
                    <li><ScrollLink to="for-arbitrator" smooth={true} duration={500} offset={-80}>For Arbitrator</ScrollLink></li>
                    <li><ScrollLink to="for-client" smooth={true} duration={500} offset={-120}>For Client</ScrollLink></li>
                    <li><Link to="/query">Raise a Ticket</Link></li>
                    <li><Link to="/book-consultation">Book Consultation</Link></li>
                    </ul>
                </div>
                <div className="foot-col1">
                    <h3>Documentation</h3>
                    <ul>
                    <li><Link to="/">Help Centre </Link></li>
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/">FAQ</Link></li>
                    <li><Link to="/">Privacy Policy</Link></li>
                    <li><Link to="/">Refund & Cancellation Policy</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
