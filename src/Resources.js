import { Grid, Typography} from "@mui/material";

export default function Lectures() {
    return (
       <Grid sx={{width:"100%", justifyContent: "center", alignContent: "center"}}>
           <Typography sx={{margin:"30px"}}>
               This page will be used for showcasing resources such as upcoming lectures, notes, 
               games and the syllabus which are essential to your success. These lectures will be conducted during the month
               of May and June 2022 and will brief you on a variety of topics that will prove
               essential to your success in the competition. We will be starting from the very start
               and gradually progress to explore complex algorithms and data structures such as graphs
               and trees. During these sessions, we shall be providing you with extra tips and tricks
               that will assist you in getting the top most rank. The notes and games aim to help you
               revise the concepts discussed in the lectures as well as assist you during times of revision.
               The syllabus shall be our guide as we go together on this amazing journey. We hope to see you 
               soon in our classes and please stay tuned for upcoming updates.Thank you!             
           </Typography>
       </Grid> 
    )
}