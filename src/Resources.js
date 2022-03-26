import {Grid, Box,Typography,Button} from "@material-ui/core";
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import syllabus from "./img/Syllabus.jpg"
import notes from "./img/Notes.jpg"
import games from "./img/Games.jpg"
import lectures from "./img/Lectures.jpg"

const useStyles = makeStyles({
    syllabus: {
        backgroundImage: `url(${syllabus})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center center"
    },
    notes: {
        backgroundImage: `url(${notes})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center center"
    },
    games: {
        backgroundImage: `url(${games})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center center"
    },
    lectures: {
        backgroundImage: `url(${lectures})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center center"
    },

  });

export default function Resources() {
    const classes = useStyles();
    let history = useHistory();

    return (
        <Box sx={{height:"calc(100vh - 100px)",margin:"5px",width:"99.5%"}}>
                <Box sx={{height:"50%",marginRight:"5px"}}>
                    <Grid container style={{height:"100%"}}>
                        <Grid container xs={12} sm={6} display="flex" justify="center" align="center" style={{padding:"10px"}}>
                            <Button onClick={()=>{history.push("/resources/syllabus")}} className={classes.syllabus} style={{width:"100%",color:"white",backgroundColor:"#1a237e",borderRadius:"10px"}} variant="text"><Typography variant="h2"></Typography></Button>
                        </Grid>
                        <Grid container xs={12} sm={6} display="flex" justify="center" align="center" style={{padding:"10px"}}>
                            <Button onClick={()=>{history.push("/resources/notes")}} className={classes.notes} style={{width:"100%",color:"white",backgroundColor:"#1a237e",borderRadius:"10px"}} variant="text"><Typography variant="h2"></Typography></Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{height:"50%",marginRight:"5px"}}>
                    <Grid container style={{height:"100%"}}>
                        <Grid container xs={12} sm={6} display="flex" justify="center" align="center" style={{padding:"10px"}}>
                            <Button onClick={()=>{history.push("/resources/games")}} style={{width:"100%",color:"white",backgroundColor:"#1a237e",borderRadius:"10px"}} className={classes.games} variant="text"><Typography variant="h2"></Typography></Button>
                        </Grid>
                        <Grid container xs={12} sm={6} display="flex" justify="center" align="center" style={{padding:"10px"}}>
                            <Button onClick={()=>{history.push("/resources/lectures")}} style={{width:"100%",color:"white",backgroundColor:"#1a237e",borderRadius:"10px"}} className={classes.lectures} variant="text"><Typography variant="h2"></Typography></Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        )
    }
