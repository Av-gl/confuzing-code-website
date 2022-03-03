import { Grid, Typography} from "@mui/material";

export default function Aboutus() {
    return (
        <Grid sx={{width:"100%", justifyContent: "center", alignContent: "center"}}>
           <Typography sx={{margin:"30px"}}>
               This page will be used for telling a little about us and what we do, who we are, what
               each of us do and what inspired us for constructing this competition from scratch. 
               The page will be updated with relevant information by the end of the month. Thank you!
           </Typography>
       </Grid> 
    )
}