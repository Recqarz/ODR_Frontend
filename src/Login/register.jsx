import React from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const register = () => {
  const [visivility, setVisivility] = React.useState(false)
  const changeIcons = () => {
    if (visivility === false) {
      setVisivility(true)
    } else {
      setVisivility(false)
    }
  }
  return (
    <>
        <div className='login-page overlay' style={{position:"static", minHeight:"auto"}}>
        <div className="login-box modal- custom-modal upload-popup login-container-">
          {/* <div className="logo mb-4"><img src="/images/logo.png" alt="Logo" /></div> */}
          <input type="checkbox" id="flip" />
          <div className="cover">
            <div className="front">
              <img src="/images/frontImg.jpg" alt="" />
              <div className="text">
                <span className="text-1">Every new friend is a <br /> new adventure</span>
                <span className="text-2">Let's get connected</span>
              </div>
            </div>
            <div className="back">
              <img className="backImg" src="/images/backImg.jpg" alt="" />
              <div className="text">
                <span className="text-1">Complete miles of journey <br /> with one step</span>
                <span className="text-2">Let's get started</span>
              </div>
            </div>
          </div>
          <div className="forms">
            <div className="form-content">
              <div className="signup-form">
              <div className="logo mb-4"><img src="/images/logo.png" alt="Logo" /></div>
                <div className="title">Register New User</div>
                <form action="#">
                    <div className="input-boxes">
                      <div className="input-box">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="User name" required />
                      </div>
                      <div className="input-box">
                        <i className="fas fa-envelope"></i>
                        <input type="text" placeholder="Enter your email" required />
                      </div>
                      <div className="input-box">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Enter your name" required />
                      </div>
                      <div className="input-box passw">
                        <i className="fas fa-lock"></i>
                        <input type={visivility ? "text" : "password"} placeholder="Enter your password" required />
                        <span className='show-pass' onClick={changeIcons}>
                          {visivility ? <FaRegEye /> : <FaRegEyeSlash />}
                        </span>
                      </div>
                      <div className="input-box">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Role" required />
                      </div>
                      <div className="button input-box">
                        {/* <input type="submit" value="Sumbit" /> */}
                        <button type="submit" className="btn blue-button">Register</button> 
                      </div>
                      <div className="text sign-up-text">Already have an account? <label for="flip">Login now</label></div>
                    </div>
                </form>
              </div>
              <div className="login-form">
              <div className="logo mb-4"><img src="/images/logo.png" alt="Logo" /></div>
                <div className="title">You Already Loggedin</div>
                <div className="text sign-up-text" style={{textAlign: "left"}}>You want to add new user? <label for="flip">Sigup now</label></div>
                <div className="text sign-up-text" style={{textAlign: "left"}}>Go to Dashbord! <a href="/"><label>Continue</label></a></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default register