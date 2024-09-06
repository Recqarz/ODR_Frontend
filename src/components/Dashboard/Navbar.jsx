import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
    Box,
    Toolbar,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    IconButton,
    Avatar,
    Menu,
    Tooltip,
    Collapse,
    MenuItem,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from '@mui/icons-material/People';
import CaseIcon from '@mui/icons-material/FolderOpen';
import MeetingIcon from '@mui/icons-material/VideoCall';
import DocumentIcon from '@mui/icons-material/Description';
import TicketIcon from '@mui/icons-material/ConfirmationNumber';
import ConsultationIcon from '@mui/icons-material/Assignment';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../../store/drawerSlice";
import { useNavigate } from "react-router-dom";
import Arbitrator from "./Users/Arbitrator";
import Dashboard from "./Dashboard";
import ConsultationRequests from "./ConsultationRequests/ConsultationRequests";
import Clients from "./Users/Clients";
import Cases from "./Cases/Cases";
import Meetings from "./Meetings/Meetings";
import Documents from "./Documents/Documents";
import { Link } from "react-router-dom";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from "../../store/user-actions";
import Tickets from "./Tickets/Tickets";
import CreateTickets from "./Tickets/CreateTickets";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "rgb(28 121 216 / 80%)", // Set the background color to transparent with 50% opacity
    backdropFilter: "blur(6px)", // Apply a blur effect
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));


// Admin 
const adminDrawerLists = [
    {
        text: "Dashboard",
        icons: <HomeIcon />,
        navigate: "/dashboard",
        className:"active"
    },
    {
        text: "Users",
        icons: <PeopleIcon />,
        // navigate: "/users",
        subItems: [
            {
                text: "Arbitrator",
                // icons: <ArrowRightIcon />,
                navigate: "/arbitrator",
            },
            {
                text: "Clients",
                // icons: <ArrowRightIcon />,
                navigate: "/clients",
            },
        ],
    },
    {
        text: "Cases",
        icons: <CaseIcon />,
        navigate: "/cases",
    },
    {
        text: "Meetings",
        icons: <MeetingIcon />,
        navigate: "/meetings",
    },
    {
        text: "Documents",
        icons: <DocumentIcon />,
        navigate: "/documents",
    },
    {
        text: "Tickets",
        icons: <TicketIcon />,
        navigate: "/tickets",
    },
    {
        text: "Consultation Requests",
        icons: <ConsultationIcon />,
        navigate: "/consultationrequests",
        className: "cl-request"
    },
    {
        text: "Template",
        icons: <PeopleIcon />,
        // navigate: "/users",
        subItems: [
            {
                text: "Email",
                // icons: <ArrowRightIcon />,
                navigate: "/arbitrator",
            },
            {
                text: "PDF",
                // icons: <ArrowRightIcon />,
                navigate: "/clients",
            },
        ],
    },
    {
        text: "Master",
        icons: <PeopleIcon />,
        // navigate: "/users",
        subItems: [
            {
                text: "Industry",
                // icons: <ArrowRightIcon />,
                navigate: "/arbitrator",
            },
            {
                text: "Variable",
                // icons: <ArrowRightIcon />,
                navigate: "/clients",
            },
            {
                text: "Notice",
                // icons: <ArrowRightIcon />,
                navigate: "/clients",
            },
        ],
    },
];

// Arbitrator 
const arbitratorDrawerLists = [
    {
        text: "Dashboard",
        icons: <HomeIcon />,
        navigate: "/dashboard",
        className:"active"
    },
    {
        text: "Cases",
        icons: <CaseIcon />,
        navigate: "/cases",
    },
    {
        text: "Meetings",
        icons: <MeetingIcon />,
        navigate: "/meetings",
    },
    {
        text: "Documents",
        icons: <DocumentIcon />,
        navigate: "/documents",
    },
    {
        text: "Tickets",
        icons: <TicketIcon />,
        navigate: "/tickets",
    },
];

// Client 
const clientDrawerLists = [
    {
        text: "Dashboard",
        icons: <HomeIcon />,
        navigate: "/dashboard",
        className:"active"
    },
    {
        text: "Cases",
        icons: <CaseIcon />,
        navigate: "/cases",
    },
    {
        text: "Meetings",
        icons: <MeetingIcon />,
        navigate: "/meetings",
    },
    {
        text: "Documents",
        icons: <DocumentIcon />,
        navigate: "/documents",
    },
    {
        text: "Tickets",
        icons: <TicketIcon />,
        navigate: "/tickets",
    },
    {
        text: "Consultation Requests",
        icons: <ConsultationIcon />,
        navigate: "/consultationrequests",
    },
];

const DrawerLists2 = [
    {
        text: "Settings",
        icons: <SettingsIcon />,
        // navigate: "/users",
        subItems: [
            {
                text: "Settings 1",
                icons: <SettingsIcon />,
                navigate: "/#",
            },
            {
                text: "Settings 2",
                icons: <SettingsIcon />,
                navigate: "/#",
            },
        ],
    },
    {
        text: "Log out",
        icons: <LogoutIcon />,
        navigate: "/logout",
        className:"logout",
    },
];


export default function Navbar() {
    const theme = useTheme();
    const open = useSelector((state) => state.drawer.isOpen)
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [openItem, setOpenItem] = useState(null);
    const [activeClass, setActiveClass] = useState('');

    const [currentBar, setCurrentBar] = useState('/dashboard')
    const dispatch = useDispatch()
    const role = useSelector(state => state.user.role) || JSON.parse(atob(localStorage.getItem("user") || "") || null);
    let DrawerLists
    if (role=='user') {
         DrawerLists = clientDrawerLists
    }
    else if (role=='admin'){
        DrawerLists = adminDrawerLists
    }
    else{
        DrawerLists = arbitratorDrawerLists

    }
    const history = useNavigate()

    const handleLogout = async (e) => {
    //   e.preventDefault()
      const allClear = await dispatch(logout())
      if (allClear) history('/');
  }

    const handleToggle = (itemText) => {
        setOpenItem(openItem === itemText ? null : itemText);
    };

    const handleNavigate = (navigate,text) => {
        setCurrentBar(navigate)
        setActiveClass(text)
    };

    const handleDrawerOpenClose = () => {
        dispatch(toggleDrawer())
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const setAddTicket = (e) =>{
        e.preventDefault()
        setCurrentBar('/addtickets')
    }
    // Get username from localStorage
    const username = localStorage.getItem("username") ? JSON.parse(localStorage.getItem("username")) : "User";
    // Assuming settings is an array of objects with 'text' and 'action' properties
    const settings = [
        { text: "Profile", action: () => console.log("Profile clicked") },
        { text: "Account", action: () => console.log("Account clicked") },
        { text: "Logout", action: async() => {
            const allClear = await dispatch(logout())
            if (allClear) history('/');
                console.log("Logout clicked")} 
            },
    ];

    return (
        <>
            <Box sx={{ display: "flex" }}>
                <AppBar className="top-bar" position="fixed" open={open}>
                    <Toolbar className="top-sec">
                        
                        <IconButton
                            color="#1E201F"
                            aria-label="open drawer"
                            onClick={handleDrawerOpenClose}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(open && { display: "none" }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className="p-title" variant="h5">{currentBar.split("/")[1]}</Typography>
                        {/* ============== profile ========= */}
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ marginLeft: "auto", p: 0 }}
                            >
                               
                                <div className="user-icon">
                                    <PersonOutlineIcon  />
                                </div>
                                
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map(({ text, action }, index) => (
                                <MenuItem key={index} onClick={() => {
                                    action();
                                    handleCloseUserMenu();
                                }}>
                                    {text}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Toolbar>
                </AppBar>
                <Drawer className="left-side" variant="permanent" open={open}>
                    <DrawerHeader className="proj-title">
                        <Typography variant="h5">भारत ODR</Typography>
                        <IconButton onClick={handleDrawerOpenClose}>
                            {theme.direction === "rtl" ? (
                                <ChevronRightIcon />
                            ) : (
                                <ChevronLeftIcon />
                            )}
                        </IconButton>
                    </DrawerHeader>

                    <List className="list-item">
                        {DrawerLists.map(({ text, icons, navigate, subItems, className }, ind) => (
                            <div key={ind} id={className} className={activeClass == text ? "active" : ""}>
                                <ListItem
                                    disablePadding
                                    onClick={() => (subItems ? handleToggle(text) : handleNavigate(navigate,text))}
                                >
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: "initial",
                                            px: 2.5,
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: 3,
                                                justifyContent: "center",
                                            }}
                                        >
                                            {icons}
                                        </ListItemIcon>
                                        <ListItemText  primary={text}/>
                                        {subItems ? (openItem === text ? <ExpandLess /> : <ExpandMore />) : null}
                                    </ListItemButton>
                                </ListItem>
                                {subItems && (
                                    <Collapse in={openItem === text} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {subItems.map(({ text, icons, navigate }, subInd) => (
                                                <ListItem
                                                    key={subInd}
                                                    disablePadding
                                                    className={activeClass == text ? "active" : ""}
                                                    onClick={() => handleNavigate(navigate,text)}
                                                >
                                                    <ListItemButton
                                                        sx={{
                                                            pl: 4,
                                                            minHeight: 40,
                                                            justifyContent: "initial",
                                                        }}
                                                    >
                                                        <ListItemIcon
                                                            sx={{
                                                                minWidth: 0,
                                                                mr: 3,
                                                                justifyContent: "center",
                                                            }}
                                                        >
                                                            {icons}
                                                        </ListItemIcon>
                                                        <ListItemText primary={text} />
                                                    </ListItemButton>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Collapse>
                                )}
                            </div>
                        ))}
                    </List>
                    <List className="list-item satting-menu">
                        {DrawerLists2.map(({ text, icons, navigate, subItems, className }, ind) => (
                            <div key={ind} id={className}  className={activeClass == text ? "active" : ""}>
                                <ListItem
                                    disablePadding
                                    onClick={() =>
                                        text === "Log out" ? handleLogout() : subItems ? handleToggle(text) : handleNavigate(navigate, text)
                                    }
                                >
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: "initial",
                                            px: 2.5,
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: 3,
                                                justifyContent: "center",
                                            }}
                                        >
                                            {icons}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                        {subItems ? (openItem === text ? <ExpandLess /> : <ExpandMore />) : null}
                                    </ListItemButton>
                                </ListItem>
                                {subItems && (
                                    <Collapse in={openItem === text} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {subItems.map(({ text, icons, navigate }, subInd) => (
                                                <ListItem
                                                    key={subInd}
                                                    disablePadding
                                                    onClick={() => handleNavigate(navigate,text)}
                                                >
                                                    <ListItemButton
                                                        sx={{
                                                            pl: 4,
                                                            minHeight: 40,
                                                            justifyContent: "initial",
                                                        }}
                                                    >
                                                        <ListItemIcon
                                                            sx={{
                                                                minWidth: 0,
                                                                mr: 3,
                                                                justifyContent: "center",
                                                            }}
                                                        >
                                                            {icons}
                                                        </ListItemIcon>
                                                        <ListItemText primary={text} />
                                                    </ListItemButton>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Collapse>
                                )}
                            </div>
                        ))}
                    </List>
                    {/* <Typography variant="h6">JAI SHREE RAM</Typography> */}
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                
                    <DrawerHeader />
                    <div className="breadcrumb hover-eft-">
                        <ol>
                            <li className="home">
                                <div><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#374151">
                                    <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" ></path></svg>
                                </Link>
                                </div>
                            </li>
                            {/* <li>User 
                            </li> */}
                            <li>
                                <div>
                                    <svg viewBox="0 0 24 44"><path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path></svg> 
                                    <span>{currentBar.split("/")[1]}</span>
                                </div>
                            </li>
                        </ol>
                    </div>
                    {currentBar == '/dashboard' &&
                        <Dashboard />
                    }
                    {currentBar == '/arbitrator' &&
                        <Arbitrator />
                    }
                    {currentBar == '/clients' &&
                        <Clients />
                    }
                    {currentBar == '/cases' &&
                        <Cases />
                    }
                    {currentBar == '/documents' &&
                        <Documents />
                    }
                    {currentBar == '/meetings' &&
                        <Meetings />
                    }
                    {currentBar == '/tickets' &&
                        <Tickets setAddTicket = {setAddTicket} />
                    }
                    {currentBar == '/addtickets' &&
                        <CreateTickets setCurrentBar = {setCurrentBar} />
                    }
                    {currentBar == '/consultationrequests' &&
                        <ConsultationRequests />
                    }

                </Box>
            </Box>

        </>
    );
}
