import { Grid, Typography} from "@mui/material";

export default function Settings() {
    return (
        <Grid sx={{width:"100%", justifyContent: "center", alignContent: "center"}}>
           <Typography sx={{margin:"30px"}}>
               The page is in developement. It will be used to show your login details. 
           </Typography>
       </Grid> 
    )
}