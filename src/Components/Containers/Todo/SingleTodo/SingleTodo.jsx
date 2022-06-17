import React from "react";
import { ClockIcon } from "../../../../assets/icons/ClockIcon";
import TaskCompletedIcon from "../../../../assets/icons/TaskCompletedIcon";
import { TaskDeleteIcon } from "../../../../assets/icons/TaskDeleteIcon";
import { TaskEditIcon } from "../../../../assets/icons/TaskEditIcon";
import TaskShareIcon from "../../../../assets/icons/TaskShareIcon";
import TaskSmallClockIcon from "../../../../assets/icons/TaskSmallClockIcon";
import TaskUncompledIcon from "../../../../assets/icons/TaskUncompletedIcon";
import BoxCom from "../../../UI/BoxCom/BoxCom";


import {ProfileButton,SubHeading, TaskClockIconAndTimeWrapper, TaskDateAndTimeWrapper, TaskDetailTypography, TaskEstimatedTime, TaskIconAndTextWrapper, TaskTime, TaskTimerDetailsWrapper, TaskTimerDetailsWrapperStartColor, TaskTypography } from "./SingleTodo.style";


const SingleTodo = ({setCurrentPage}) => {


  return (<>
            <SubHeading>TO-DO</SubHeading>
            <BoxCom >
          <TaskIconAndTextWrapper>
          <TaskUncompledIcon color="yellow"/>
          <TaskTypography>
           Learn about business
          </TaskTypography>
          </TaskIconAndTextWrapper>
          <TaskDetailTypography>
          Lorem ipsum dolor sit amet, consectetur ading
           elit. Duis neque molestie elementum, id ut condimentum 
           quis. Vitae nisi, sem facilisis sed fringilla. Nunc, aliquam
            nunc cras Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Duis neque molestie elementum, id
             ut condimentum quis. Vitae nisi, sem facilisis sed f
             ringilla. Nunc, aliquam nunc cras
          </TaskDetailTypography>
          <TaskTimerDetailsWrapper>

            <TaskTimerDetailsWrapperStartColor >
            </TaskTimerDetailsWrapperStartColor>
            <div>
            <TaskDateAndTimeWrapper>
            <TaskTime sx={{marginLeft:"10px"}}>
              28/06/2022 
            </TaskTime>
            <TaskTime sx={{marginLeft:"25px"}}>
              9:00 am-10:00 am
            </TaskTime>
            </TaskDateAndTimeWrapper>

            <TaskClockIconAndTimeWrapper>
            <TaskSmallClockIcon/>
            <TaskEstimatedTime sx={{marginLeft:"10px",marginTop:"2px"}}>
              1 hour
            </TaskEstimatedTime>
            </TaskClockIconAndTimeWrapper>

           
            </div>


       
          </TaskTimerDetailsWrapper>


          </BoxCom>
       
          <BoxCom sx={{display:"flex",alignItems:"center",justifyContent:"space-evenly",marginTop:"40px"}}>
          <BoxCom>
          <TaskDeleteIcon/>
          </BoxCom>
            <BoxCom onClick={()=>setCurrentPage("todoForm")} sx={{marginLeft:"15px"}}>
          <TaskEditIcon/>
            </BoxCom>
            <BoxCom sx={{marginLeft:"15px"}}>
          <TaskShareIcon/>
            </BoxCom>

          <ProfileButton variant="contained"  onClick={()=>setCurrentPage("allTodo")} sx={{marginLeft:"15px"}} >Complete</ProfileButton>
          </BoxCom>
          </>
  );
};

export default SingleTodo;