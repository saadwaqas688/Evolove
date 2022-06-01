import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BoxCom from '../BoxCom/BoxCom';
import { Colors } from '../../../config/palette';
import SideBarCategoriesLinks from '../SideBarCategorieLinks/SideBarCategoriesLinks';

export default function SideBarCategoriesAccordion() {
  return (
    <div>
      <Accordion sx={{background:"#1A1A1C",boxShadow:"none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:Colors.light}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{marginLeft:"80px",alignText:'center',marginRight:"60px"}}
        >  
        <BoxCom sx={{display:'flex',alignItems:"center",justifyContent:"center"}}>
        <Typography  sx={{color:Colors.light,fontSize:"12px",fontWeight:"bold",fontFamily: '"Poppins", "sans-serif"',marginLeft:"15px"}}>
         Categories
        </Typography>
        </BoxCom>
   
        </AccordionSummary>
        <SideBarCategoriesLinks/>

      </Accordion>
     
    </div>
  );
}

