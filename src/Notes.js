import { Grid, Typography} from "@mui/material";

export default function Notes() {
    return (
        <Grid sx={{width:"100%", justifyContent: "center", alignContent: "center"}}>
           <Typography sx={{margin:"30px"}}>
               This page will be used for showcasing future notes,games and practice questions that will provided to you in
               due time to assist you in your preparation for the ConfuZing Code. These resources will 
               allow you to pratice your existing skills as well as get a brief overview of the content 
               which will be taught by us in our lectures.  
           </Typography>
       </Grid> 
    )
}