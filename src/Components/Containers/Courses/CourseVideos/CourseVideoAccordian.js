import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import BoxCom from '../../../UI/BoxCom/BoxCom';
import { CourseBox, CourseVideoAccordianAlign, CourseVideoAccordianHeading, CourseVideoAccordianTypography } from './CourseVideosAccordian.style';
import { Colors } from '../../../../config/palette';
import { Divider, Grid } from '@mui/material';
import { borderRadius } from '@mui/system';

export default function CourseAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange =
    (panel) => (event,isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Grid container spacing={1} >
      <Grid item xs={12} lg={12}>
        <CourseBox >
          <CourseVideoAccordianHeading >
            Curriculum
          </CourseVideoAccordianHeading>

          <CourseVideoAccordianHeading >
            Intro to the Course
          </CourseVideoAccordianHeading>
          <Accordion sx={{ background: Colors.dark, border: "0.25px solid #676F85" }} disableGutters={true} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: Colors.light }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <CourseVideoAccordianTypography >
                Welcome Video
              </CourseVideoAccordianTypography>

            </AccordionSummary>
            <AccordionDetails>
              <CourseVideoAccordianAlign  >
                <CourseVideoAccordianTypography >
                  Welcome Video
                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign>
              <Divider sx={{ background: "#676F85", opacity: 0.7, marginRight: "40px", marginLeft: "40px" }} />
              <CourseVideoAccordianAlign  >
                <CourseVideoAccordianTypography >
                  Coach Intrduction
                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign  >
              <Divider sx={{ background: "#676F85", opacity: 0.7, marginRight: "40px", marginLeft: "40px" }} />
              <CourseVideoAccordianAlign  >
                <CourseVideoAccordianTypography >
                  Talk about course curriculum
                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign  >
              <Divider sx={{ background: "#676F85", opacity: 0.7, marginRight: "40px", marginLeft: "40px" }} />
              <CourseVideoAccordianAlign  >
                <CourseVideoAccordianTypography >
                  How you can get more from this course
                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign  >
              <Divider sx={{ background: "#676F85", opacity: 0.7, marginRight: "40px", marginLeft: "40px" }} />
              <CourseVideoAccordianAlign  >
                <CourseVideoAccordianTypography >
                  Let’s get started
                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign  >
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ background: Colors.dark, border: "0.25px solid #676F85" }} disableGutters={true} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: Colors.light }} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <CourseVideoAccordianTypography >
                Mindfullness

              </CourseVideoAccordianTypography>

            </AccordionSummary>
            <AccordionDetails>
              <CourseVideoAccordianAlign  >
                <CourseVideoAccordianTypography >
                  Mindfullness
                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign  >
              <Divider sx={{ background: "#676F85", opacity: 0.7, marginRight: "40px", marginLeft: "40px" }} />
              <CourseVideoAccordianAlign  >
                <CourseVideoAccordianTypography >
                  Coach Intrduction
                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign  >
              <Divider sx={{ background: "#676F85", paddingLeft: "20px", opacity: 0.7, marginRight: "40px", marginLeft: "40px" }} />
              <CourseVideoAccordianAlign  >
                <CourseVideoAccordianTypography >
                  Talk about course curriculum
                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign  >
              <Divider sx={{ background: "#676F85", paddingLeft: "20px", opacity: 0.7, marginRight: "40px", marginLeft: "40px" }} />
              <CourseVideoAccordianAlign  >
                <CourseVideoAccordianTypography >
                  How you can get more from this course
                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign  >
              <Divider sx={{ background: "#676F85", paddingLeft: "20px", opacity: 0.7, marginRight: "40px", marginLeft: "40px" }} />
              <CourseVideoAccordianAlign  >
                <CourseVideoAccordianTypography >
                  Let’s get started
                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ background: Colors.dark, border: "0.25px solid #676F85" }} disableGutters={true} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: Colors.light }} />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <CourseVideoAccordianTypography >
                Thoughts and Feelings
              </CourseVideoAccordianTypography>

            </AccordionSummary>
            <AccordionDetails>
              <CourseVideoAccordianAlign>
                <CourseVideoAccordianTypography >
                  Mindfullness

                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign>
              <Divider sx={{ background: "#676F85", paddingLeft: "20px", opacity: 0.7, marginRight: "40px", marginLeft: "40px" }} />
              <CourseVideoAccordianAlign>
                <CourseVideoAccordianTypography >
                  Mindfullness
                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign>
              <Divider sx={{ background: "#676F85", paddingLeft: "20px", opacity: 0.7, marginRight: "40px", marginLeft: "40px" }} />
              <CourseVideoAccordianAlign>
                <CourseVideoAccordianTypography >
                  Mindfullness
                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign>
              <Divider sx={{ background: "#676F85", paddingLeft: "20px", opacity: 0.7, marginRight: "40px", marginLeft: "40px" }} />
              <CourseVideoAccordianAlign>
                <CourseVideoAccordianTypography >
                  Mindfullness
                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign>
              <Divider sx={{ background: "#676F85", paddingLeft: "20px", opacity: 0.7, marginRight: "40px", marginLeft: "40px" }} />
              <CourseVideoAccordianAlign>
                <CourseVideoAccordianTypography >
                  Mindfullness
                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ background: Colors.dark, border: "0.25px solid #676F85" }} disableGutters={true} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: Colors.light }} />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <CourseVideoAccordianTypography >
                Forgiveness
              </CourseVideoAccordianTypography>

            </AccordionSummary>
            <AccordionDetails>
              <CourseVideoAccordianAlign>
                <CourseVideoAccordianTypography >
                  Mindfullness

                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign>
              <Divider sx={{ background: "#676F85", paddingLeft: "20px", opacity: 0.7, marginRight: "40px", marginLeft: "40px" }} />
              <CourseVideoAccordianAlign>
                <CourseVideoAccordianTypography >
                  Mindfullness
                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign>
              <Divider sx={{ background: "#676F85", paddingLeft: "20px", opacity: 0.7, marginRight: "40px", marginLeft: "40px" }} />
              <CourseVideoAccordianAlign>
                <CourseVideoAccordianTypography >
                  Mindfullness
                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign>
              <Divider sx={{ background: "#676F85", paddingLeft: "20px", opacity: 0.7, marginRight: "40px", marginLeft: "40px" }} />
              <CourseVideoAccordianAlign>
                <CourseVideoAccordianTypography >
                  Mindfullness
                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign>
              <Divider sx={{ background: "#676F85", paddingLeft: "20px", opacity: 0.7, marginRight: "40px", marginLeft: "40px" }} />
              <CourseVideoAccordianAlign>
                <CourseVideoAccordianTypography >
                  Mindfullness
                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ background: Colors.dark, border: "0.25px solid #676F85" }} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: Colors.light }} />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <CourseVideoAccordianTypography >
                Outro of the course
              </CourseVideoAccordianTypography>

            </AccordionSummary>
            <AccordionDetails >
              <CourseVideoAccordianAlign>
                <CourseVideoAccordianTypography >
                  Mindfullness

                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign>
              <Divider sx={{ background: "#676F85", opacity: 0.7, marginRight: "40px", marginLeft: "40px" }} />
              <CourseVideoAccordianAlign>
                <CourseVideoAccordianTypography >
                  Mindfullness
                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign>

              <Divider sx={{ background: "#676F85", opacity: 0.7, marginRight: "40px", marginLeft: "40px" }} />
              <CourseVideoAccordianAlign>

                <CourseVideoAccordianTypography >
                  Mindfullness
                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign>

              <Divider sx={{ background: "#676F85", opacity: 0.7, marginRight: "40px", marginLeft: "40px" }} />
              <CourseVideoAccordianAlign>

                <CourseVideoAccordianTypography >
                  Mindfullness
                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign>

              <Divider sx={{ background: "#676F85", opacity: 0.7, marginRight: "40px", marginLeft: "40px" }} />
              <CourseVideoAccordianAlign>

                <CourseVideoAccordianTypography >
                  Mindfullness
                </CourseVideoAccordianTypography>
                <CourseVideoAccordianTypography >
                  1:45
                </CourseVideoAccordianTypography>
              </CourseVideoAccordianAlign>

            </AccordionDetails>
          </Accordion>

        </CourseBox>
      </Grid>
    </Grid>
  );
}
