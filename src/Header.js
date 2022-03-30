import { Divider, ListItemIcon, Tooltip, Avatar, AppBar, Toolbar, makeStyles, Button, IconButton, Drawer, MenuItem, MenuList, Menu} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import React, {useState,useEffect} from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import NotesIcon from '@mui/icons-material/Notes';
import { collection, query, where, getDocs} from "firebase/firestore";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { signOut} from "firebase/auth";
import {auth,db} from './firebase-config'

const headersData = [
    {
        label: "About us",
        href: "/aboutUs",
    },
    {
        label: "Resources",
        href: "/resources",
    },
    {
        label: "Login/Register",
        href: "/login-register",
    },
    {
        label: "Rules",
        href: "/rules",
    },
];

const headersDataMob = [
    {
        label: "Home",
        href: "/",
        symbol: <HomeIcon />
    },
    {
        label: "About us",
        href: "/aboutUs",
        symbol: <InfoIcon />
    },
    {
        label: "Login/Register",
        href: "/login-register",
        symbol: <PersonIcon />
    },
    {
        label: "Resources",
        href: "/resources",
        symbol: <NotesIcon />
    },
    {
        label: "Rules",
        href: "/rules",
        symbol: <MenuBookIcon />
    },
];

const useStyles = makeStyles(()=> ({
    header: {
        backgroundColor:"#400CCC",
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
        fontSize: "20px",
    },
    menuButton: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px"
    },
    toolbar: {
        display:"flex",
    },
    drawerContainer: {
        padding: "20px 30px",
    }, 
    page: {
        marginTop:'90px',
    },
    toolbarName: {
        marginRight:"auto",
    },
    toolbarAvatar: {
        marginLeft: "38px",
    },
    avatarMobile: {
        marginRight:"auto",
    }
}))

export default function Header( {children} ) {
    const history = useHistory()

    const [user,setUser] = useState({});
    const [letter, setLetter] = useState(null)
    const [anchorEl,setAnchorEl] = useState(null);
    const usersRef = collection(db, "Users");
    const open = Boolean(anchorEl);
    const avatarClick=(event)=>{
        setAnchorEl(event.currentTarget);
    }
    const handleClose=()=>{
        setAnchorEl(null);
    }

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });
    
    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 950
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
        window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);
    

    const {header, logo, menuButton, toolbar, drawerContainer, page, toolbarName, toolbarAvatar, avatarMobile} = useStyles();

    const getMenuButtons=()=>{
        return headersData.map(({label,href})=>{
            return (
                <Button {...{key:label, color:"inherit",to:href,component:Link,className:menuButton}}>{label}</Button>
            )
        })
    }
 
    const redirect=()=>{
        return(
            history.push('/')
        )
    }

    const name=()=>{
        return (
            <Button onClick={()=>{redirect()}} className={logo}>ConfuZing Code</Button>
        )
    }

    const handleLogout = async () => {
        await signOut(auth)
        .then(() => {
            localStorage.setItem("userID",null)
            alert("You have been logged out!")
            window.location.reload(true)
        })
        .catch((err) => {
            alert("err.message")
        })

    }
    const q = query(usersRef, where("userID", "==", localStorage.getItem("userID")));

    (async function() {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setLetter(doc.data().name[0]);
        });
      })();

    const avatarDisplay=()=>{
        return (
            <Avatar>{letter}</Avatar>
        )
    }

    const account=()=>{
        return (
            <div>
                <Tooltip title="Account settings">
                    <IconButton 
                        onClick={avatarClick} 
                        className={toolbarAvatar} 
                        aria-controls={open ? 'account-menu' : undefined} 
                        aria-haspopup="true" 
                        aria-expanded={open ? 'true' : undefined}
                        color="inherit"
                        >
                        <div>{avatarDisplay()}</div>  
                    </IconButton>
                </Tooltip>
                <Menu
                    anchorEl={anchorEl}
                    id = "menu-appbar"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleLogout}>
                        <Link to="#" style={{textDecoration:"none"}}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </Link>
                    </MenuItem>
          
                    <MenuItem>
                        <Link to="/settings" style={{textDecoration:"none"}}>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
        )
    }

    const displayDesktop=()=>{
        return (
        <Toolbar className={toolbar}>
            <div className={toolbarName}>{name()}</div>
            <div>{getMenuButtons()}</div>
            <div>{account()}</div>
        </Toolbar>
        )
    }

    const displayMobile = () => {

        const handleDrawerOpen=()=>{
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        }

        const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));

        const getDrawerChoices=()=>{
            return headersDataMob.map(({label, href, symbol}) => {
                return(
                    <MenuList {...{component: Link,to: href,color: "inherit",style: { textDecoration: "none" }, key: label,}}>
                        <MenuItem><ListItemIcon>{symbol}</ListItemIcon>{label}</MenuItem>
                        <Divider />
                    </MenuList>
                );
            });
        };

        return (
            <Toolbar>
                <IconButton {...{edge: "start", color: "inherit", "aria-label": "menu", "aria-haspopup": "true", onClick:handleDrawerOpen,}}>
                    <MenuIcon />
                </IconButton>
                <Drawer {...{anchor:"left",open:drawerOpen,onClose:handleDrawerClose}}>
                    <div className={drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>
                <div className={toolbarName}>{name()}</div>
                <div>{account()}</div>
            </Toolbar>
            
        );
      };

    return (
        <div>
            <header>
            <AppBar className={header}>
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
            </header>

            <div className={page}>
                {children}
            </div>
        </div>
    );
}