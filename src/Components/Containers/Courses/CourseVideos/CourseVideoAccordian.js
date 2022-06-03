import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BoxCom from '../../../UI/BoxCom/BoxCom';
import { CourseVideoAccordianHeading } from './CourseVideos.style';
import { Colors } from '../../../../config/palette';
import { Divider } from '@mui/material';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange =
    (panel) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <BoxCom sx={{width:"100%"}}>
        <CourseVideoAccordianHeading >
            Intro to the Course
          </CourseVideoAccordianHeading>
      <Accordion sx={{ background:Colors.dark }} expanded={expanded ==='panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:Colors.light}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '50%',color:Colors.light}}>
            General settings
          </Typography>
        
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ width: '50%',color:Colors.light,padding:"10px"}}>
          Welcome Video
          </Typography>
              <Divider sx={{background:"#676F85",paddingLeft:"20px" }}/>
          <Typography sx={{ width: '50%',color:Colors.light,padding:"10px"}}>
          Coach Intrduction
          </Typography>
          <Divider sx={{background:"#676F85",paddingLeft:"20px"}}/>
          <Typography sx={{ width: '50%',color:Colors.light ,padding:"10px"}}>
          Talk about course curriculum
          </Typography>
          <Divider sx={{background:"#676F85",paddingLeft:"20px" }}/>
          <Typography sx={{ width: '50%',color:Colors.light,padding:"10px"}}>
          How you can get more from this course
          </Typography>
          <Divider sx={{background:"#676F85",paddingLeft:"20px" }}/>
          <Typography sx={{ width: '50%',color:Colors.light,padding:"10px"}}>
          Let’s get started
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ background:Colors.dark }}  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon sx={{color:Colors.light}}/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '50%', flexShrink: 0 ,color:Colors.light}}>  Mindfullness</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ width: '50%',color:Colors.light,padding:"10px"}}>
          Mindfullness
          </Typography>
              <Divider sx={{background:"#676F85",paddingLeft:"20px" }}/>
          <Typography sx={{ width: '50%',color:Colors.light,padding:"10px"}}>
          Coach Intrduction
          </Typography>
          <Divider sx={{background:"#676F85",paddingLeft:"20px"}}/>
          <Typography sx={{ width: '50%',color:Colors.light ,padding:"10px"}}>
          Talk about course curriculum
          </Typography>
          <Divider sx={{background:"#676F85",paddingLeft:"20px" }}/>
          <Typography sx={{ width: '50%',color:Colors.light,padding:"10px"}}>
          How you can get more from this course
          </Typography>
          <Divider sx={{background:"#676F85",paddingLeft:"20px" }}/>
          <Typography sx={{ width: '50%',color:Colors.light,padding:"10px"}}>
          Let’s get started
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{ background:Colors.dark }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:Colors.light}}/>}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '50%', flexShrink: 0 ,color:Colors.light}}>
          Thoughts and Feelings
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ width: '50%',color:Colors.light,padding:"10px"}}>
          Mindfullness
          
          </Typography>
          <Divider sx={{background:"#676F85",paddingLeft:"20px" }}/>
          <Typography sx={{ width: '50%',color:Colors.light,padding:"10px"}}>
          Mindfullness
          </Typography>
              <Divider sx={{background:"#676F85",paddingLeft:"20px" }}/>
              <Typography sx={{ width: '50%',color:Colors.light,padding:"10px"}}>
          Mindfullness
          </Typography>
              <Divider sx={{background:"#676F85",paddingLeft:"20px" }}/>
              <Typography sx={{ width: '50%',color:Colors.light,padding:"10px"}}>
          Mindfullness
          </Typography>
              <Divider sx={{background:"#676F85",paddingLeft:"20px" }}/>
              <Typography sx={{ width: '50%',color:Colors.light,padding:"10px"}}>
          Mindfullness
          </Typography>
              <Divider sx={{background:"#676F85",paddingLeft:"20px" }}/>
        </AccordionDetails>
      </Accordion>
  
    </BoxCom>
  );
}