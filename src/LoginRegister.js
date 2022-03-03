import { TextField,Box,Grid,Typography,Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react"
import { useState,useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { db } from "./firebase-config";
import {collection,addDoc} from "firebase/firestore"
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
    const [gradeError,setGradeError] = useState(false)
    const usersCollectionRef = collection(db, "Users");
    const history = useHistory()
    const { mobileView} = state;

    const createUser = async () => {
        await addDoc(usersCollectionRef, { firstName: fName, country: country, grade: Number(grade),email:email,lastName:lName,password:password,school:school,username:username });
      };

    useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 900
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
        window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    const handleSubmit = (e) => {
        setGradeError(false)
        e.preventDefault()
        if(grade<6){
            setGradeError(true)
        } else if (gradeError===false) {
            createUser()
            history.push('/');
        }
    }
    
    const displayDesktop=()=>{
        return (
            <Grid container>
                <Grid container md={6} xs={12} direction="column" alignItems="center" justifyContent="center">
                    <Grid container direction="column" alignItems="center" justifyContent="center" sx={{marginTop:"10px"}}>
                        If you'r new here, please register below!
                    </Grid>
                    <Box component="form" sx={{marginTop:"30px"}} autoComplete='off' onSubmit={handleSubmit}>
                        <Grid container sx={{marginBottom:"20px"}} columnSpacing={2}>
                            <Grid item sm={6} xs={12}> 
                                <TextField required label="First Name" variant='outlined' color='primary' onChange={(e) => setFName(e.target.value)}/>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField required label="Last Name" variant='outlined' color='primary' onChange={(e) => setLName(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid container sx={{marginBottom:"20px"}} columnSpacing={2}>
                                <Grid item sm={6} xs={12}>
                                    <TextField required label="Username" variant='outlined' color='primary'onChange={(e) => setUsername(e.target.value)}/>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField required label="Password" variant='outlined' color='primary' type="password" onChange={(e) => setPassword(e.target.value)}/>
                                </Grid>
                            </Grid>
                        <Grid container sx={{marginBottom:"20px"}} columnSpacing={2}>
                            <Grid item sm={6} xs={12}>
                                <TextField required label="Email" varient="outlined" color="primary" type="email" onChange={(e) => setEmail(e.target.value)}/>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField label="Country" varient="outlined" color="primary" onChange={(e) => setCountry(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid container sx={{marginBottom:"20px"}} columnSpacing={2}>
                            <Grid item sm={6} xs={12}>
                                <TextField required label="School" variant='outlined' color='primary' onChange={(e) => setSchool(e.target.value)}/>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField required label="Grade" variant='outlined' color='primary' type="number" onChange={(e) => setGrade(e.target.value)} error={gradeError}/>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" alignItems="center" justifyContent="center">
                            <Button variant="contained" type="submit" sx={{marginTop:"10px"}}>Submit</Button>
                        </Grid>
                    </Box>
                    <Grid container direction="column" alignItems="center" justifyContent="center" sx={{marginTop:"20px"}}>
                        Great to have you back, please login below!
                    </Grid>
                    <Box component="form" sx={{marginTop:"20px"}} >
                        <Grid container sx={{marginBottom:"15px"}} columnSpacing={2}>
                            <Grid item sm={6} xs={12}> 
                                <TextField required label="Username" variant='outlined' color='primary'/>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField required label="Password" variant='outlined' color='primary'/>
                            </Grid>
                        </Grid>
                        <Box textAlign='center'>
                            <Button>Forgot Username or Password!</Button>
                        </Box>
                        <Box textAlign='center' sx={{marginTop:"5px",marginBottom:0}}>
                            <Button type="submit" variant="contained">Login!</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid container sm={6} xs={12} sx={{borderLeft:"2px solid black",marginBottom:"10px"}} > 
                    <Box sx={{marginRight:"10px",marginLeft:"10px",width:"100%"}} bgcolor={color}>
                        <Grid container direction="column" alignItems="center" justifyContent="center" sx={{width:"100%",minHeight:"610px"}}>
                            <Typography>Thank You For Being Here With Us Today!</Typography> 
                            <br></br>
                            <Typography>We hope you have an amazing experience!</Typography> 
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        )
    }

    const displayMobile=()=>{
        return(
            <Grid container>
                <Grid container md={6} xs={12} direction="column" alignItems="center" justifyContent="center">
                    <Grid container direction="column" alignItems="center" justifyContent="center" sx={{marginTop:"10px"}}>
                        If you'r new here, please register below!
                    </Grid>
                    <Box component="form" sx={{marginTop:"30px",textAlign:"center"}} onSubmit={handleSubmit} >
                        <Grid container sx={{marginBottom:"20px"}} columnSpacing={2}>
                            <Grid item sm={6} xs={12}> 
                                <TextField required label="First Name" variant='outlined' color='primary' onChange={(e) => setFName(e.target.value)} sx={{marginBottom:"10px"}}/>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField required label="Last Name" variant='outlined' color='primary' onChange={(e) => setLName(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid container sx={{marginBottom:"20px"}} columnSpacing={2}>
                                <Grid item sm={6} xs={12}>
                                    <TextField required label="Username" variant='outlined' color='primary' onChange={(e) => setUsername(e.target.value)} sx={{marginBottom:"10px"}}/>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField required label="Password" variant='outlined' color='primary' type="password" onChange={(e) => setPassword(e.target.value)}/>
                                </Grid>
                            </Grid>
                        <Grid container sx={{marginBottom:"20px"}} columnSpacing={2}>
                            <Grid item sm={6} xs={12}>
                                <TextField required label="Email" varient="outlined" color="primary" type="email" onChange={(e) => setEmail(e.target.value)} sx={{marginBottom:"10px"}}/>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField label="Country" varient="outlined" color="primary" onChange={(e) => setCountry(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid container sx={{marginBottom:"20px"}} columnSpacing={2}>
                            <Grid item sm={6} xs={12}>
                                <TextField required label="School" variant='outlined' color='primary' onChange={(e) => setSchool(e.target.value)} sx={{marginBottom:"10px"}}/>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField required label="Grade" variant='outlined' color='primary' type="number" onChange={(e) => setGrade(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" alignItems="center" justifyContent="center">
                            <Button variant="contained" type="submit" sx={{marginTop:"10px"}}>Submit</Button>
                        </Grid>
                    </Box>
                    <Grid container direction="column" alignItems="center" justifyContent="center" sx={{marginTop:"20px"}}>
                        Great to have you back, please login below!
                    </Grid>
                    <Box component="form" sx={{marginTop:"20px",textAlign:"center"}} >
                        <Grid container sx={{marginBottom:"20px"}} columnSpacing={2}>
                            <Grid item sm={6} xs={12}> 
                                <TextField required label="Username" variant='outlined' color='primary' sx={{marginBottom:"10px"}}/>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField required label="Password" variant='outlined' color='primary'/>
                            </Grid>
                        </Grid>
                        <Box textAlign='center'>
                            <Button>Forgot Username or Password!</Button>
                        </Box>
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