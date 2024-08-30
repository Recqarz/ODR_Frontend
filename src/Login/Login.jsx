// src/components/Login.jsx
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { isAuthentication } from '../../store/user-actions';
import './Login.css';

// import { uiActions } from '../../store/uiaction-slice';
import { useNavigate } from 'react-router-dom';
// import { FaRegEye } from "react-icons/fa";
// import { FaRegEyeSlash } from "react-icons/fa";
// import { requestForToken } from '../../firebase/firebaseConfig';


const Login = () => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const dispatch = useDispatch(); 
  const history = useNavigate()

  const handleSubmit = async(e) => {}
  //   e.preventDefault();
  //   if(password=='' || email ==''){
     
  //     dispatch(uiActions.showNotification({
  //       status: "failure",
  //       message:'Please Enter email and Password'
  //     }));
  //   }
  //   const token = await requestForToken()
  //   // const data = await dispatch(isAuthentication(email,password,token));
  //   if(data?.data?.data?.role=='user')
  //   {
  //     window.location.href = '/client-dashboard';
  //     // history.push('/client-dashboard');
  //   }
  //   else{
  //     if (data)  window.location.href = '/';
  //       // history.push("/");
  //   }

  // };
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
        <div className='login-page overlay'>
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
              <div className="login-form">
              <div className="logo mb-4"><img src="/images/logo.png" alt="Logo" /></div>
                <div className="title">Login</div>
                <form onSubmit={handleSubmit}>
                  <div className="input-boxes">
                    {/* <div className="mb-4">
                      <h1 className="text-primary">Welcome</h1>
                      <p className="text-muted">Sign in to continue to portal.</p>
                    </div> */}
                    <div className="mb-4 input-box">
                      {/* <label className="block mb-2">Email</label> */}
                      <i className="fas fa-envelope"></i>
                      <input type="email" className="w-full" placeholder="Type Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-4 input-box passw">
                      {/* <label className="block mb-2">Password</label> */}
                      <i className="fas fa-lock"></i>
                      <input type={visivility ? "text" : "password"} className="w-full" placeholder="Type your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      <span className='show-pass' onClick={changeIcons}>
                        {visivility ? <></> :<></> }
                      </span>
                    </div>
                    <div className="text"><a href="#">Forgot password?</a></div>
                    <div className="btn-row- button input-box">
                      {/* <input type="submit" value="Sumbit" /> */}
                      <button type="submit" className="btn blue-button">Login</button>
                      
                    </div>
                    <div className="text sign-up-text">Don't have an account? <label for="flip">Sigup now</label></div>
                  </div>
                </form>
              </div>
              <div className="signup-form">
              <div className="logo mb-4"><img src="/images/logo.png" alt="Logo" /></div>
                <div className="title">Signup</div>
                <form action="#">
                    <div className="input-boxes">
                      <div className="input-box">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Enter your name" required />
                      </div>
                      <div className="input-box">
                        <i className="fas fa-envelope"></i>
                        <input type="text" placeholder="Enter your email" required />
                      </div>
                      <div className="input-box passw">
                        <i className="fas fa-lock"></i>
                        <input type={visivility ? "text" : "password"} placeholder="Enter your password" required />
                        <span className='show-pass' onClick={changeIcons}>
                          {visivility ? <></>: <></>}
                        </span>
                      </div>
                      <div className="button input-box">
                        {/* <input type="submit" value="Sumbit" /> */}
                        <button type="submit" className="btn blue-button">Signup</button> 
                      </div>
                      <div className="text sign-up-text">Already have an account? <label for="flip">Login now</label></div>
                    </div>
                </form>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Login;
