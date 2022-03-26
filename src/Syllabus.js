import { Grid, Typography, Box,Divider} from "@mui/material";
import { useState,useEffect } from "react";

export default function Aboutus() {
    const [state, setState] = useState({mobileView: false})
    const { mobileView} = state;
    useEffect(() => {
        const setResponsiveness1 = () => {
          return window.innerWidth < 0
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
        return (
            <Grid container spacing={0}>
            <Grid item md={4}>
                    <Grid contained display="flex" justifyContent="center" align="center" style={{backgroundColor:"#90caf9",borderRadius:"10px",margin:"10px"}}>
                    <Typography variant="h3">Grades 6 to 8</Typography>
                    </Grid>
                <Grid contained style={{margin:"10px",padding:"6px",border:"1px solid black",borderRadius:"10px"}}>
                    <Typography>The following examples given below will depend on the programming language.</Typography>
                    <ol>
                        <li>Loops and conditional statements.</li>
                        <ul>
                            <li>For loop.</li>
                            <li>Do...while loop.</li>
                            <li>Repeat...until loop.</li>
                            <li>While...do loop.</li>
                            <li>If...else if...else conditional statement</li>
                        </ul>
                        <br/>
                        <li>One dimensional arrays.</li>
                        <ul>
                            <li>Adding an element to the 1D array.</li>
                            <li>Deleting an element from the 1D array.</li>
                            <li>Print out the 1D array.</li>
                        </ul>
                        <br/>
                        <li>Comparism and assignments of variables of various data types.</li>
                        <ul>
                            <li>The data types part of the syllabus are boolean, integer, real/float, and string</li>
                            <li>Comparism statements such as greater than, less than, equal to, greater than and equal to and less than and equal to.</li>
                        </ul>
                        <br/>
                        <li>Basic algorithms</li>
                        <ul>
                            <li>Bubble sort</li>
                            <li>Linear search</li>
                        </ul>

                    </ol>
                </Grid>
            </Grid>
            <Grid item md={4}>
            <Grid contained display="flex" justifyContent="center" align="center" style={{backgroundColor:"#90caf9",borderRadius:"10px",margin:"10px"}}>
                    <Typography variant="h3">Grades 9 and 10</Typography>
                    </Grid>
                    <Grid contained style={{margin:"10px",padding:"6px",border:"1px solid black",borderRadius:"10px"}}>
                    <Typography>The following examples given below will depend on the programming language.</Typography>
                    <ol>
                        <li>All content included in the syllabus for grades 6 to 8.</li>
                        <br/>
                        <li>Data structures</li>
                        <ul>
                            <li>Map (also known as dictionaries)</li>
                            <li>2D arrays</li>
                            <li>Queues</li>
                            <li>Stacks</li>
                            <br/>
                        </ul>
                        <Typography>You should be able to add an element, delete an element and print out the contents of the above data structures.</Typography>
                        <br/>
                        <li>Algorithms</li>
                        <ul>
                            <li>Insertion sort</li>
                            <li>Binary search</li>
                            <li>Merge sort</li>
                        </ul>
                        <br/>
                        <li>The following content will not be explicitly asked however it is recommended that you go through it.</li>
                        <ul>
                            <li>Greedy algorithms</li>
                            <li>Permutations and combinations</li>
                        </ul>
                    </ol>
                </Grid>
            </Grid>
            <Grid item md={4}>
            <Grid contained display="flex" justifyContent="center" align="center" style={{backgroundColor:"#90caf9",borderRadius:"10px",margin:"10px"}}>
                    <Typography variant="h3">Grades 11 and 12</Typography>
                    </Grid>
                <Grid contained style={{margin:"10px",padding:"6px",border:"1px solid black",borderRadius:"10px"}}>
                    <Typography>The following examples given below will depend on the programming language.</Typography>
                    <ol>
                        <li>All content included in the syllabus for grades 6 to 10.</li>
                        <br/>
                        <li>Graphs and trees</li>
                        <ul>
                            <li>Binary trees.</li>
                            <li>Breadth first search and depth first search.</li>
                            <li>Pre-order traversal, in-order traversal, post-order traversal.</li>
                            <br/>
                        </ul>
                        <Typography>You should be able to add an element, delete an element and print out the contents of a graph or a tree.</Typography>
                        <br/>
                        <li>Data structures</li>
                        <ul>
                            <li>Sets</li>
                            <li>Multiset</li>
                            <li>Multimap</li>
                            <li>Linked list</li>
                        </ul>
                        <br/>
                        <Typography>You should be able to add an element, delete an element and print out the contents of the above data structures.</Typography>
                    </ol>
                </Grid>
            </Grid>
        </Grid>
        )
        }

   return (
        <div>
        {displayDesktop()}
    </div> 
    )
}