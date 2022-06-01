import React from 'react'
import TextField from '@mui/material/TextField';
import AppWrapper from '../Components/UI/AppWrapper/AppWrapperMain/AppWrapper'
import { InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import SearchIcon from '../assets/icons/SearchIcon';
import TextFieldWrapper from '../Components/UI/TextField/TextFieldWrapper';
const Test = () => {
  return (
    // <div style={{height:"100vh",background:"white"}}>
    <div>
      {/* <TextFieldWrapper/> */}
      <AppWrapper/>
      {/* <TextField id="outlined-basic" 
      label="Outlined"
       variant="outlined" 
       InputProps={{
        startAdornment:(
          <InputAdornment position='start'>
            <SearchIcon/>
          </InputAdornment>
        )
       }}
       /> */}
    </div>
  )
}

export default Test
