import { Grid, Typography, Box, Button,Divider} from "@mui/material";
import { red,blue} from '@mui/material/colors';
const color5 = red[50]
const color1 = blue[100]

export default function Notes() {
    return (
        <div>
            <Box cotained display="flex" justifyContent="center" alignItems="center">
                <Box sx={{width:"90%"}} bgcolor={color1} borderRadius="2%">
                    <Typography variant="h5" style={{padding:"10px"}}>Schedule for the ConfuZing Code 2022:</Typography>
                    <Divider />
                    <Typography style={{padding:"10px"}}>15th May to 30th June - Online lectures.</Typography>
                    <Divider />
                    <Typography style={{padding:"10px"}}>30th June - Registration deadline for ConfuZing Code.</Typography>
                    <Divider />
                    <Typography style={{padding:"10px"}}>16th July - ConfuZing Code Online Final Contest.</Typography>
                    <Divider />
                    <Typography style={{padding:"10px"}}>31st July - ConfuZing Code results and awards ceremony.</Typography>
                </Box>
            </Box>
            <Box cotained display="flex" justifyContent="center" alignItems="center" sx={{marginTop:"10px"}}>
                <Box sx={{width:"90%"}} borderRadius="2%">
                    <Typography variant="h5" style={{padding:"10px"}}>Online Final Contest:</Typography>
                    <Divider />
                    <Typography style={{padding:"10px"}}>Date: 16th July 2022.</Typography>
                    <Divider />
                    <Typography style={{padding:"10px"}}>Contest: 2 tasks in 2 hours (10:00 am to 12:00 am)</Typography>
                    <Divider />
                    <Typography style={{padding:"10px"}}>All languages are supported</Typography>
                    <Divider />
                    <Typography style={{padding:"10px"}}>Contest URL: It will be emailed to contestants.</Typography>
                </Box>  
            </Box>
            <Box cotained display="flex" justifyContent="center" alignItems="center" sx={{marginTop:"10px"}}>
                <Box sx={{width:"90%"}} bgcolor={color1} borderRadius="2%">
                    <Typography variant="h5" style={{padding:"10px"}}>Online lectures:</Typography>
                    <Divider />
                    <Typography style={{padding:"10px"}}>Schedule will be updated soon. Sorry for the inconvinience.</Typography>
                  </Box>
            </Box>
            <Box cotained display="flex" justifyContent="center" alignItems="center" sx={{marginTop:"10px"}}>
                <Box sx={{width:"90%"}} borderRadius="2%">
                    <Typography variant="h5" style={{padding:"10px"}}>Tasks:</Typography>
                    <Divider />
                    <Typography style={{padding:"10px"}}>Each task in the competition is designed to test your logical thinking skills and the focus is on finding unique and efficient questions. Contestants are expected to design a source code to solve the given task whilst fulfilling the time requirements. You are required to design a source code while fulfilling the time requirements. There are no memory requirements and the tasks must be solved individually and not in teams. The source code must be contained within one source file.</Typography>
                    <Divider />
                    <Typography style={{padding:"10px"}}>Each task will be divided into multiple sub tasks, each of which will have certain marks. Each task will be of 100 marks. Time limits specified in the task will be very generous and three times the time required for the most efficient question. All questions can be solved by all languages and the programs are expected to read and write from standard input and output in the format specified in the task descriptions. At least two sample input and output templates will be provided in the task. The output should be formatted exactly as shown in the task.</Typography>
                    <Divider />
                    <Typography style={{padding:"10px"}}>All task statements will be provided on the website link in the form of a pdf. These tasks will be written in the language English. However, we understand that many contestants would prefer to view the questions in their native languages. In such a situation, you can request us through our email.</Typography>
                </Box>
            </Box>
            <Box cotained display="flex" justifyContent="center" alignItems="center" sx={{marginTop:"10px"}}>
                <Box sx={{width:"90%"}} bgcolor={color1} borderRadius="2%">
                    <Typography variant="h5" style={{padding:"10px"}}>Supplies:</Typography>
                    <Divider />
                    <Typography style={{padding:"10px"}}>Contestants are allowed to bring the following items into the examination room:</Typography>
                    <Divider />
                    <ul>
                        <li> <Typography style={{padding:"10px"}}>Additional clothing such as jackets.</Typography> </li>
                        <Divider />
                        <li> <Typography style={{padding:"10px"}}>Writing tools and plain paper.</Typography> </li>
                        <Divider />
                        <li> <Typography style={{padding:"10px"}}>Written or printed material.</Typography></li>
                        <Divider />
                        <li> <Typography style={{padding:"10px"}}>Medical supplies</Typography></li>
                    </ul>
                </Box>  
            </Box>
            <Box cotained display="flex" justifyContent="center" alignItems="center" sx={{marginTop:"10px"}}>
                <Box sx={{width:"90%"}} borderRadius="2%">
                    <Typography variant="h5" style={{padding:"10px"}}>Cheating:</Typography>
                    <Divider />
                    <Typography style={{padding:"10px"}}>During the examination, no two contestants are permitted to share their individual items with each other. Contestants are not allowed to bring the following items into the examination room:</Typography>
                    <Divider />
                    <ul>
                        <li> <Typography style={{padding:"10px"}}>Data storage mediums such as USB flash drives.</Typography> </li>
                        <Divider />
                        <li> <Typography style={{padding:"10px"}}>Communication devices such as mobile phones and smart watches.</Typography> </li>
                        <Divider />
                    </ul>
                    <Typography style={{padding:"10px"}}>Contestants cannot do the following:</Typography>
                    <Divider />
                    <ul>
                        <li> <Typography style={{padding:"10px"}}>Contestants must not attempt to gain access to another participant's account.</Typography> </li>
                        <Divider />
                        <li> <Typography style={{padding:"10px"}}>Contestants must not tamper with the grading system.</Typography> </li>
                        <Divider />
                        <li> <Typography style={{padding:"10px"}}>Contestants must not communicate with other contestants participating in the competition.</Typography></li>
                        <Divider />
                        <li> <Typography style={{padding:"10px"}}>Contestants must not submit hardcoded values.</Typography></li>
                    </ul>
                </Box>
            </Box>
            <Box cotained display="flex" justifyContent="center" alignItems="center" sx={{marginTop:"10px"}}>
                <Box sx={{width:"90%"}}  bgcolor={color1} borderRadius="2%">
                    <Typography variant="h5" style={{padding:"10px"}}>Eligibility of participants:</Typography>
                    <Divider />
                    <Typography style={{padding:"10px"}}>ConfuZing Code is open for all students in grades 6 and above, regardless of their nationality and citizenship. No prior knowledge is required in the field of computer science as lectures will be conducted to ensure that all participants have a fair chance of securing the top spot.</Typography>
                </Box>  
            </Box>
            <Box cotained display="flex" justifyContent="center" alignItems="center" sx={{marginBottom:"20px"}}>
                <Box sx={{width:"90%"}} borderRadius="2%">
                    <Typography variant="h5" style={{padding:"10px"}}>Awards:</Typography>
                    <Divider />
                    <Typography style={{padding:"10px"}}>The top 3 contestants are awarded prize money of SGD 30, SGD 20, and SGD 10 respectively while the top 20 contestants will be receiving certificates for their wonderful performance. All participants who score above 0 will receive a certificate of participation.</Typography>
                </Box>
            </Box>
        </div>
    )
}