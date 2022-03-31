import { Grid, Typography,Box,InputLabel,MenuItem,FormControl,Select,TextField,Button} from "@mui/material";
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";
import React, {useEffect, useState} from "react";
import {db} from './firebase-config'

export default function Settings() {
    const usersRef = collection(db, "Users");
    const [name,setName] = useState('Data is yet to be provided.')
    const [grade,setGrade] = useState('Data is yet to be provided.')
    const [country,setCountry] = useState('Data is yet to be provided.')
    const [email,setEmail] = useState('Data is yet to be provided.')
    const [password,setPassword] = useState('Data is yet to be provided.')
    const [phoneNumber,setPhoneNumber] = useState('Data is yet to be provided.')
    const [issue,setIssue] = useState(null)
    const [content,setContent] = useState(null)
    const [id,setID] = useState('')
    const [online,setOnline] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("userID") === "null" || localStorage.getItem("userID") == null) {
            setOnline(false)
        } 
    }, []);

    const q = query(usersRef, where("userID", "==", localStorage.getItem("userID")));
    (async function() {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            
        // doc.data() is never undefined for query doc snapshots
        setName(doc.data().name)
        setGrade(doc.data().grade)
        setCountry(doc.data().country)
        setPhoneNumber(doc.data().phoneNumber)
        setID(doc.id)
        });
      })();

    const handleChange = (e) => {
        setIssue(e.target.value);
    }

    const getDataFromDb = async () => {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            
        // doc.data() is never undefined for query doc snapshots
        setName(doc.data().name)
        setGrade(doc.data().grade)
        setCountry(doc.data().country)
        setPhoneNumber(doc.data().phoneNumber)
        setID(doc.id)
        });
      };


    const handleChange2 = (e) => {
        setContent(e.target.value)
    }

    const updateNow = () => {
        if (issue != null && content != null) {
            const updateRef = doc(db, "Users", id);
            if (issue==="name") {
                updateDoc(updateRef, {
                    name:content
                });
            } else if (issue==="grade") {
                if (content < 6) {
                    alert("As stated in the rules and regulations, students only in grade 6 and above are eligible to register. We are really sorry and we hope to see you in the coming years. Thank you.")
                } else {
                    updateDoc(updateRef, {
                        grade:Number(content)
                    });
                }  
            } else if (issue==="country") {
                updateDoc(updateRef, {
                    country:content
                });
            } else if (issue==="phoneNumber") {
                updateDoc(updateRef, {
                    phoneNumber:content
                });
            }
        {getDataFromDb()}  
        }
         
    }

    const loggedIn=()=>{
        return (
            <Box sx={{height:"calc(100vh - 100px)",margin:"10px"}}>
            <Grid container direction="column" display="flex" justifyContent="center" alignItems="center" style={{height:"100%"}}>
                <Box sx={{backgroundColor:"#f7f7f7",padding:"20px",borderRadius:"30px"}}>
                    <Typography variant="h3" sx={{margin:"10px"}}>Your Information</Typography>
                    <Typography sx={{margin:"10px"}} variant="h6">Name: {name}</Typography>
                    <Typography sx={{margin:"10px"}} variant="h6">Grade: {grade}</Typography>
                    <Typography sx={{margin:"10px"}}variant="h6">Country: {country}</Typography>
                    <Typography sx={{margin:"10px"}} variant="h6">Phone number: {phoneNumber}</Typography>
                    <Box>
                        <FormControl fullWidth sx={{marginTop:"10px"}}>
                            <InputLabel>Credential's you would like to update:</InputLabel>
                            <Select onChange={handleChange} label="Credential's you would like to update:">
                                <MenuItem value={null}></MenuItem>
                                <MenuItem value={"name"}>Name</MenuItem>
                                <MenuItem value={"grade"}>Grade</MenuItem>
                                <MenuItem value={"country"}>Country</MenuItem>
                                <MenuItem value={"phoneNumber"}>Phone number</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <TextField fullWidth sx={{marginTop:"10px"}} required label="What would like to change it to?" variant="outlined" color="primary" type="text" onChange={handleChange2}/>
                    <Button onClick={updateNow} fullWidth variant="contained" type="submit" sx={{marginTop:"10px"}}>Change</Button>
                </Box>
            </Grid>
        </Box>
        )
        }

    const loggedOut = () => {
        return (
            <Box sx={{height:"calc(100vh - 100px)",margin:"5px",width:"99.5%"}}>
            <Grid container display="flex" justifyContent="center" alignItems="center" style={{height:"100%"}}>
                <Typography variant="h6">Please login in using the login/register page to veiw this page.</Typography>
            </Grid>
        </Box>
        )
    }

    return (
        <div>
            {online ? loggedIn() : loggedOut()}
        </div> 
    )
}