import { TextField,Box,Grid,Typography,Button } from "@mui/material";
import React from "react"
import { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom'
import { db, auth} from "./firebase-config";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged,signInWithPopup, sendPasswordResetEmail} from 'firebase/auth'
import {collection,addDoc, query, where, getDocs} from "firebase/firestore"
import Lottie from "react-lottie"
import { provider,provider2,provider3} from "./firebase-config";
import google from "./img/google.png"
import github from "./img/github.png"
import microsoft from "./img/microsoft.png"

const useStyles = makeStyles({
    google: {
        backgroundImage: `url(${google})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center center",
    },
    github: {
        backgroundImage: `url(${github})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center center",
    },
    microsoft: {
        backgroundImage: `url(${microsoft})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center center",
    },
})


export default function Registration() {
    const classes = useStyles();
    let heightAnimation = 450;
    const interaction = {
        loop:true,
        autoplay:true,
        animationData:require('./animations/interaction.json'),
        renderer:'svg',
    }

    const [state, setState] = useState({mobileView: false})
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const history = useHistory()
    const { mobileView } = state;

    useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 916
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
        window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then((result) => {
            const userID = result.user.reloadUserInfo.localId
            localStorage.setItem("userID",userID)
            alert("You have successfully logged in. Thank you.")
            history.push('/');
        }).catch(() => {
            alert("Sorry, it seems that you have already created your account using a different authentication service such as email, github or microsoft. Please sign in using the appropriate service. Thank you!")
        })
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then ((result) => {
            const userID = result.user.uid;
            const emailVerified = result.user.emailVerified
            localStorage.setItem("userID",userID)
            localStorage.setItem("emailVerified",emailVerified)
            history.push("/login-register/details")
        }).catch((error) => {
          alert("Sorry, it seems that you have already created your account using a different authentication service such as google, github or microsoft. Please sign in using the appropriate service. Thank you!")
        })
      }

      const signInWithGithub = () => {
        signInWithPopup(auth, provider2)
        .then ((result) => {
          const userID = result.user.uid;
          const emailVerified = result.user.emailVerified
          localStorage.setItem("userID",userID)
          localStorage.setItem("emailVerified",emailVerified)
          history.push("/login-register/details")
        }).catch((error) => {
          alert("Sorry, it seems that you have already created your account using a different authentication service such as email, google or microsoft. Please sign in using the appropriate service. Thank you!")
        })
      }
      
      const signInWithMicrosoft = () => {
        signInWithPopup(auth,provider3)
        .then ((result) => {
          const userID = result.user.uid;
          const emailVerified = result.user.emailVerified
          localStorage.setItem("userID",userID)
          localStorage.setItem("emailVerified",emailVerified)
          history.push("/login-register/details")
        }).catch((error) => {
          alert("Sorry, it seems that you have already created your account using a different authentication service such as email, github or google. Please sign in using the appropriate service. Thank you!")
        })
      }

    const submission = async (e) => {
        e.preventDefault()
        try{
            const users = await createUserWithEmailAndPassword(auth,email,password)
            const userID = users.user.uid;
            const emailVerified = users.user.emailVerified
            localStorage.setItem("userID",userID)
            localStorage.setItem("emailVerified",emailVerified)
            history.push("/login-register/details")
        } catch(error) {
            alert(error.message)
        }
    }

    const forgotPassword=()=>{
        if (email!='') {
            sendPasswordResetEmail(auth,email,{url:"https://confuzingcode.online/login-register"})
            .then ((result) => {
                console.log(result)
                alert("Please check your email. It may take upto 10 minutes. Sorry for the delay. Thank you.")
            }).catch((error) => {
                alert("Sorry, you dont have an account. Please register first. Thank you.")
              })
        } else {
            alert("Enter your email in the login section and click on forget password once again if you have forgotten your password. Thank you.")
        }

    }
    
    const displayDesktop=()=>{
        return (
            <Box sx={{height:"calc(100vh - 90px)",paddingLeft:"25px",paddingRight:"10px"}}>
                <Grid container style={{height:"100%",borderRadius:"30px"}} spacing={2}>
                    <Grid container item xs={7} display="flex" justifyContent="center" alignItems="center"> 
                        <Grid item style={{border:"5px solid black",padding:"10px",borderRadius:"30px"}}>
                            <Box component="form" sx={{margin:"30px"}} autoComplete='off' onSubmit={submission}>
                            <Typography align="center" variant="h6">If you're new here, please register below!</Typography>
                        <Grid container sx={{marginBottom:"20px",marginTop:"20px"}} columnSpacing={1}>
                                <Grid item sm={6} xs={12}>
                                    <TextField required label="Email" variant="outlined" color="primary" type="email" onChange={(e) => setEmail(e.target.value)}/>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField required label="Password" variant='outlined' color='primary' type="password" onChange={(e) => setPassword(e.target.value)}/>
                                </Grid>
                            </Grid>
                        
                        <Grid container direction="column" alignItems="center" justifyContent="center">
                            <Button variant="contained" type="submit" fullWidth sx={{marginTop:"0px"}}>Submit</Button>
                        </Grid>
                    </Box>
                    <Grid container direction="column" alignItems="center" justifyContent="center" sx={{marginTop:"20px"}}>
                        <Typography align="center" variant="h6"> Great to have you back, please login below! </Typography>
                    </Grid>
                    <Box component="form" sx={{margin:"20px"}} onSubmit={handleLogin} >
                        <Grid container sx={{marginBottom:"15px"}} columnSpacing={1}>
                            <Grid item sm={6} xs={12}> 
                                <TextField required label="Email" variant='outlined' color='primary' onChange={(e) => setEmail(e.target.value)}/>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField required label="Password" variant='outlined' color='primary' onChange={(e) => setPassword(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Box textAlign='center' sx={{marginTop:"5px",marginBottom:"10px"}}>
                            <Button type="submit" variant="contained" fullWidth >Login!</Button>
                        </Box>
                    </Box>
                    <Box sx={{margin:"20px"}}>
                    <Button onClick={()=>{forgotPassword()}} type="submit" variant="contained" fullWidth >Forgot Password!</Button>
                    </Box>
                    <Grid container direction="column" alignItems="center" justifyContent="center" sx={{marginTop:"20px"}}>
                        <Typography align="center" variant="h6">You can also register or login using the options below!</Typography>
                    </Grid>
                    <Box component="form" sx={{margin:"20px"}} >
                        <Grid container sx={{marginBottom:"15px"}} columnSpacing={1}>
                            <Grid item sm={4} xs={12} container display="flex" justifyContent="center" alignItems="center"> 
                                <Button onClick={signInWithGoogle} className={classes.google} style={{height:"40px",color:"white",borderRadius:"10px"}} variant="text"></Button>
                            </Grid>
                            <Grid item sm={4} xs={12} container display="flex" justifyContent="center" alignItems="center"> 
                                <Button onClick={signInWithGithub} className={classes.github} style={{height:"40px",color:"white",borderRadius:"10px"}} variant="text"></Button>
                            </Grid>
                            <Grid item sm={4} xs={12} container display="flex" justifyContent="center" alignItems="center"> 
                                <Button onClick={signInWithMicrosoft} className={classes.microsoft} style={{height:"40px",color:"white",borderRadius:"10px"}} variant="text"></Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <Grid container display="flex" justifyContent="center" alignItems="center">
                        
                        </Grid>

                        </Grid>
                    </Grid>
                    <Grid container xs={5} display="flex" justifyContent="center" alignItems="center" style={{borderRadius:"30px"}}>
                    <Grid item style={{height:"calc(100vh - 200px)"}}>
                    <Lottie options={interaction}></Lottie>
                    </Grid>
                    </Grid>
                </Grid>
            </Box>
        )
    }

    const displayMobile=()=>{
        return(
            <Grid container style={{padding:"10px"}}>
                <Grid container lg={6} xs={12} direction="column" alignItems="center" justifyContent="center" style={{border:"5px solid black",borderRadius:"30px"}}>
                    <Grid container direction="column" alignItems="center" justifyContent="center" sx={{marginTop:"20px"}}>
                    <Typography align="center" variant="h6">If you're new here, please register below!</Typography>
                    </Grid>
                    <Box component="form" sx={{marginTop:"30px",textAlign:"center"}}  onSubmit={submission}>
                        <Grid container sx={{marginBottom:"10px"}} columnSpacing={2}>
                                <Grid item sm={6} xs={12}>
                                    <TextField required label="Email" varient="outlined" color="primary" type="email" onChange={(e) => setEmail(e.target.value)} sx={{marginBottom:"10px"}}/>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField required label="Password" variant='outlined' color='primary' type="password" onChange={(e) => setPassword(e.target.value)}/>
                                </Grid>
                            </Grid>
                            <Box textAlign='center' sx={{margin:"10px"}}>
                            <Button variant="contained" type="submit" fullWidth>Register</Button>
                        </Box>
                    </Box>
                    <Grid container direction="column" alignItems="center" justifyContent="center" sx={{marginTop:"10px"}}>
                        <Typography align="center" variant="h6"> Great to have you back, please login below! </Typography>
                    </Grid>
                    <Box component="form" sx={{marginTop:"20px",textAlign:"center"}} onSubmit={handleLogin}>
                        <Grid container sx={{marginBottom:"20px"}} columnSpacing={2}>
                            <Grid item sm={6} xs={12}> 
                                <TextField required label="Email" variant='outlined' color='primary' sx={{marginBottom:"10px"}} onChange={(e) => setEmail(e.target.value)}/>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField required label="Password" variant='outlined' color='primary' onChange={(e) => setPassword(e.target.value)}/>
                            </Grid>
                        </Grid>
                        {/*<Box textAlign='center'>
                            <Button>Forgot Password!</Button>
                        </Box>*/}
                        <Box textAlign='center' sx={{margin:"10px"}}>
                            <Button variant="contained" type="submit" fullWidth>Login</Button>
                        </Box>
                        <Grid container direction="column" alignItems="center" justifyContent="center" sx={{marginTop:"20px"}}>
                        <Typography align="center" variant="h6">You can also register or login using the options below!</Typography>
                    </Grid>
                    <Box sx={{marginTop:"20px"}}>
                    <Button onClick={()=>{forgotPassword()}} type="submit" variant="contained" fullWidth >Forgot Password!</Button>
                    </Box>
                    <Box component="form" sx={{margin:"20px"}} >
                        <Grid container sx={{marginBottom:"15px"}} columnSpacing={1}>
                            <Grid item xs={4} container display="flex" justifyContent="center" alignItems="center"> 
                                <Button onClick={signInWithGoogle} className={classes.google} style={{height:"40px",color:"white",borderRadius:"10px"}} variant="text"></Button>
                            </Grid>
                            <Grid item  xs={4} container display="flex" justifyContent="center" alignItems="center"> 
                                <Button onClick={signInWithGithub} className={classes.github} style={{height:"40px",color:"white",borderRadius:"10px"}} variant="text"></Button>
                            </Grid>
                            <Grid item  xs={4} container display="flex" justifyContent="center" alignItems="center"> 
                                <Button onClick={signInWithMicrosoft} className={classes.microsoft} style={{height:"40px",color:"white",borderRadius:"10px"}} variant="text"></Button>
                            </Grid>
                        </Grid>
                    </Box>
                    </Box>
                </Grid>
            </Grid>
        )
    }

    return (
        <div>
            {mobileView ? displayMobile() : displayDesktop()}
        </div>  
    )
}