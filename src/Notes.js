import { Grid, Typography, Box,Divider, Button} from "@mui/material";
import { useHistory } from "react-router-dom";
import { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import background from "./img/Background2.jpg"

const useStyles = makeStyles({
    buttonStep: {
        width:"100%",
        borderRadius:"10px" ,
    },
    Background: {
        backgroundImage: `url(${background})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center center"
    }
  });
  

export default function Aboutus() {
    
    let history = useHistory();
    const classes = useStyles();

    const [state, setState] = useState({mobileView: false})
    const { mobileView} = state;
    useEffect(() => {
        const setResponsiveness1 = () => {
          return window.innerWidth < 760
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
            <Box sx={{ flexGrow: 1 }} className={classes.Background}>
                <Grid container>
                    <Grid item sm={4} xs={12}>
                            <Grid container style={{height:"29vh",padding:"2px",border:"10px solid white"}}>
                                <Button onClick={()=>{history.push("/resources/notes/loops")}} className={classes.buttonStep} variant="text"><Typography variant="h2" style={{color:"white"}}>Loops</Typography></Button>
                            </Grid>
                    </Grid>
                    <Grid item sm={8} xs={12}>
                            <Grid container style={{height:"29vh",padding:"2px",border:"10px solid white"}}>
                                <Button onClick={()=>{history.push("/resources/notes/algorithms")}} className={classes.buttonStep} variant="text"><Typography variant="h2" style={{color:"white"}}>Algorithms</Typography></Button>
                            </Grid>
                    </Grid>
                    <Grid item sm={7} xs={12}>
                            <Grid container style={{height:"30vh",padding:"2px",border:"10px solid white"}}>
                                <Button onClick={()=>{history.push("/resources/notes/data-structures")}} className={classes.buttonStep} variant="text"><Typography variant="h2" style={{color:"white"}}>Data Structures</Typography></Button>
                            </Grid>
                    </Grid>
                    <Grid item sm={5} xs={12}>
                            <Grid container style={{height:"30vh",padding:"2px",border:"10px solid white"}}>
                                <Button onClick={()=>{history.push("/resources/notes/graphs")}} className={classes.buttonStep} variant="text"><Typography variant="h2" style={{color:"white"}}>Graphs</Typography></Button>
                            </Grid>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                            <Grid container style={{height:"30vh",padding:"2px",border:"10px solid white"}}>
                                <Button onClick={()=>{history.push("/resources/notes/trees")}} className={classes.buttonStep} variant="text"><Typography variant="h2" style={{color:"white"}}>Trees</Typography></Button>
                            </Grid>
                    </Grid>
                    <Grid item sm={8} xs={12}>
                            <Grid container style={{height:"30vh",padding:"2px",border:"10px solid white"}}>
                                <Button onClick={()=>{history.push("/resources/notes/everything-else")}} className={classes.buttonStep} variant="text"><Typography variant="h2" style={{color:"white"}}>Everything Else</Typography></Button>
                            </Grid>
                    </Grid>
                </Grid>
            </Box> 
        )
        }

        const displayMobile=()=>{
            return(
                <Box sx={{ flexGrow: 1 }} className={classes.Background}>
                <Grid container spacing={0}>
                    <Grid item sm={4} xs={12}>
                            <Grid container style={{height:"29vh",padding:"2px",border:"10px solid white"}}>
                                <Button onClick={()=>{history.push("/resources/notes/loops")}} className={classes.buttonStep} variant="text"><Typography style={{color:"white",fontSize:"42px"}}>Loops</Typography></Button>
                            </Grid>
                    </Grid>
                    <Grid item sm={8} xs={12}>
                            <Grid container style={{height:"29vh",padding:"2px",border:"10px solid white"}}>
                                <Button onClick={()=>{history.push("/resources/notes/algorithms")}} className={classes.buttonStep} variant="text"><Typography variant="h4" style={{color:"white",fontSize:"42px"}}>Algorithms</Typography></Button>
                            </Grid>
                    </Grid>
                    <Grid item sm={7} xs={12}>
                            <Grid container style={{height:"30vh",padding:"2px",border:"10px solid white"}}>
                                <Button onClick={()=>{history.push("/resources/notes/data-structures")}} className={classes.buttonStep} variant="text"><Typography variant="h4" style={{color:"white",fontSize:"42px"}}>Data Structures</Typography></Button>
                            </Grid>
                    </Grid>
                    <Grid item sm={5} xs={12}>
                            <Grid container style={{height:"30vh",padding:"2px",border:"10px solid white"}}>
                                <Button onClick={()=>{history.push("/resources/notes/graphs")}} className={classes.buttonStep} variant="text"><Typography variant="h4" style={{color:"white",fontSize:"42px"}}>Graphs</Typography></Button>
                            </Grid>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                            <Grid container style={{height:"30vh",padding:"2px",border:"10px solid white"}}>
                                <Button onClick={()=>{history.push("/resources/notes/trees")}} className={classes.buttonStep} variant="text"><Typography variant="h4" style={{color:"white",fontSize:"42px"}}>Trees</Typography></Button>
                            </Grid>
                    </Grid>
                    <Grid item sm={8} xs={12}>
                            <Grid container style={{height:"30vh",padding:"2px",border:"10px solid white"}}>
                                <Button onClick={()=>{history.push("/resources/notes/everything-else")}} className={classes.buttonStep} variant="text"><Typography variant="h4" style={{color:"white",fontSize:"42px"}}>Everything Else</Typography></Button>
                            </Grid>
                    </Grid>
                </Grid>
            </Box> 
        )
        }


        return (
            <div>
                {mobileView ? displayMobile() : displayDesktop()}
            </div> 
        )
    }