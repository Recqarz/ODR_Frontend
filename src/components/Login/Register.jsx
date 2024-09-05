import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { registerUser } from '../../store/user-actions'; // Assume you have an action to handle registration
import { uiActions } from '../../store/uiaction-slice';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Link as RouterLink } from 'react-router-dom';

const Register = () => {
  const [visibility, setVisibility] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState(''); // Mobile number state
  const [role, setRole] = useState('user'); // Default role
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleOrganizationNameChange = (e) => setOrganizationName(e.target.value);
  const handleMobileNumberChange = (e) => setMobileNumber(e.target.value); // Handle mobile number change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMismatch(retypePassword && e.target.value !== retypePassword);
  };
  const handleRetypePasswordChange = (e) => {
    setRetypePassword(e.target.value);
    setPasswordMismatch(password && e.target.value !== password);
  };
  const handleRoleChange = (e) => setRole(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !name || !organizationName || !mobileNumber || !password || !retypePassword || !role) {
      dispatch(uiActions.showNotification({
        status: "failure",
        message: 'Please fill out all fields',
      }));
      return;
    }

    if (passwordMismatch) {
      dispatch(uiActions.showNotification({
        status: "failure",
        message: 'Passwords do not match',
      }));
      return;
    }

    try {
      const data = await dispatch(registerUser({  email, name, organizationName,  mobile:mobileNumber, password, role }));
      if (data) {
        navigate('/login'); // Redirect to login page after successful registration
      }
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle the error (e.g., show a notification)
    }
  };

  const toggleVisibility = () => setVisibility((prevVisibility) => !prevVisibility);

  return (
    <div className="login-page register-page">
      <div className="bound">
        <div className="form-sec">
          <div className="left-form">
            <div className="form-box login-box">
              <h3>Create New Account</h3>
              <div className="register-form custom-form-">
                <Box component="form" onSubmit={handleSubmit}>
                
                <div className="chouse-sec">
                    {/* <FormLabel component="legend">Role</FormLabel> */}
                    <RadioGroup row value={role} onChange={handleRoleChange}>
                      <FormControlLabel value="arbitory" control={<Radio />} label="Arbitrator" />
                      <FormControlLabel value="user" control={<Radio />} label="Client" />
                    </RadioGroup>
                </div>
                
                  <TextField
                    id="name"
                    label="Full Name"
                    placeholder="Type Your Full Name"
                    margin="normal"
                    required
                    fullWidth
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutlineIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                  {/* {role === 'user' && } */}
                  <TextField
                    id="org-name"
                    label="Organization Name"
                    placeholder="Type Your Organization Name"
                    margin="normal"
                    required
                    fullWidth
                    name="org-name"
                    value={organizationName}
                    onChange={handleOrganizationNameChange}
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
                    id="email"
                    label="Email Address"
                    placeholder="Type Your Email"
                    margin="normal"
                    required
                    fullWidth
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailOutlineIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                  <TextField
                    id="mobile-number"
                    label="Mobile Number"
                    placeholder="Type Your Mobile Number"
                    margin="normal"
                    required
                    fullWidth
                    name="mobileNumber"
                    value={mobileNumber}
                    onChange={handleMobileNumberChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneInTalkIcon />
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
                    placeholder="Type your password"
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
                    label="Confirm Password"
                    placeholder="Confirm Your Password"
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
                    <Button className='rg-btn left-eft' type="submit">Register</Button>
                  </div>
                  <div className="sign-up-link">Already have an account? <RouterLink to='/login'>Login</RouterLink></div>
                </Box>
              </div>
            </div>
          </div>
          <div className="login-img register-img">
            <img src="images/login-right.png" alt="User Img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
