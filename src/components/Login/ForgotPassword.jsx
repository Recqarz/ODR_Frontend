import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { IconButton, InputAdornment } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockPersonIcon from '@mui/icons-material/LockPerson';

const ForgotPassword = () => {
  return (
    <>
    <div className="login-page fp-page">
        <div className="bound">
            <div className="form-sec">
            <div className="left-form" style={{width:"100%"}}>
                <div className="form-box login-box">
                    <div className="lock-icon"><LockPersonIcon /></div>
                    <h3 style={{textAlign:"center"}}>Forgot password?</h3>
                    <div className="register-form custom-form-">
                        <Box component="form">
                            <p style={{textAlignLast:"center"}}>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
                            <TextField
                                id="email" label="Email Address"
                                placeholder='Type Your Email'
                                size='large'
                                margin="normal" required fullWidth name="email" autoComplete="email" autoFocus
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <PersonOutlineIcon />
                                    </InputAdornment>
                                ),
                                }}
                                variant="standard"
                            />
                            <div className='login-btn-row'>
                                <Button className='rg-btn left-eft' type="submit">Reset Password</Button>
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

export default ForgotPassword
