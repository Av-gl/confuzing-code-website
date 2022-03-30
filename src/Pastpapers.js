import { Grid, Typography,Box} from "@mui/material";

export default function PastPapers() {
    return (
        <Box sx={{height:"calc(100vh - 100px)",margin:"5px",width:"99.5%"}}>
            <Grid container display="flex" justifyContent="center" alignItems="center" style={{height:"100%"}}>
                <Typography variant="h6">Practice Papers coming soon...</Typography>
            </Grid>
        </Box>
    )
}