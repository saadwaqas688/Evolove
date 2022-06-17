import { Grid } from "@mui/material";
import React  from "react";
import BoxCom from "../../UI/BoxCom/BoxCom";
import Calender from "../../UI/Calender/Calender";
import ExploreBlogImage from "../../../assets/images/homeOnBoarding/MoonCalendar.jpeg";
import MoonImage from "../../../assets/images/homeOnBoarding/fullMoon.png";

import { Heading, ImageContainer, LeftSideGrid,MoonImageContainer,RightSideGrid, SubHeading, TaskIconAndTextWrapper, TaskTypography, TextContainer } from "./MoonCalendar.style";
import TaskUncompledIcon from "../../../assets/icons/TaskUncompletedIcon";
import { HalfMoon } from "../../../assets/icons/HalfMoon";

const MoonCalendar = ( ) => {

  return (
         <Grid container  spacing={2} sx={{width:{md:"80%",lg:"100%"}}} >
            <LeftSideGrid item xs={12} sm={6} md={12} lg={5}>
            <Heading>Moon Calendar</Heading>
            <SubHeading>Half Moon</SubHeading>
            <BoxCom sx={{background:"#259F46",width:"58px",height:"5px",borderRadius:"50px"}}></BoxCom>
            <ImageContainer src={ExploreBlogImage} alt="Paris" />
            <TextContainer>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
            eleifend odio duis faucibus tempor facilisi amet. In in lectus vitae
            a sit rhoncus aliquet dolor vestibulum. Nisl et dignissim duis
            nulla. Arcu et, aliquet aliquet ornare porttitor. Ultricies auctor
            morbi pellentesque dui bibendum at sollicitudin volutpat. Varius sit
            leo tellus nullam neque , aliquet neque libero vestibulum. Accumsan
            egestas sed ut ele mentum vulputate praesent et interdum. Praesent
            est, tortor congu e justo, nibh ipsum in lorem ut. Euismod molestie
            dictum nulla eg estas pulvinar. Vel tincidunt eget lacus,
            pellentesque ac tellus varius. Ullamcorper sit tincidunt enim
            sagittis sit. Gravida erat neque id blandit faucibus scelerisque.
            Facilisi nunc quis at ves tibulum facilisis sed in ac nunc.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
            eleifend odio duis faucibus tempor facilisi amet. In in lectus vitae
            a sit rhoncus aliquet dolor vestibulum. Nisl et dignissim duis
            nulla. Arcu et, aliquet aliquet ornare porttitor. Ultricies auctor
            morbi pellentesque dui bibendum at sollicitudin volutpat. Varius sit
            leo tellus nullam neque , aliquet neque libero vestibulum. Accumsan
            egestas sed ut ele mentum vulputate praesent et interdum. Praesent
            est, tortor congu e justo, nibh ipsum in lorem ut. Euismod molestie
            dictum nulla eg estas pulvinar. Vel tincidunt eget lacus,
            pellentesque ac tellus varius. Ullamcorper sit tincidunt enim
            sagittis sit. Gravida erat neque id blandit faucibus scelerisque.
            Facilisi nunc quis at ves tibulum facilisis sed in ac nunc.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
            eleifend odio duis faucibus tempor facilisi amet. In in lectus vitae
            a sit rhoncus aliquet dolor vestibulum. Nisl et dignissim duis
            nulla. Arcu et, aliquet aliquet ornare porttitor. Ultricies auctor
            morbi pellentesque dui bibendum at sollicitudin volutpat. Varius sit
            leo tellus nullam neque , aliquet neque libero vestibulum. Accumsan
            egestas sed ut ele mentum vulputate praesent et interdum. Praesent
            est, tortor congu e justo, nibh ipsum in lorem ut. Euismod molestie
            dictum nulla eg estas pulvinar. Vel tincidunt eget lacus,
            pellentesque ac tellus varius. Ullamcorper sit tincidunt enim
            sagittis sit. Gravida erat neque id blandit faucibus scelerisque.
            Facilisi nunc quis at ves tibulum facilisis sed in ac nunc.
          </p>
        </TextContainer>
              </LeftSideGrid>

            <RightSideGrid item xs={12} sm={6} md={12} lg={6} marginLeft="5%">
            <BoxCom sx={{marginTop:"90px"}}>
        <Calender />
          </BoxCom>
          <BoxCom sx={{display:"flex",alignItems:'center'}}>
          <TaskIconAndTextWrapper >
          <TaskUncompledIcon color="yellow"/>
          <BoxCom sx={{marginLeft:"10px",marginTop:"3px"}}>
          <MoonImageContainer src={MoonImage} alt="Paris" />
          </BoxCom>
          <TaskTypography>
           Full Moon
          </TaskTypography>
          </TaskIconAndTextWrapper>

          <TaskIconAndTextWrapper sx={{marginLeft:"12px"}} >
          <TaskUncompledIcon color="green"/>
          <BoxCom sx={{marginLeft:"10px",marginTop:"3px"}}>
          <HalfMoon/>
          </BoxCom>
          <TaskTypography>
           Half Moon
          </TaskTypography>
          </TaskIconAndTextWrapper>


   
           
          </BoxCom>

          </RightSideGrid>

  
            </Grid>
    
  );
};

export default MoonCalendar;