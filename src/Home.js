import {Grid, Box,Typography,Button} from "@material-ui/core";
import { Link} from "react-router-dom";
import { useState,useEffect } from "react";
import { deepOrange,blue,red,purple,pink} from '@mui/material/colors';
const color1 = deepOrange[500];
const color2 = red[700];
const color3 = blue[500];
const color4 = purple[600]
const color5 = red[50]
const color6 = pink[50]

export default function Home() {
    const [state, setState] = useState({mobileView: false})
    const { mobileView} = state;
    useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 1200
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
        return(
            <Box sx={{height:"auto"}}>
                <Box sx={{margin:"5px",height:"auto%",width:"99.5%"}}>
                    <Grid container>
                        <Grid container lg={6} md={12}>
                            <Box bgcolor={color5}>
                                <Typography align="center" variant="h1">ConfuZing Code</Typography>
                                <Box sx={{padding:"35px"}}>
                                    <Typography> A worldwide coding competition like non other with fun, creative and mind-boggling questions to test your logical and algorithmic thinking skills. One of the only in the world for primary and highschool student's, we will guide you through this amazing journey with the help of personalised online lectures and resources such as games and notes. So that you can learn anytime, anywhere, whereever you are.</Typography>
                                </Box>
                                <Grid container justify="center">
                                    <Link to="/registration" style={{textDecoration:"none"}}>
                                        <Button variant="contained" color="primary" style={{marginBottom:"10px"}}>Login or Register</Button>
                                    </Link>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid container lg={6} md={12} justify="center">
                        <Typography variant="h1">Prizes</Typography>
                            <Box sx={{padding:"35px"}}>
                                <Typography > To award you for your incredible performances in the competition, the team will be presenting the 1st, 2nd and 3rd ranks with a cash award of SGD 30, SGD 20, and SGD 10 respectively. Top 20 contestants will also receive a certificate of distinction and all participants will receive a certificate of participation. The top candidate from each country will also be receiving a certicate of appreciation.</Typography>
                            </Box>
                            <Grid container justify="center">
                        <Link to="/rules" style={{textDecoration:"none"}}>
                            <Button variant="contained" color="primary" style={{marginBottom:"10px"}}>Rules and Regulations</Button>
                        </Link>
                        </Grid>
                        </Grid>
                    </Grid>
                </Box>   
                <Box sx={{margin:"5px",height:"auto%",width:"99.5%"}}>
                    <Grid container>
                    <Grid container lg={6} md={12} justify="center">
                        <Typography variant="h1">First time!</Typography>
                            <Box sx={{padding:"25px"}}>
                                <Typography >We believe no one should ever not have the chance to participate in a coding competition, just because they dont know programming. So, we decided to start our own lectures and classes for you, accompanied with many online resources so that you dont feel left out in this rapidly evolving world. We promise you, after you take these wonderful and interactive class, you will not only be smartest in your class but also smarter than your all your computer science teachers.</Typography>
                            </Box>
                            <Grid container justify="center">
                        <Link to="/notes" style={{textDecoration:"none"}}>
                            <Button variant="contained" color="primary" style={{marginBottom:"10px"}}>Resources</Button>
                        </Link>
                        </Grid>
                        </Grid>
                        <Grid container lg={6} md={12}>
                            <Box bgcolor={color5}>
                                <Typography align="center" variant="h1">Regulations</Typography>
                                <Box sx={{padding:"35px"}}>
                                    <Typography>Unfortunately, we are really sorry to announce that only students aged 12 (grade 6 and above) and above can be a part of the competition. The competition will be held on 16th July 2022 from 10:00 am to 1:00 am. We allow a variety of programming languages and ensure that all participants from all grades have a fair shot at scoring points. More details on the competition can be found on the rules and regulations page. </Typography>
                                </Box>
                                <Grid container justify="center">
                            <Link to="/rules" style={{textDecoration:"none"}}>
                                <Button variant="contained" color="primary" style={{marginBottom:"10px"}}>Rules and Regulations</Button>
                            </Link>
                        </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box> 
            </Box>
        )
    }
    
    const displayMobile=()=>{
        return(
            <div>
                <Box cotained display="flex" justifyContent="center" alignItems="center">
                    <Box sx={{width:"95%"}} bgcolor={color1} borderRadius="2%">
                        <Typography variant="h3" style={{color: 'white', padding:"10px"}}>Welcome To ConfuZing Code</Typography>
                        <Typography style={{color: 'white', padding:"10px"}}>A worldwide coding competition like non other with fun, creative and mind-boggling questions to test your logical and algorithmic thinking skills. One of the only in the world for primary and highschool student's, we will guide you through this amazing journey with the help of personalised online lectures and resources such as games and notes. So that you can learn anytime, anywhere, whereever you are.</Typography>
                        <Grid container justify="center">
                        <Link to="/registration" style={{textDecoration:"none"}}>
                            <Button variant="contained" color="primary" style={{marginBottom:"10px"}}>Login or Register</Button>
                        </Link>
                        </Grid>
                    </Box>
                </Box>
                <Box cotained display="flex" justifyContent="center" alignItems="center" sx={{marginTop:"10px"}}>
                    <Box sx={{width:"95%"}} bgcolor={color3} borderRadius="2%">
                        <Typography variant="h3" style={{color: 'white', padding:"10px"}}>Prizes</Typography>
                        <Typography style={{color: 'white', padding:"10px"}}>To award you for your incredible performances in the competition, the team will be presenting the 1st, 2nd and 3rd ranks with a cash award of SGD 30, SGD 20, and SGD 10 respectively. Top 20 contestants will also receive a certificate of distinction and all participants will receive a certificate of participation. The top candidate from each country will also be receiving a certicate of appreciation.</Typography>
                        <Grid container justify="center">
                        <Link to="/rules" style={{textDecoration:"none"}}>
                            <Button variant="contained" color="primary" style={{marginBottom:"10px"}}>Rules and Regulations</Button>
                        </Link>
                        </Grid>
                    </Box>  
                </Box>
                <Box cotained display="flex" justifyContent="center" alignItems="center" sx={{marginTop:"10px"}}>
                    <Box sx={{width:"95%",}} bgcolor={color2} borderRadius="2%">
                        <Typography variant="h3" style={{color: 'white', padding:"10px"}}>No Prior Coding Experience Required</Typography>
                        <Typography style={{color: 'white', padding:"10px"}}>We believe no one should ever not have the chance to participate in a coding competition, just because they dont know programming. So, we decided to start our own lectures and classes for you, accompanied with many online resources so that you dont feel left out in this rapidly evolving world. We promise you, after you take these wonderful and interactive class, you will not only be smartest in your class but also smarter than your all your computer science teachers.</Typography>
                        <Grid container justify="center">
                        <Link to="/notes" style={{textDecoration:"none"}}>
                            <Button variant="contained" color="primary" style={{marginBottom:"10px"}}>Resources</Button>
                        </Link>
                        </Grid>
                    </Box>
                </Box>
                <Box cotained display="flex" justifyContent="center" alignItems="center" sx={{marginTop:"10px",marginBottom:"10px"}}>
                    <Box sx={{width:"95%",}} bgcolor={color4} borderRadius="2%">
                        <Typography variant="h3" style={{color: 'white', padding:"10px"}}>Rules and Regulations</Typography>
                        <Typography style={{color: 'white', padding:"10px"}}>Unfortunately, we are really sorry to announce that only students aged 12 (grade 6 and above) and above can be a part of the competition. The competition will be held on 16th July 2022 from 10:00 am to 1:00 am. We allow a variety of programming languages and ensure that all participants from all grades have a fair shot at scoring points. More details on the competition can be found on the rules and regulations page. </Typography>
                        <Grid container justify="center">
                            <Link to="/rules" style={{textDecoration:"none"}}>
                                <Button variant="contained" color="primary" style={{marginBottom:"10px"}}>Rules and Regulations</Button>
                            </Link>
                        </Grid>
                    </Box>
                </Box>
            </div>
        )
    }

    return (
        <div>
            {mobileView ? displayMobile() : displayDesktop()}
        </div> 
    )
}