import { Grid, Typography,Box,TextField,Button} from "@mui/material";
import { useState,useEffect } from "react";
import {collection,addDoc, query, where, getDocs} from "firebase/firestore"
import { db, auth} from "./firebase-config";
import { useHistory } from 'react-router-dom'

export default function Details() {
    const [country,setCountry] = useState('')
    const [grade,setGrade] = useState(0)
    const [gradeError,setGradeError] = useState(false)
    const [name,setName] = useState('');
    const [phoneNumber,setPhoneNumber] = useState(0);
    const [state, setState] = useState({mobileView: false})
    const { mobileView } = state;
    const usersCollectionRef = collection(db, "Users");
    const history = useHistory()

    const submission_full = (e) => {
        e.preventDefault()
        setGradeError(false)
        if (grade < 6) {
            setGradeError(true)
            alert("As stated in the rules and regulations, students only in grade 6 and above are eligible to register. We are really sorry and we hope to see you in the coming years. Thank you.")
        } else if (gradeError===false) {
            createUser()
            alert("You have successfully register. We will soon send out a confirmation email and will add you to our WhatsApp group to update you with our upcoming events. Thank you.")
            history.push("/")
        }
    }

    const createUser = async () => {
        await addDoc(usersCollectionRef, { country: country, grade: Number(grade),name:name,phoneNumber:phoneNumber,userID:localStorage.getItem("userID")});
    }

    useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 600
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
        window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    const displayDesktop=()=>{
        return (
            <Box sx={{height:"calc(100vh - 100px)",margin:"5px",width:"99.5%"}}>
            <Grid container display="flex" direction="column" justifyContent="center" alignItems="center" style={{height:"100%"}}>
                <Typography variant="h3">Thank you for registering!</Typography>
                <br/>
                <Typography variant="h6">Please fill in the following details to complete your profile.</Typography>
                <Box component="form" autoComplete='off' onSubmit={submission_full}>
                    <Grid container display="flex" justifyContent="center" alignItems="center" sx={{marginBottom:"20px",marginTop:"20px"}} columnSpacing={2}>
                        <Grid item sm={6} xs={12}>
                            <TextField required label="Name" variant="outlined" color="primary" type="text" onChange={(e) => setName(e.target.value)}/>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField required label="Country" variant='outlined' color='primary' type="text" onChange={(e) => setCountry(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container display="flex" justifyContent="center" alignItems="center" sx={{marginBottom:"20px",marginTop:"20px"}} columnSpacing={2}>
                        <Grid item sm={6} xs={12}>
                            <TextField required label="Grade" variant="outlined" color="primary" type="number" onChange={(e) => setGrade(e.target.value)} error={gradeError}/>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField required label="Phone number" variant='outlined' color='primary' type="number" onChange={(e) => setPhoneNumber(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" alignItems="center" justifyContent="center">
                            <Button variant="contained" type="submit" sx={{marginTop:"0px"}}>Register</Button>
                        </Grid>
                </Box>
            </Grid>
        </Box>
        )
        }

    const displayMobile=()=>{
        return(
<Box sx={{margin:"5px",padding:"20px",width:"99.5%"}}>
            <Grid container display="flex" direction="row" justifyContent="center" alignItems="center" style={{height:"100%"}}>
                <Typography variant="h4">Thank you for registering!</Typography>
                <br/>
                <Typography variant="h6">Please fill in the following details to complete your profile.</Typography>
                <Box component="form" autoComplete='off' onSubmit={submission_full}>
                    <Grid container display="flex" direction="column" justifyContent="center" alignItems="center" sx={{marginBottom:"20px",marginTop:"20px"}} columnSpacing={2}>
                        <Grid item sm={6} xs={12}>
                            <TextField required label="Name" variant="outlined" color="primary" type="text" sx={{marginBottom:"10px"}} onChange={(e) => setName(e.target.value)}/>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField required label="Country" variant='outlined' color='primary' type="text" onChange={(e) => setCountry(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container display="flex" direction="column" justifyContent="center" alignItems="center" sx={{marginBottom:"20px",marginTop:"20px"}} columnSpacing={2}>
                        <Grid item sm={6} xs={12}>
                            <TextField required label="Grade" variant="outlined" color="primary" type="number" sx={{marginBottom:"10px"}} onChange={(e) => setGrade(e.target.value)} error={gradeError}/>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField required label="Phone number" variant='outlined' color='primary' type="number" onChange={(e) => setPhoneNumber(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" alignItems="center" justifyContent="center">
                            <Button variant="contained" type="submit" sx={{marginTop:"0px"}}>Register</Button>
                        </Grid>
                </Box>
            </Grid>
        </Box>
        )}

    return (
        <div>
        {mobileView ? displayMobile() : displayDesktop()}
    </div>
    )
}