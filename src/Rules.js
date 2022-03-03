import { Grid, Typography} from "@mui/material";

export default function Notes() {
    return (
        <Grid sx={{width:"100%", justifyContent: "center", alignContent: "center"}}>
           <Typography sx={{margin:"30px"}}>
               This page will be used for showcasing the regulations and the syllabus of the 
               competition. These details will be updated by the 15th of March 2022. We are 
               really sorry for the inconvenience caused. Thank you.
           </Typography>
       </Grid> 
    )
}