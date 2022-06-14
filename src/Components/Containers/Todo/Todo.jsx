import {
    Grid,
    Paper,
    Typography,
} from "@mui/material";

import { Colors } from "../../../config/palette";



import { NewSubmissionTypography, AddTodoBox, TodoDiv1, TodoDiv2, TodoDiv3, AddTodoButton } from "./Todo.style.js";
import CameraIcon from "../../../assets/icons/CameraIcon";
import Button from "../../UI/Button/Button";
import { ReadIcon } from "../../../assets/icons/ReadIcon";
import { ReadIcon2 } from "../../../assets/icons/ReadIcon2";
import { ReadIcon3 } from "../../../assets/icons/ReadIcon3";
import { Calender, MyApp } from "./Calender";
const AddTodo = () => {
    return (
        <Paper elevation={0} square={true} style={{ background: Colors.secondary }}>
            <NewSubmissionTypography >
                TO-DO
            </NewSubmissionTypography>
            <Grid container spacing={6}>
                <Grid item xs={12} lg={6} >
                        <TodoDiv1 >  <ReadIcon />< Typography sx={{ color: "white", fontFamily: "Poppins", fontSize: "17px", marginLeft: "10px" }}>Read a Book</Typography></TodoDiv1>
                        <TodoDiv2 > <ReadIcon2 /> < Typography sx={{ color: "white", fontFamily: "Poppins", fontSize: "17px", marginLeft: "10px" }}>Learn about business</Typography></TodoDiv2>
                        <TodoDiv3 ><ReadIcon3 /> < Typography sx={{ color: "white", fontFamily: "Poppins", fontSize: "17px", marginLeft: "10px" }}>Read a Book</Typography></TodoDiv3>
                    
                    <AddTodoButton >Add Task</AddTodoButton>

                </Grid>
                <Grid item xs={12} lg={6} >

                    {/* <AddTodoBox > */}
                    <Calender/>
                    {/* </AddTodoBox> */}

                </Grid>
            </Grid>
        </Paper>
    );
};
export default AddTodo;