import { Grid, Typography, Box} from "@mui/material";
import Lottie from "react-lottie"

export default function Notes() {
    const error = {
        loop:true,
        autoplay:true,
        animationData:require('./animations/error.json'),
        renderer:'svg',
    }
    return (
        <Box sx={{height:"calc(100vh - 100px)",margin:"5px",width:"99.5%"}}>
            <Grid container display="flex" justifyContent="center" alignItems="center" style={{height:"100%"}}>
            <Lottie height={500} options={error}></Lottie>
                
            </Grid>
        </Box>
    )
}