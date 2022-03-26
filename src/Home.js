import {Grid, Box,Typography,Button} from "@material-ui/core";
import Lottie from "react-lottie"
import { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red} from '@mui/material/colors';
import prizes from './img/Prizes.jpg'
import logo from "./img/Logo.jpg"
import logo2 from "./img/Logo2.jpg"
import question from "./img/Question.png"
import rules from "./img/Rules.jpg"
const color5 = red[50]

const useStyles = makeStyles({
    logo: {
        backgroundImage: `url(${logo})`,
        backgroundSize:"100%",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center center",
        height:"500px",
        margin:"10px",
        borderRadius:"20px"
    },
    prizes: {
        backgroundImage: `url(${prizes})`,
        backgroundSize:"100%",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center center",
        borderRadius:"20px"
    },
    question: {
        backgroundImage: `url(${question})`,
        backgroundSize:"100%",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center center",
        borderRadius:"20px"
    },
    rules: {
        backgroundImage: `url(${rules})`,
        backgroundSize:"60%",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center center",
        borderRadius:"20px"
    },
    logo2: {
        backgroundImage: `url(${logo2})`,
        backgroundSize:"100%",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center center",
        height:"210px",
        margin:"10px",
        borderRadius:"20px"
    },
})

export default function Home() {
    const classes = useStyles();
    const question = {
        loop:true,
        autoplay:true,
        animationData:require('./animations/question.json'),
        renderer:'svg',
    }
    const rules = {
        loop:true,
        autoplay:true,
        animationData:require('./animations/rules.json'),
        renderer:'svg',
    }
    const rankings = {
        loop:true,
        autoplay:true,
        animationData:require('./animations/rankings.json'),
        renderer:'svg',
    }

    const [state, setState] = useState({mobileView: false})
    const { mobileView} = state;
    useEffect(() => {
        const setResponsiveness1 = () => {
          return window.innerWidth < 720
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness1();
        window.addEventListener("resize", () => setResponsiveness1());

        return () => {
        window.removeEventListener("resize", () => setResponsiveness1());
        }
    }, []);

    const displayDesktop=()=>{
        return(
            <Box sx={{ flexGrow: 1 }}>
                <Box className={classes.logo}>
                <Grid container>
                    <Grid item xs={7} style={{color:"white"}}>
                    </Grid>
                    <Grid container xs={5} style={{color:"white",height:"500px"}} display="flex" justify="center" alignItems="center">
                        <Grid item style={{border:"2px solid white",marginRight:"30px",marginLeft:"30px",padding:"20px",borderRadius:"20px"}}>
                            <Typography> A worldwide coding competition like non other with fun, creative and mind-boggling questions to test your logical and algorithmic thinking skills. One of the only in the world for primary and highschool student's, we will guide you through this amazing journey with the help of personalised online lectures and resources such as games and notes. So that you can learn anytime, anywhere, wherever you are.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                </Box>
                <Box sx={{height:"auto",margin:"10px",borderRadius:"20px",marginTop:"20px"}}>
                    <Typography variant="h2" align="center" >More About Us!</Typography>
                    <Grid container style={{padding:"10px"}} spacing={2}>
                        <Grid item xs={4}>
                            <Grid contained style={{height:"200px",marginBottom:"20px"}} display="flex">
                            <Lottie options={rankings}></Lottie>
                            </Grid>
                            <Grid contained style={{height:"auto"}} display="flex">
                                <Grid item>
                                <Typography align="center">To award you for your incredible performances in the competition, the team will be presenting the 1st, 2nd and 3rd ranks with a cash award of SGD 30, SGD 20, and SGD 10 respectively. Top 20 contestants will also receive a certificate of distinction and all participants will receive a certificate of participation. The top candidate from each country will also be receiving a certicate of appreciation.</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                        <Grid contained style={{height:"200px",marginBottom:"20px"}} display="flex">
                        <Lottie options={question}></Lottie>
                            </Grid>
                            <Grid contained style={{height:"auto"}} display="flex">
                                <Grid item>
                                <Typography align="center">We believe no one should ever not have the chance to participate in a coding competition, just because they dont know programming. So, we decided to start our own lectures and classes for you, accompanied with many online resources so that you dont feel left out in this rapidly evolving world. We promise you, after you take these wonderful and interactive class, you will not only be smartest in your class but also smarter than your all your computer science teachers.</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                        <Grid contained style={{height:"200px",marginBottom:"20px"}} display="flex">
                        <Lottie options={rules}></Lottie>
                            </Grid>
                            <Grid contained style={{height:"auto"}} display="flex">
                                <Grid item>
                                <Typography align="center">Unfortunately, we are really sorry to announce that only students aged 12 (grade 6 and above) and above can be a part of the competition. The competition will be held on 16th July 2022 from 10:00 am to 1:00 pm. We allow a variety of programming languages and ensure that all participants from all grades have a fair shot at scoring points. More details on the competition can be found on the rules and regulations page.</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        </Grid>
                </Box>
                <Box sx={{height:"auto",margin:"0px",borderRadius:"0px",marginTop:"20px",padding:"70px",backgroundColor:"#E5E7EB"}}>
                    <Typography variant="h4">What a computer is to me is the most remarkable tool that we have ever come up with. It's the equivalent of a bicycle for our minds.</Typography>
                    <Typography style={{marginTop:"10px"}}>Steve Jobs, former CEO and creator of Apple</Typography>
                </Box>
            </Box>       
        )          
    }
    
    const displayMobile=()=>{
        return(
            <Box sx={{ flexGrow: 1}}>
                <Box className={classes.logo2}>
                </Box>
                <Grid container style={{color:"black",padding:"10px"}} display="flex" justify="center" alignItems="center">
                        <Grid item style={{border:"1px solid black",borderRadius:"20px",padding:"20px"}}>
                            <Typography> A worldwide coding competition like non other with fun, creative and mind-boggling questions to test your logical and algorithmic thinking skills. One of the only in the world for primary and highschool student's, we will guide you through this amazing journey with the help of personalised online lectures and resources such as games and notes. So that you can learn anytime, anywhere, wherever you are.</Typography>
                        </Grid>
                </Grid>
                <Box sx={{height:"auto",margin:"10px",borderRadius:"20px",marginTop:"20px"}}>
                    <Typography variant="h2" align="center" >More About Us!</Typography>
                    <Grid container style={{padding:"10px"}} spacing={2}>
                        <Grid item xs={12}>
                            <Grid contained style={{height:"200px",marginBottom:"20px"}} display="flex">
                            <Lottie options={rankings}></Lottie>
                            </Grid>
                            <Grid contained style={{height:"auto"}} display="flex">
                                <Grid item>
                                <Typography align="center">To award you for your incredible performances in the competition, the team will be presenting the 1st, 2nd and 3rd ranks with a cash award of SGD 30, SGD 20, and SGD 10 respectively. Top 20 contestants will also receive a certificate of distinction and all participants will receive a certificate of participation. The top candidate from each country will also be receiving a certicate of appreciation.</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                        <Grid contained style={{height:"200px",marginBottom:"20px"}} display="flex">
                        <Lottie options={question}></Lottie>
                            </Grid>
                            <Grid contained style={{height:"auto"}} display="flex">
                                <Grid item>
                                <Typography align="center">We believe no one should ever not have the chance to participate in a coding competition, just because they dont know programming. So, we decided to start our own lectures and classes for you, accompanied with many online resources so that you dont feel left out in this rapidly evolving world. We promise you, after you take these wonderful and interactive class, you will not only be smartest in your class but also smarter than your all your computer science teachers.</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                        <Grid contained style={{height:"200px",marginBottom:"20px"}} display="flex">
                        <Lottie options={rules}></Lottie>
                            </Grid>
                            <Grid contained style={{height:"auto"}} display="flex">
                                <Grid item>
                                <Typography align="center">Unfortunately, we are really sorry to announce that only students aged 12 (grade 6 and above) and above can be a part of the competition. The competition will be held on 16th July 2022 from 10:00 am to 1:00 pm. We allow a variety of programming languages and ensure that all participants from all grades have a fair shot at scoring points. More details on the competition can be found on the rules and regulations page.</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Box sx={{height:"auto",margin:"0px",borderRadius:"20px",marginTop:"20px",padding:"30px",backgroundColor:"#E5E7EB"}}>
                    <Typography variant="h6">What a computer is to me is the most remarkable tool that we have ever come up with. It's the equivalent of a bicycle for our minds.</Typography>
                    <Typography style={{marginTop:"10px"}}>Steve Jobs, former CEO and creator of Apple</Typography>
                </Box>
                </Box>
            </Box>
        )
    }

    return (
        <div>
            {mobileView ? displayMobile() : displayDesktop()}
        </div> 
    )
}