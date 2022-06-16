import { Grid } from "@mui/material";
import React, { useState } from "react";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import TextfieldComp from "../../../UI/TextFieldCom/Textfield";
import Calender from "../../../UI/Calender/Calender";


import { CardText, FieldLabel,  FieldWrapper,LeftSideGrid, ProfileButton, RightSideGrid, SubHeading } from "./Todo.style";


const Todo = ( ) => {
  const [taskName,setTaskName]=useState("Read a book")
  const [date,setDate]=useState("20/01/2022")
  const [time,setTime]=useState("9am-10am")
  const [taskDetails,setTaskDetails]=useState("")


  return (
         <Grid container  spacing={2} sx={{width:{md:"80%",lg:"100%"}}} >
            <LeftSideGrid item xs={12} sm={6} md={12} lg={5}>
            <SubHeading>TO-DO</SubHeading>
            <BoxCom sx={{marginTop:"20px"}}>
          <FieldLabel>Date</FieldLabel>
          <TextfieldComp
                  height="45px"
                  width="100%"
                  autoComplete="false"
                  onChange={(e) => setDate(e.target.value)}
                  name="date"
                  value={date}
                  justifyproperty="flex-start"
                  alignproperty="null"
                  icon={true}
                  iconPosition="end"
                  iconType="calendar"
                />
          </BoxCom>

          <BoxCom sx={{marginTop:"40px"}}>
         <BoxCom sx={{display:'flex',justifyContent:"space-between",width:"100%"}}>
          <FieldLabel>Time</FieldLabel>
          </BoxCom>
          <TextfieldComp
                  height="45px"
                  width="100%"
                  autoComplete="false"
                  onChange={(e) => setTime(e.target.value)}
                  name="time"
                  value={time}
                  justifyproperty="flex-start"
                  alignproperty="null"
                  icon={true}
                  iconPosition="end"
                  iconType="clock"
                />
          </BoxCom>
          <BoxCom sx={{marginTop:"40px"}}>
         <BoxCom sx={{display:'flex',justifyContent:"space-between",width:"100%"}}>
          <FieldLabel>Task Name</FieldLabel>
          </BoxCom>
          <TextfieldComp
                  height="45px"
                  width="100%"
                  autoComplete="false"
                  onChange={(e) => setTaskName(e.target.value)}
                  name="taskName"
                  value={taskName}
                  justifyproperty="flex-start"
                  alignproperty="null"
                />
          </BoxCom>

    <BoxCom sx={{marginTop:"40px"}}>
         <BoxCom sx={{display:'flex',justifyContent:"space-between",width:"100%"}}>
          <FieldLabel>Task Details</FieldLabel>
          </BoxCom>
          <TextfieldComp
                  width="100%"
                  autoComplete="false"
                  onChange={(e) => setTaskDetails(e.target.value)}
                  name="taskDetails"
                  value={taskDetails}
                  justifyproperty="flex-start"
                  alignproperty="null"
                  multiLine={true} 
                  height="220px"
                />
          </BoxCom>
          <ProfileButton variant="contained" >Continue</ProfileButton>
            </LeftSideGrid>

            <RightSideGrid item xs={12} sm={6} md={12} lg={5} marginLeft="10%">
            <BoxCom sx={{marginTop:"90px"}}>
        <Calender />
          </BoxCom>

          </RightSideGrid>

  
            </Grid>
    
  );
};

export default Todo;