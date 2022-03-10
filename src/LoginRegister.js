import { TextField,Box,Grid,Typography,Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react"
import { useState,useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { db, auth} from "./firebase-config";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {collection,addDoc, query, where, getDocs} from "firebase/firestore"
import {blue} from '@mui/material/colors';
const color = blue[300]


export default function Registration() {

    const [state, setState] = useState({mobileView: false})
    const [fName,setFName] = useState('')
    const [lName,setLName] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const [country,setCountry] = useState('')
    const [school,setSchool] = useState('')
    const [grade,setGrade] = useState(0)
    const [letter,setLetter] = useState('')
    const [gradeError,setGradeError] = useState(false)
    const usersCollectionRef = collection(db, "Users");
    const history = useHistory()
    const { mobileView } = state;

    const createUser = async () => {
        await addDoc(usersCollectionRef, { country: country, grade: Number(grade),email:email,password:password});
      };

    useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 1000
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
        window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
            .then((cred) => {
                alert("You have been logged in.")
                history.push('/');

            })
            .catch((err) => {
                alert(err.message)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setGradeError(false)
        if (grade < 6) {
            setGradeError(true)
            alert("As stated in the rules and regulations, students in grade 6 and above are eligible to register.")
        }
        else if (gradeError===false) {
            createUserWithEmailAndPassword(auth,email,password)
                .then(cred => {
                    createUser()
                    history.push('/');
                    alert("Thank you for registering, your account has been created. You will soon receive an email regarding your registration.");
                })
                .catch(err => {
                    alert(err.message)
                })
        }
    }
    
    const displayDesktop=()=>{
        return (
            <Grid container>
                <Grid container md={6} xs={12} direction="column" alignItems="center" justifyContent="center">
                    <Grid container direction="column" alignItems="center" justifyContent="center" sx={{marginTop:"10px"}}>
                        <Typography align="center" variant="h6">If you're new here, please register below!</Typography>
                    </Grid>
                    <Box component="form" sx={{marginTop:"15px"}} autoComplete='off' onSubmit={handleSubmit}>
                        <Grid container sx={{marginBottom:"20px"}} columnSpacing={2}>
                                <Grid item sm={6} xs={12}>
                                    <TextField required label="Email" varient="outlined" color="primary" type="email" onChange={(e) => setEmail(e.target.value)}/>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField required label="Password" variant='outlined' color='primary' type="password" onChange={(e) => setPassword(e.target.value)}/>
                                </Grid>
                            </Grid>
                        <Grid container sx={{marginBottom:"20px"}} columnSpacing={2}>
                            <Grid item sm={6} xs={12}>
                                <TextField required label="Grade" variant='outlined' color='primary' type="number" onChange={(e) => setGrade(e.target.value)} error={gradeError}/>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField label="Country" varient="outlined" color="primary" onChange={(e) => setCountry(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" alignItems="center" justifyContent="center">
                            <Button variant="contained" type="submit" sx={{marginTop:"10px"}}>Submit</Button>
                        </Grid>
                    </Box>
                    <Grid container direction="column" alignItems="center" justifyContent="center" sx={{marginTop:"20px"}}>
                        <Typography align="center" variant="h6"> Great to have you back, please login below! </Typography>
                    </Grid>
                    <Box component="form" sx={{marginTop:"20px"}} onSubmit={handleLogin} >
                        <Grid container sx={{marginBottom:"15px"}} columnSpacing={2}>
                            <Grid item sm={6} xs={12}> 
                                <TextField required label="Email" variant='outlined' color='primary' onChange={(e) => setEmail(e.target.value)}/>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField required label="Password" variant='outlined' color='primary' onChange={(e) => setPassword(e.target.value)}/>
                            </Grid>
                        </Grid>
                        {/*<Box textAlign='center'>
                            <Button>Forgot Password!</Button>
                        </Box>*/}
                        <Box textAlign='center' sx={{marginTop:"5px",marginBottom:0}}>
                            <Button type="submit" variant="contained">Login!</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid container sm={6} xs={12} sx={{borderLeft:"2px solid black",marginBottom:"10px"}} > 
                    <Box sx={{marginRight:"10px",marginLeft:"10px",width:"100%"}} bgcolor={color}>
                        <Grid container direction="column" alignItems="center" justifyContent="center" sx={{width:"100%",minHeight:"610px"}}>
                            <Typography variant="h1" sx={{paddingLeft:"15px",color:"white"}}>Thank You For Being Here With Us Today!</Typography> 
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        )
    }

    const displayMobile=()=>{
        return(
            <Grid container>
                <Grid container lg={6} xs={12} direction="column" alignItems="center" justifyContent="center">
                    <Grid container direction="column" alignItems="center" justifyContent="center" sx={{marginTop:"10px"}}>
                    <Typography align="center" variant="h6">If you're new here, please register below!</Typography>
                    </Grid>
                    <Box component="form" sx={{marginTop:"30px",textAlign:"center"}} onSubmit={handleSubmit} >
                        <Grid container sx={{marginBottom:"10px"}} columnSpacing={2}>
                                <Grid item sm={6} xs={12}>
                                    <TextField required label="Email" varient="outlined" color="primary" type="email" onChange={(e) => setEmail(e.target.value)} sx={{marginBottom:"10px"}}/>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField required label="Password" variant='outlined' color='primary' type="password" onChange={(e) => setPassword(e.target.value)}/>
                                </Grid>
                            </Grid>
                        <Grid container sx={{marginBottom:"20px"}} columnSpacing={2}>
                            <Grid item sm={6} xs={12}>
                                <TextField required label="Grade" variant='outlined' color='primary' type="number" onChange={(e) => setGrade(e.target.value)} error={gradeError} sx={{marginBottom:"10px"}}/>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField label="Country" varient="outlined" color="primary" onChange={(e) => setCountry(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" alignItems="center" justifyContent="center">
                            <Button variant="contained" type="submit" sx={{marginTop:"10px"}}>Submit</Button>
                        </Grid>
                    </Box>
                    <Grid container direction="column" alignItems="center" justifyContent="center" sx={{marginTop:"20px"}}>
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
                        <Box textAlign='center' sx={{marginTop:"10px",marginBottom:"10px"}}>
                            <Button variant="contained" type="submit">Login</Button>
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