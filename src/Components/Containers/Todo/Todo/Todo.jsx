import {
    Grid,
    Paper,
} from "@mui/material";
import { Colors } from "../../../../config/palette";
import { ReadIcon } from "../../../../assets/icons/ReadIcon";
import { ReadIcon2 } from "../../../../assets/icons/ReadIcon2";
import { ReadIcon3 } from "../../../../assets/icons/ReadIcon3";
import { Calender } from "./Calender";
import { NewSubmissionTypography, TodoDiv1, TodoDiv2, TodoDiv3, AddTodoButton, TodoTypography } from "./Todo.style";
const AddTodo = () => {
    return (
        <Paper elevation={0} square={true} style={{ background: Colors.secondary }}>
            <NewSubmissionTypography >
                TO-DO
            </NewSubmissionTypography>
            <Grid container spacing={6}>
                <Grid item xs={12} lg={6} >
                    <TodoDiv1 >
                        <ReadIcon />
                        < TodoTypography >Read a Book</TodoTypography>
                    </TodoDiv1>
                    <TodoDiv2 >
                        <ReadIcon2 />
                        < TodoTypography >Learn about business</TodoTypography>
                    </TodoDiv2>
                    <TodoDiv3 >
                        <ReadIcon3 />
                        < TodoTypography >Read a Book</TodoTypography>
                    </TodoDiv3>

                    <AddTodoButton >Add Task</AddTodoButton>

                </Grid>
                <Grid item xs={12} lg={6} >

                    {/* <AddTodoBox > */}
                    <Calender />
                    {/* </AddTodoBox> */}

                </Grid>
            </Grid>
        </Paper>
    );
};
export default AddTodo;