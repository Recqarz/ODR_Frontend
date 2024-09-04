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
import ConsultationRequests from "./ConsultationRequests";
import Clients from "./Users/Clients";
import Cases from "./Cases";
import Meetings from "./Meetings";
import Tickets from "./Tickets";
import Documents from "./Documents";

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


const DrawerLists = [
    {
        text: "Dashboard",
        icons: <HomeIcon />,
        navigate: "/dashboard",
    },
    {
        text: "Users",
        icons: <PeopleIcon />,
        // navigate: "/users",
        subItems: [
            {
                text: "Arbitrator",
                icons: <ArrowRightIcon />,
                navigate: "/arbitrator",
            },
            {
                text: "Clients",
                icons: <ArrowRightIcon />,
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
    },
];


// Assuming settings is an array of objects with 'text' and 'action' properties
const settings = [
    { text: "Profile", action: () => console.log("Profile clicked") },
    { text: "Account", action: () => console.log("Account clicked") },
    { text: "Logout", action: () => console.log("Logout clicked") },
];
export default function Navbar() {
    const theme = useTheme();
    const open = useSelector((state) => state.drawer.isOpen)
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [openItem, setOpenItem] = useState(null);
    const [currentBar, setCurrentBar] = useState('/dashboard')
    const dispatch = useDispatch()

    // const handleToggle = (item) => {
    //     setOpenItem((prevOpenItem) => (prevOpenItem === item ? null : item));
    // };

    const handleToggle = (itemText) => {
        setOpenItem(openItem === itemText ? null : itemText);
    };

    const handleNavigate = (navigate) => {
        setCurrentBar(navigate)
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

    // Get username from localStorage
    const username = localStorage.getItem("username") ? JSON.parse(localStorage.getItem("username")) : "User";


    return (
        <>
            <Box sx={{ display: "flex" }}>
                <AppBar className="top-bar" position="fixed" open={open}>
                    <Toolbar>
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

                        {/* ============== profile ========= */}
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ marginLeft: "auto", p: 0 }}
                            >
                                <Avatar
                                    sx={{
                                        backgroundColor: "#9c27b0",
                                        transition: "transform 0.5s ease",
                                        "&:hover": { transform: "scale(1.2)" },
                                    }}
                                    alt={username}
                                    src="/static/images/avatar/2.jpg"
                                />
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
                        <Typography variant="h5">भारत</Typography>
                        <IconButton onClick={handleDrawerOpenClose}>
                            {theme.direction === "rtl" ? (
                                <ChevronRightIcon />
                            ) : (
                                <ChevronLeftIcon />
                            )}
                        </IconButton>
                    </DrawerHeader>

                    <List className="list-item">
                        {DrawerLists.map(({ text, icons, navigate, subItems }, ind) => (
                            <div key={ind}>
                                <ListItem
                                    disablePadding
                                    onClick={() => (subItems ? handleToggle(text) : handleNavigate(navigate))}
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
                                                    onClick={() => handleNavigate(navigate)}
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
                    <Typography variant="h6">JAI SHREE RAM</Typography>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
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
                        <Tickets />
                    }
                    {currentBar == '/consultationrequests' &&
                        <ConsultationRequests />
                    }

                </Box>
            </Box>

        </>
    );
}
