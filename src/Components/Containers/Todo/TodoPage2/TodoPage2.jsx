import {
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import { Colors } from "../../../../config/palette";
import { ReadIcon2 } from "../../../../assets/icons/ReadIcon2";
import { CompleteTodoButton, DataAndTime, HourDiv, HoursTypography, Icondiv, MainDivDateAndTime, NewSubmissionTypography, TodoDescription, TodoDiv1, TodoTypography } from "./TodoPage2.style";
import { HourIcon } from "../../../../assets/icons/HourIcon";
import { Calender } from "../TodoPage1/Calender";
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import { EditIcon } from '../../../../assets/icons/EditIcon';
import DeleteIcon from "../../../../assets/icons/Delete";

const AddTodoPage2 = () => {
    return (
        <Paper elevation={0} square={true} style={{ background: Colors.secondary }}>
            <NewSubmissionTypography >
                TO-DO
            </NewSubmissionTypography>
            <Grid container spacing={6}>
                <Grid item xs={12} lg={6} >
                    <TodoDiv1 >
                        <ReadIcon2 />
                        < TodoTypography >Learn about business</TodoTypography>
                    </TodoDiv1>
                    <TodoDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque molestie
                        elementum, id ut condimentum quis. Vitae nisi, sem facilisis sed fringilla. Nunc,
                        aliquam nunc cras Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque molestie elementum, id ut condimentum quis. Vitae nisi, sem facilisis sed fringilla. Nunc, aliquam nunc cras
                    </TodoDescription>
                    <DataAndTime   >
                        <MainDivDateAndTime >
                            <Typography>28/01/2022</Typography>
                            <Typography>12:00 pm - 1:00 pm</Typography>
                        </MainDivDateAndTime>
                        <HourDiv>
                            <HourIcon />
                            <HoursTypography>1 hour</HoursTypography>
                        </HourDiv>
                    </DataAndTime>
                    <Icondiv >
                        <IconButton aria-label="add to favorites" style={{ color: Colors.light, background: "#2A2A3F", boxShadow: "0px 3.39814px 6.79629px rgba(0, 0, 0, 0.05)" }}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="add to favorites" style={{ color: Colors.light, background: "#2A2A3F", boxShadow: "0px 3.39814px 6.79629px rgba(0, 0, 0, 0.05)" }}>
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="add to favorites" style={{ color: Colors.light, background: "#2A2A3F", boxShadow: "0px 3.39814px 6.79629px rgba(0, 0, 0, 0.05)" }}>
                            <ShareIcon />
                        </IconButton>
                        <CompleteTodoButton >Complete</CompleteTodoButton>
                    </Icondiv>
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
export default AddTodoPage2;