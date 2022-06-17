import { Grid } from "@mui/material";
import React, { useState } from "react";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import Calender from "../../../UI/Calender/Calender";


import { LeftSideGrid, RightSideGrid} from "./Todo.style";
import TodoForm from "../TodoForm/TodoForm";
import AllTodo from "../AllTodo/AllTodo";
import SingleTodo from "../SingleTodo/SingleTodo";


const Todo = ( ) => {
  const [currentPage,setCurrentPage]=useState("allTodo")
  return (
         <Grid container  spacing={2} sx={{width:{md:"80%",lg:"100%"}}} >

            <LeftSideGrid item xs={12} sm={6} md={12} lg={6} >

              { currentPage==="allTodo" ?
                  <AllTodo setCurrentPage={setCurrentPage}/>:
                currentPage==="todoForm" ?
                 <TodoForm setCurrentPage={setCurrentPage}/>:
                <SingleTodo setCurrentPage={setCurrentPage}/>          
              }
              </LeftSideGrid>

            <RightSideGrid item xs={12} sm={6} md={12} lg={5} marginLeft="5%">
            <BoxCom sx={{marginTop:"90px"}}>
        <Calender />
          </BoxCom>

          </RightSideGrid>

  
            </Grid>
    
  );
};

export default Todo;