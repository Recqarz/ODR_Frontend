import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/user-actions";

const StyledSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

//search as JSX
const search = (
  <StyledSearch>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Suchen…"
      inputProps={{ "aria-label": "search" }}
    />
  </StyledSearch>
);



export default function Header() {
    //react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed
    const [open, setState] = useState(false);
    const role = useSelector(state => state.user.role) || JSON.parse(atob(localStorage.getItem("user") || "") || null);
    //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
    const toggleDrawer = (open) => (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      //changes the function state according to the value of open
      setState(open);
    };
    const history = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = async (e) => {
      e.preventDefault()
      const allClear = await dispatch(logout())
      if (allClear) history('/login');
  }
  
    return (
        <div className="header">
            <div className="nav">
                <div className="logo">Logo</div>
                <Box className="main-menu" component="div" sx={{display: {xs: "none", sm: "block" }
                }} >
                {/* {search} */}
                    <ul>
                        <li className='active'><Link to="/">Home</Link></li>
                        <li><Link to="/">For Arbitrators</Link></li>
                        <li><Link to="/">For NBFCs</Link></li>
                        <li className='book-c'><Link to="/">Book Consultation</Link></li>
                        { !role ? <li className='login-btn'><Link to="/login">Register/Login</Link></li>:
                          <button onClick={(e) => handleLogout(e)}>
                            <li  className='login-btn'>Logout</li>
                          </button> 

                          }
                    </ul>
                </Box>

                <IconButton edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer(true)}
                    sx={{mr: 2, display: {xs: "block", sm: "none" }
                }} >
                    <MenuIcon />
                </IconButton>

                {/* The outside of the drawer */}
                <Drawer
                //from which side the drawer slides in
                anchor="right"
                //if open is true --> drawer is shown
                open={open}
                //function that is called when the drawer should close
                onClose={toggleDrawer(false)}
                //function that is called when the drawer should open
                onOpen={toggleDrawer(true)}
                >
                {/* The inside of the drawer */}
                <Box
                    sx={{
                    p: 2,
                    height: 1,
                    backgroundColor: "#dbc8ff"
                    }}
                >
                    {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
                    <IconButton sx={{ mb: 2 }}> <CloseIcon onClick={toggleDrawer(false)} /></IconButton>
                    <Divider sx={{ mb: 2 }} />
                        <Box sx={{ mb: 2 }} className="mobile-menu"> 
                            <ListItemButton>
                                <ListItemIcon><ImageIcon sx={{ color: "primary.main" }} /></ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>

                            <ListItemButton>
                                <ListItemIcon><DescriptionIcon sx={{ color: "primary.main" }} /></ListItemIcon>
                                <ListItemText primary="For Arbitrators" />
                            </ListItemButton>

                            <ListItemButton>
                                <ListItemIcon><FolderIcon sx={{ color: "primary.main" }} /></ListItemIcon>
                                <ListItemText primary="For NBFCs" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon><FolderIcon sx={{ color: "primary.main" }} /></ListItemIcon>
                                <ListItemText primary="Book Consultation" />
                            </ListItemButton>
                        </Box>
                    {search}
                    <Box className="menu-btn">
                        <Link to="/login" className="rg-btn left-eft">Login</Link>
                        <Link to="/register" className="rg-btn left-eft">Register</Link>
                    </Box>
                </Box>
                </Drawer>
            </div>
        </div>
    );
  }

// const Header = () => {
//   return (
//     <>
//         <div className="header">
//             <div className="nav">
//             <div className="logo">
//                 Logo
//             </div>
//             <div className="main-menu">
//                 <ul>
//                 <li className='active'><Link to="/">Home</Link></li>
//                 <li><Link to="/">For Arbitrators</Link></li>
//                 <li><Link to="/">For NBFCs</Link></li>
//                 <li className='book-c'><Link to="/">Book Consultation</Link></li>
//                 <li className='login-btn'><Link to="/">Register/Login</Link></li>
//                 </ul>
//             </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Header
