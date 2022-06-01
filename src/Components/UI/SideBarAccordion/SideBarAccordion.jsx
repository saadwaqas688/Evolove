import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BoxCom from '../BoxCom/BoxCom';
import { BellIcon } from '../../../assets/icons/BellIcon';
import { Colors } from '../../../config/palette';

export default function SideBarAccordion() {
  return (
    <div>
      <Accordion sx={{background:"#1A1A1C",boxShadow:"none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:Colors.light}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{marginLeft:"80px",alignText:'center',marginRight:"50px"}}
        >  
        <BoxCom sx={{display:'flex',alignItems:"center",justifyContent:"center"}}>
        <BellIcon/>
        <Typography  sx={{color:Colors.light,fontSize:"12px",fontFamily: '"Poppins", "sans-serif"',marginLeft:"5px"}}>
         Notifications
        </Typography>
        </BoxCom>
   
        </AccordionSummary>
        <AccordionDetails sx={{background:"#1D1D1E",marginBottom:"15px"}}>
          <BoxCom sx={{marginBottom:"20px"}}>
          <Typography sx={{color:Colors.light,fontSize:"10px",fontFamily: '"Poppins", "sans-serif"'}}>
          You have successfully Enrolled in the meditation mastery course
          </Typography>
          <Typography sx={{color:Colors.light,fontSize:"8px",fontFamily: '"Poppins", "sans-serif"',textAlign:"right",lineHeight:"0px"}}>
          23 December 2022
          </Typography>
          </BoxCom>
          <BoxCom >
          <Typography sx={{color:Colors.light,fontSize:"10px",fontFamily: '"Poppins", "sans-serif"'}}>
          You have successfully Enrolled in the meditation mastery course
          </Typography>
          <Typography sx={{color:Colors.light,fontSize:"8px",fontFamily: '"Poppins", "sans-serif"',textAlign:"right",lineHeight:"0px"}}>
          23 December 2022
          </Typography>
          </BoxCom>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}

