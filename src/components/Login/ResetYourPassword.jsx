import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { IconButton, InputAdornment } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/uiaction-slice';
import { forgotPassword } from '../../store/user-actions';

const ResetYourPassword = () => {
    const dispatch = useDispatch(); 

    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [visibility, setVisibility] = useState(false);
    const { userId, hash } = useParams();

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordMismatch(retypePassword && e.target.value !== retypePassword);
      };
      const handleRetypePasswordChange = (e) => {
        setRetypePassword(e.target.value);
        setPasswordMismatch(password && e.target.value !== password);
      };
      const toggleVisibility = () => setVisibility((prevVisibility) => !prevVisibility);
      const [passwordMismatch, setPasswordMismatch] = useState(false);

      const handleSubmit = async (e) =>{
        e.preventDefault();
        if(password != retypePassword || password ==""){
            dispatch(uiActions.showNotification({
              status: "failure",
              message:'Please reEnter the same  pass'
            }));
          }
          const data = await dispatch(forgotPassword({password}, userId, hash));

      }
  return (
    <>
    <div className="login-page fp-page">
        <div className="bound">
            <div className="form-sec">
            <div className="left-form" style={{width:"100%"}}>
                <div className="form-box login-box">
                    <div className="lock-icon"><LockOpenIcon /></div>
                    <h3 style={{textAlign:"center"}}>Reset Your Password</h3>
                    <div className="register-form custom-form">
                        <Box component="form" onSubmit={handleSubmit}>
                            <p style={{textAlignLast:"center"}}>Enter your new password below to regain access to your account.</p>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="New Password"
                                placeholder="Enter Your New Password"
                                value={password}
                                onChange={handlePasswordChange}
                                type={visibility ? "text" : "password"}
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <HttpsOutlinedIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                    <IconButton onClick={toggleVisibility}>
                                        {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                    </InputAdornment>
                                ),
                                }}
                                id="password"
                                variant="standard"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="retypePassword"
                                label="Confirm New Password"
                                placeholder="Confirm Your New Password"
                                value={retypePassword}
                                onChange={handleRetypePasswordChange}
                                type={visibility ? "text" : "password"}
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <HttpsOutlinedIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                    <IconButton onClick={toggleVisibility}>
                                        {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                    </InputAdornment>
                                ),
                                }}
                                id="retypePassword"
                                variant="standard"
                                error={passwordMismatch}
                                helperText={passwordMismatch ? "Passwords do not match" : ""}
                            />
                            <div className='login-btn-row'>
                                <Button className='rg-btn left-eft' type="submit">Submit</Button>
                            </div>
                        </Box>
                    
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ResetYourPassword

