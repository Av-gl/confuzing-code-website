import {Grid, Box,Typography,Button,Link} from "@material-ui/core";
import Lottie from "react-lottie"
import { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./img/Logo.jpg"
import logo2 from "./img/Logo2.jpg"

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
    const aboutUs = {
        loop:true,
        autoplay:true,
        animationData:require('./animations/aboutUs.json'),
        renderer:'svg',
    }

    const socialMedia = {
        loop:true,
        autoplay:true,
        animationData:require('./animations/socialMedia2.json'),
        renderer:'svg',
    }

    const facebook = {
        loop:true,
        autoplay:true,
        animationData:require('./animations/facebook.json'),
        renderer:'svg',
    }

    const gmail = {
        loop:true,
        autoplay:true,
        animationData:require('./animations/gmail.json'),
        renderer:'svg',
    }

    const instagram = {
        loop:true,
        autoplay:true,
        animationData:require('./animations/instagram.json'),
        renderer:'svg',
    }

    const linkedin = {
        loop:true,
        autoplay:true,
        animationData:require('./animations/linkedin.json'),
        renderer:'svg',
    }

    const [state, setState] = useState({mobileView: false})
    const { mobileView} = state;
    useEffect(() => {
        const setResponsiveness1 = () => {
          return window.innerWidth < 870
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
                            <Typography>ConfuZing Code is a worldwide coding competition like none other. Join us on this amazing journey involving numerous innovative and mind-boggling questions to test your creativity and problem-solving skills. One of the only competitions open to primary and high-school students, we hope to introduce to you the world of competitive coding with the help of our personalised lectures and spectacular resources. So what are you waiting for, register now for our first round on 16th July 2022.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                </Box>
                <Box sx={{height:"auto",margin:"10px",borderRadius:"20px",marginTop:"50px"}}>
                    <Typography variant="h2" align="center" >More About Us!</Typography>
                    <Grid container style={{padding:"10px"}} spacing={2}>
                        <Grid item xs={4}>
                            <Grid contained style={{height:"200px",marginBottom:"20px"}} display="flex">
                            <Lottie options={rankings}></Lottie>
                            </Grid>
                            <Grid contained style={{height:"auto"}} display="flex">
                                <Grid item>
                                <Typography align="center">A competition is no fun without prizes! For our top three winners, awards totalling S$50 will be given to our spectacular coders. Also, the top twenty contestants will receive a certificate of distinction and all participants shall receive a certificate of appreciation. To find out more, please visit the rules page on the website or have a conversation with our friendly chatbot.</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                        <Grid contained style={{height:"200px",marginBottom:"20px"}} display="flex">
                        <Lottie options={question}></Lottie>
                            </Grid>
                            <Grid contained style={{height:"auto"}} display="flex">
                                <Grid item>
                                <Typography align="center">We believe no one should ever not have the chance to code just because they haven't had the chance to meet someone interesting to teach them. In light of this, we decided to start personalised lectures accompanied by various online resources so that you can learn anywhere, anytime, wherever you are. To find out more, please visit our resources page. </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                        <Grid contained style={{height:"200px",marginBottom:"20px"}} display="flex">
                        <Lottie options={rules}></Lottie>
                            </Grid>
                            <Grid contained style={{height:"auto"}} display="flex">
                                <Grid item>
                                <Typography align="center">To ensure all students have a fair chance at obtaining the top spot, depending on the contestant's age, you will receive a different question than that of your peers. The competition will be held on the 16th of July and we allow all programming languages. More details on the rules can be found on our rules page. Feel free to contact us through our friendly chatbot.</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        </Grid>
                </Box>
                <Box sx={{height:"auto",borderRadius:"0px",backgroundColor:"#f7f7f7"}}>
                    <Box sx={{marginTop:"50px",padding:"50px"}}>
                    <Typography variant="h4" style={{}}>What a computer is to me is the most remarkable tool that we have ever come up with. It's the equivalent of a bicycle for our minds.</Typography>
                    <Typography style={{marginTop:"10px"}}>Steve Jobs, former CEO and creator of Apple</Typography>
                    </Box>
                </Box>
                
                <Box>
                    <Grid container>
                        <Grid item xs={6} style={{padding:"30px",paddingLeft:"100px",paddingRight:"50px"}}>
                            <Grid container display="flex" justifyContent="center" alignItems="center" style={{height:"300px"}}>
                                <Typography variant="h6">Get to know more about the high school students who planned the entire competition from scratch and the change they are striving to make in the world. Find out more about who they are, what they do and how they contributed to this wonderful project by visiting the about us page on the website.</Typography>
                            </Grid> 
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container display="flex" justifyContent="center" alignItems="center">
                                <Box sx={{height:"300px"}}>
                                <Lottie options={aboutUs}></Lottie>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{paddingLeft:"100px",paddingRight:"100px",paddingBottom:"30px",paddingTop:"10px"}}>
                <Typography variant="h3">Contact Us!</Typography>
                <Grid container>
                    <Grid item xs={7}>
                        <Grid container style={{height:"400px"}}>
                            <Grid item style={{height:"200px",width:"100%",backgroundColor:"black",padding:"10px"}}>
                            <Typography variant="h6" style={{color:"white"}}>Please leave us a message on our email id or contact us through our friendly chatbot and we will get back to your enquiries within 3 business days.</Typography>
                            <Lottie height={300} options={socialMedia}></Lottie>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={5}>
                    <Grid container style={{height:"400px"}}>
                            <Grid item style={{height:"200px",width:"100%",backgroundColor:"black"}}>
                            <Grid container display="flex" justifyContent="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Grid container spacing={1}>
                                        <Grid container xs={6} style={{height:"100px"}} display="flex" justifyContent="center" alignItems="center">
                                        <Link href="https://www.facebook.com/profile.php?id=100078717080830">
                                            <Typography style={{color:"white"}}>ConfuZing Code</Typography>
                                        </Link>
                                            
                                        </Grid>
                                        <Grid item xs={6} style={{height:"100px"}}>
                                        <Lottie options={facebook}></Lottie>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={1}>
                                        <Grid container xs={6} style={{height:"100px"}} display="flex" justifyContent="center" alignItems="center">
                                            <Typography style={{color:"white"}}>confuzingcode@gmail.com</Typography>
                                        </Grid>
                                        <Grid item xs={6} style={{height:"100px"}}>
                                        <Lottie options={gmail}></Lottie>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            </Grid>
                            <Grid item style={{height:"200px",width:"100%"}}>
                            <Grid container display="flex" justifyContent="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Grid container spacing={1}>
                                        <Grid container xs={6} style={{height:"100px"}} display="flex" justifyContent="center" alignItems="center">
                                        <Link href="https://www.instagram.com/confuzing_code/">
                                            <Typography style={{color:"black"}}>confuzing_code</Typography>
                                        </Link>
                                        </Grid>
                                        <Grid item xs={6} style={{height:"100px"}}>
                                        <Lottie options={instagram}></Lottie>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={1}>
                                        <Grid container xs={6} style={{height:"100px"}} display="flex" justifyContent="center" alignItems="center">
                                        <Link href="https://www.linkedin.com/in/confuzing-code-aa8a44235">
                                        <Typography style={{color:"black"}}>ConfuZing Code</Typography>
                                        </Link>
                                            
                                        </Grid>
                                        <Grid item xs={6} style={{height:"100px"}}>
                                        <Lottie options={linkedin}></Lottie>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </Grid>
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
                            <Typography>ConfuZing Code is a worldwide coding competition like none other. Join us on this amazing journey involving numerous innovative and mind-boggling questions to test your creativity and problem-solving skills. One of the only competitions open to primary and high-school students, we hope to introduce to you the world of competitive coding with the help of our personalised lectures and spectacular resources. So what are you waiting for, register now for our first round on 16th July 2022. </Typography>
                        </Grid>
                </Grid>
                <Box sx={{height:"auto",margin:"10px",borderRadius:"20px",marginTop:"20px"}}>
                    <Typography variant="h2" align="center" >More About Us!</Typography>
                    <Grid container style={{padding:"10px"}} spacing={2}>
                        <Grid item xs={12}>
                            <Grid container style={{height:"300px",marginBottom:"20px"}} display="flex">
                            <Lottie options={rankings}></Lottie>
                            </Grid>
                            <Grid contained style={{height:"auto"}} display="flex">
                                <Grid item>
                                <Typography align="center">A competition is no fun without prizes! For our top three winners, awards totalling S$50 will be given to our spectacular coders. Also, the top twenty contestants will receive a certificate of distinction and all participants shall receive a certificate of appreciation. To find out more, please visit the rules page on the website or have a conversation with our friendly chatbot. </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                        <Grid container style={{height:"300px",marginBottom:"20px"}} display="flex">
                        <Lottie options={question}></Lottie>
                            </Grid>
                            <Grid contained style={{height:"auto"}} display="flex">
                                <Grid item>
                                <Typography align="center">We believe no one should ever not have the chance to code just because they haven't had the chance to meet someone interesting to teach them. In light of this, we decided to start personalised lectures accompanied by various online resources so that you can learn anywhere, anytime, wherever you are. To find out more, please visit our resources page. </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                        <Grid container style={{height:"300px",marginBottom:"20px"}} display="flex">
                        <Lottie options={rules}></Lottie>
                            </Grid>
                            <Grid contained style={{height:"auto"}} display="flex">
                                <Grid item>
                                <Typography align="center">To ensure all students have a fair chance at obtaining the top spot, depending on the contestant's age, you will receive a different question than that of your peers. The competition will be held on the 16th of July and we allow all programming languages. More details on the rules can be found on our rules page. Feel free to contact us through our friendly chatbot.</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Box sx={{height:"auto",margin:"0px",borderRadius:"20px",marginTop:"20px",padding:"30px",backgroundColor:"#f7f7f7"}}>
                    <Typography variant="h6">What a computer is to me is the most remarkable tool that we have ever come up with. It's the equivalent of a bicycle for our minds.</Typography>
                    <Typography style={{marginTop:"10px"}}>Steve Jobs, former CEO and creator of Apple</Typography>
                    
                </Box>
                <Grid container style={{height:"300px",marginBottom:"20px"}} display="flex">
                        <Lottie options={aboutUs}></Lottie>
                            </Grid>
                            <Grid contained style={{height:"auto"}} display="flex">
                                <Grid item>
                                <Typography align="center">Get to know more about the high school students who planned the entire competition from scratch and the change they are striving to make in the world. Find out more about who they are, what they do and how they contributed to this wonderful project by visiting the about us page on the website.</Typography>
                                </Grid>
                            </Grid>
                            
                            <Box sx={{height:"auto",margin:"0px",marginTop:"20px"}}>
                            <Typography variant="h3">Contact Us!</Typography>
                            <Grid container>
                            <Grid item>
                        <Grid container style={{}}>
                            <Grid item style={{width:"100%",padding:"10px",backgroundColor:"black",borderRadius:"20px"}}>
                            <Typography variant="h6" style={{color:"white"}}>Please leave us a message on our email id or contact us through our friendly chatbot and we will get back to your enquiries within 3 business days.</Typography>
                            <Lottie height={300} options={socialMedia}></Lottie>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Grid>
                            <Grid container display="flex" justifyContent="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Grid container spacing={1}>
                                        <Grid container xs={9} style={{height:"100px"}} display="flex" justifyContent="center" alignItems="center">
                                        <Link href="https://www.facebook.com/profile.php?id=100078717080830">
                                            <Typography style={{color:"black"}}>ConfuZing Code</Typography>
                                        </Link>
                                            
                                        </Grid>
                                        <Grid item xs={3} style={{height:"100px"}}>
                                        <Lottie options={facebook}></Lottie>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={1}>
                                        <Grid container xs={9} style={{height:"100px"}} display="flex" justifyContent="center" alignItems="center">
                                            <Typography style={{color:"black"}}>confuzingcode@gmail.com</Typography>
                                        </Grid>
                                        <Grid item xs={3} style={{height:"100px"}}>
                                        <Lottie options={gmail}></Lottie>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>  
                            <Grid item style={{height:"200px",width:"100%"}}>
                            <Grid container display="flex" justifyContent="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Grid container spacing={1}>
                                        <Grid container xs={9} style={{height:"100px"}} display="flex" justifyContent="center" alignItems="center">
                                        <Link href="https://www.instagram.com/confuzing_code/">
                                            <Typography style={{color:"black"}}>confuzing_code</Typography>
                                        </Link>
                                        </Grid>
                                        <Grid item xs={3} style={{height:"100px"}}>
                                        <Lottie options={instagram}></Lottie>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={1}>
                                        <Grid container xs={9} style={{height:"100px"}} display="flex" justifyContent="center" alignItems="center">
                                        <Link href="https://www.linkedin.com/in/confuzing-code-aa8a44235">
                                        <Typography style={{color:"black"}}>ConfuZing Code</Typography>
                                        </Link>
                                        </Grid>
                                        <Grid item xs={3} style={{height:"100px"}}>
                                        <Lottie options={linkedin}></Lottie>
                                        
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
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