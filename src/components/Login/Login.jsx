import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Link as RouterLink } from 'react-router-dom';





import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment } from '@mui/material';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import './Login.css';
import { isAuthentication } from '../../store/user-actions';


const Login = () => {
    const [visivility, setVisivility] = React.useState(false) 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch(); 
    // const history = ()
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      console.log("[===")
      if(password=='' || email ==''){
       
        dispatch(uiActions.showNotification({
          status: "failure",
          message:'Please Enter email and Password'
        }));
      }
      const data = await dispatch(isAuthentication(email,password));
      console.log(data,"===",data?.data?.data?.role)
      if(data?.data?.data?.role=='user')
      {
        window.location.href = '/';
        // history.push('/client-dashboard');
      }
      else{
        if (data)  window.location.href = '/';
          // history.push("/");
      }
  
    };
  const changeIcons = () => {
    if (visivility === false) {
        setVisivility(true)
        } else {
        setVisivility(false)
        }
    }
  return (
    <>
    <div className="login-page">
        <div className="bound">
            <div className="form-sec">
            <div className="left-form">
                <div className="form-box login-box">
                    <h3>Login</h3>
                    {/* <div className="chouse-sec">
                        <RadioGroup row >
                            <FormControlLabel value="arbitrator" control={<Radio />} label="Arbitrator" />
                            <FormControlLabel value="client" control={<Radio />} label="Client" />
                        </RadioGroup>
                    </div> */}
                    <div className="register-form custom-form">
                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField
                                id="email" label="Email Address"
                                placeholder='Type Your Email'
                                size='large'
                                margin="normal" required fullWidth name="email" autoComplete="email" autoFocus
                                value={email}
                                onChange={handleEmailChange}
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <PersonOutlineIcon />
                                    </InputAdornment>
                                ),
                                }}
                                variant="standard"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                placeholder='Type your password'
                                type={visivility ? "text" : "password"} // Assuming 'visibility' is the correct variable name
                                value={password}
                                onChange={handlePasswordChange}
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <HttpsOutlinedIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                    <IconButton onClick={changeIcons}>
                                        {visivility ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                    </InputAdornment>
                                ),
                                }}
                                id="password"
                                autoComplete="current-password" variant="standard" 
                                />
                            <div className="forgot-password"><RouterLink to='/forgot-password'>Forgot password?</RouterLink></div>
                            <div className='login-btn-row'>
                                <Button className='rg-btn left-eft' type="submit">Login</Button>
                            </div>
                            <div className="sign-up-link">Didn’t have an account? <RouterLink to='/register'>Sign up</RouterLink></div>
                        </Box>
                    
                    </div>
                </div>
            </div>
            <div className="login-img">
                <img src="images/login-right.png" alt="User Img" />
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
