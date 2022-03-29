import { Grid, Typography,Box} from "@mui/material";
import Lottie from "react-lottie"
import { useState,useEffect } from "react";

export default function Aboutus() {
    const [state, setState] = useState({mobileView: false})
    const { mobileView} = state;
    useEffect(() => {
        const setResponsiveness1 = () => {
          return window.innerWidth < 900
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness1();
        window.addEventListener("resize", () => setResponsiveness1());

        return () => {
        window.removeEventListener("resize", () => setResponsiveness1());
        }
    }, []);

    const programmer = {
        loop:true,
        autoplay:true,
        animationData:require('./animations/programmer.json'),
        renderer:'svg',
    }
    const writing = {
        loop:true,
        autoplay:true,
        animationData:require('./animations/writing.json'),
        renderer:'svg',
    }
    const games = {
        loop:true,
        autoplay:true,
        animationData:require('./animations/games.json'),
        renderer:'svg',
    }
    const computer = {
        loop:true,
        autoplay:true,
        animationData:require('./animations/computer.json'),
        renderer:'svg',
    }
    const coding = {
        loop:true,
        autoplay:true,
        animationData:require('./animations/coding.json'),
        renderer:'svg',
    }
    const coding2 = {
        loop:true,
        autoplay:true,
        animationData:require('./animations/coding2.json'),
        renderer:'svg',
    }

    const displayDesktop=()=>{
        return(
            <Box sx={{flexGrow:"1",margin:"20px"}}>
            <Box>
            <Grid container display="flex" justifyContent="center" alignItems="center" style={{height:"auto",backgroundColor:"#402aea",borderRadius:"30px",padding:"50px"}}>
                <Grid container display="flex" justifyContent="center" alignItems="center" style={{color:"white",height:"100%"}}>
                    <Box>
                    <Typography variant="h1" align="center" style={{marginBottom:"20px"}}>About Us</Typography>
                    <Typography variant="h5" align="center">ConfuZing Code is a non-profit coding competition that keeps creativity at the heart of everything that it strives to achieve. Our mission is to ensure that all students from across the globe get a chance to code with their peers and family members and are introduced to the wonderful and exciting world of competitive coding.</Typography>
                    </Box>
                </Grid>
            </Grid>
            </Box>
            <Box sx={{marginTop:"40px"}}>
                <Typography variant="h2">Our Team</Typography>
            </Box>
            <Box>
                <Grid container display="flex" justifyContent="center" alignItems="center" style={{backgroundColor:"white"}}>
                    <Grid item xs={12} md={8} style={{padding:"10px",color:"black"}}>
                        <Typography><strong>Arnav Goel</strong> is a published author and founder of the ConfuZing Code competition. He loves to code websites from scratch and is a recipient of a certificate of completion of Harvard's online Introduction to computer science course. Apart from creating websites, similar to this, he spend his time writing for the Young Author's Club newsletter and teaching students to code as part of a program by the digital tech society he founded in his high school.</Typography>
                    <br/>
                    <Typography><strong>Role</strong>: responsible for the creation and management of the website, creator of the storyline in the notes and 25% of all programs in the notes. He will also be conducting lectures in the future.</Typography>
                        
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box>
                            <Lottie height={300} options={writing}></Lottie>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            
            <Box>
                <Grid container display="flex" justifyContent="center" alignItems="center" style={{backgroundColor:"black"}}>
                <Grid item xs={12} md={4}>
                        <Box>
                            <Lottie height={300} options={computer}></Lottie>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8} style={{padding:"10px",color:"white"}}>
                        <Typography align="center"><strong>Raghav Anand: Content is yet to be provided</strong></Typography>
                    <br/>
                    <Typography align="center"><strong>Role</strong>: Creator of 25% of all programs in the notes.</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container display="flex" justifyContent="center" alignItems="center" style={{backgroundColor:"white",paddingTop:"30px"}}>
                <Grid item xs={12} md={8} style={{padding:"10px",color:"black"}}>
                        <Typography align="center"><strong>Aryan Sharma: Content is yet to be provided</strong></Typography>
                    <br/>
                    <Typography align="center"><strong>Role</strong>: Creator of 25% of all programs in the notes and will be conducting lectures in the future.</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box>
                            <Lottie height={300} options={coding}></Lottie>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container display="flex" justifyContent="center" alignItems="center" style={{backgroundColor:"black"}}>
                <Grid item xs={12} md={4}>
                        <Box>
                            <Lottie height={300} options={coding2}></Lottie>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8} style={{padding:"10px",color:"white"}}>
                        <Typography align="center"><strong>Atharva Rege: Content is yet to be provided</strong></Typography>
                    <br/>
                    <Typography align="center"><strong>Role</strong>: Creator of 50% of all past papers and programming questions.</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container display="flex" justifyContent="center" alignItems="center" style={{backgroundColor:"white",paddingTop:"30px"}}>
                <Grid item xs={12} md={8} style={{padding:"10px",color:"black"}}>
                        <Typography align="center"><strong>Baghaskara Pandya Narayana: Content is yet to be provided</strong></Typography>
                    <br/>
                    <Typography align="center"><strong>Role</strong>: Creator of 50% of all past papers and programming questions.</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box>
                            <Lottie height={300} options={games}></Lottie>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container display="flex" justifyContent="center" alignItems="center" style={{backgroundColor:"black"}}>
                <Grid item xs={12} md={4}>
                        <Box>
                            <Lottie height={300} options={programmer}></Lottie>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8} style={{padding:"10px",color:"white"}}>
                        <Typography align="center"><strong>Tuhin Shinde: Content is yet to be provided</strong></Typography>
                    <br/>
                    <Typography align="center"><strong>Role</strong>: Creator of 25% of all programs in the notes</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
        )
        }

        const displayMobile=()=>{
            return(
                <Box sx={{flexGrow:"1",margin:"20px"}}>
            <Box>
            <Grid container display="flex" justifyContent="center" alignItems="center" style={{height:"auto",backgroundColor:"#402aea",borderRadius:"30px",padding:"50px"}}>
                <Grid container display="flex" justifyContent="center" alignItems="center" style={{color:"white",height:"100%"}}>
                    <Box>
                    <Typography variant="h1" align="center" style={{marginBottom:"20px"}}>About Us</Typography>
                    <Typography variant="h5" align="center">ConfuZing Code is a non-profit coding competition that keeps creativity at the heart of everything that it strives to achieve. Our mission is to ensure that all students from across the globe get a chance to code with their peers and family members and are introduced to the wonderful and exciting world of competitive coding.</Typography>
                    </Box>
                </Grid>
            </Grid>
            </Box>
            <Box sx={{marginTop:"40px"}}>
                <Typography variant="h2">Our Team</Typography>
            </Box>
            <Box>
                <Grid container display="flex" justifyContent="center" alignItems="center" style={{backgroundColor:"white"}}>
                <Grid item xs={12} md={4}>
                        <Box>
                            <Lottie height={300} options={writing}></Lottie>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8} style={{padding:"10px",color:"black"}}>
                        <Typography><strong>Arnav Goel</strong> is a published author and founder of the ConfuZing Code competition. He loves to code websites from scratch and is a recipient of a certificate of completion of Harvard's online Introduction to computer science course. Apart from creating websites, similar to this, he spend his time writing for the Young Author's Club newsletter and teaching students to code as part of a program by the digital tech society he founded in his high school.</Typography>
                    <br/>
                    <Typography><strong>Role</strong>: responsible for the creation and management of the website, creator of the storyline in the notes and 25% of all programs in the notes. He will also be conducting lectures in the future.</Typography>
                        
                    </Grid>
                    
                </Grid>
            </Box>
            
            <Box>
                <Grid container display="flex" justifyContent="center" alignItems="center" style={{backgroundColor:"black",marginTop:"30px"}}>
                <Grid item xs={12} md={4}>
                        <Box>
                            <Lottie height={300} options={computer}></Lottie>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8} style={{padding:"10px",color:"white"}}>
                        <Typography align="center"><strong>Raghav Anand: Content is yet to be provided</strong></Typography>
                    <br/>
                    <Typography align="center"><strong>Role</strong>: Creator of 25% of all programs in the notes.</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container display="flex" justifyContent="center" alignItems="center" style={{backgroundColor:"white",marginTop:"30px"}}>
                <Grid item xs={12} md={4}>
                        <Box>
                            <Lottie height={300} options={coding}></Lottie>
                        </Box>
                    </Grid>
                <Grid item xs={12} md={8} style={{padding:"10px",color:"black"}}>
                        <Typography align="center"><strong>Aryan Sharma: Content is yet to be provided</strong></Typography>
                    <br/>
                    <Typography align="center"><strong>Role</strong>: Creator of 25% of all programs in the notes and will be conducting lectures in the future.</Typography>
                    </Grid>
                    
                </Grid>
            </Box>
            <Box>
                <Grid container display="flex" justifyContent="center" alignItems="center" style={{backgroundColor:"black",marginTop:"30px"}}>
                <Grid item xs={12} md={4}>
                        <Box>
                            <Lottie height={300} options={coding2}></Lottie>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8} style={{padding:"10px",color:"white"}}>
                        <Typography align="center"><strong>Atharva Rege: Content is yet to be provided</strong></Typography>
                    <br/>
                    <Typography align="center"><strong>Role</strong>: Creator of 50% of all past papers and programming questions.</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container display="flex" justifyContent="center" alignItems="center" style={{backgroundColor:"white",marginTop:"30px"}}>
                <Grid item xs={12} md={4}>
                        <Box>
                            <Lottie height={300} options={games}></Lottie>
                        </Box>
                    </Grid>
                <Grid item xs={12} md={8} style={{padding:"10px",color:"black"}}>
                        <Typography align="center"><strong>Baghaskara Pandya Narayana: Content is yet to be provided</strong></Typography>
                    <br/>
                    <Typography align="center"><strong>Role</strong>: Creator of 50% of all past papers and programming questions.</Typography>
                    </Grid>
                    
                </Grid>
            </Box>
            <Box>
                <Grid container display="flex" justifyContent="center" alignItems="center" style={{backgroundColor:"black",marginTop:"30px"}}>
                <Grid item xs={12} md={4}>
                        <Box>
                            <Lottie height={300} options={programmer}></Lottie>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8} style={{padding:"10px",color:"white"}}>
                        <Typography align="center"><strong>Tuhin Shinde: Content is yet to be provided</strong></Typography>
                    <br/>
                    <Typography align="center"><strong>Role</strong>: Creator of 25% of all programs in the notes</Typography>
                    </Grid>
                </Grid>
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