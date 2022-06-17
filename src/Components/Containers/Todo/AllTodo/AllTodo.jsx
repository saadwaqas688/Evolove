import React from "react";
import TaskCompletedIcon from "../../../../assets/icons/TaskCompletedIcon";
import TaskUncompledIcon from "../../../../assets/icons/TaskUncompletedIcon";
import BoxCom from "../../../UI/BoxCom/BoxCom";


import {ProfileButton,SubHeading, TaskIconAndTextWrapper, TaskTypography } from "./AllTodo.style";


const AllTodo = ( {setCurrentPage}) => {


  return (<>
            <SubHeading>TO-DO</SubHeading>
            <BoxCom >
          <TaskIconAndTextWrapper onClick={()=>setCurrentPage("singleTodo")}>
          <TaskCompletedIcon/>
          <TaskTypography>
          Read a book
          </TaskTypography>
          </TaskIconAndTextWrapper>
          <TaskIconAndTextWrapper onClick={()=>setCurrentPage("singleTodo")}>
          <TaskUncompledIcon color="yellow"/>
          <TaskTypography>
          Read a book
          </TaskTypography>
          </TaskIconAndTextWrapper>
          <TaskIconAndTextWrapper onClick={()=>setCurrentPage("singleTodo")}>
          <TaskUncompledIcon color="green"/>
          <TaskTypography>
          Learn about business
          </TaskTypography>
          </TaskIconAndTextWrapper>

          </BoxCom>

          <ProfileButton variant="contained" onClick={()=>setCurrentPage("todoForm")} >Add Task</ProfileButton>
          </>
  );
};

export default AllTodo;