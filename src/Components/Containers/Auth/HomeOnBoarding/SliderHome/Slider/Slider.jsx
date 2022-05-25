import { Lens } from "@mui/icons-material";
import { Radio, Slide, Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Colors } from "../../../../../../config/palette";
import { PromotionsContainer, SlideImage } from "./Slider.style";
import SliderImage from"../../../../../../assets/images/homeOnBoarding/homeTop.png"



const messages = [
  "1 off on your  Image",
  "2 off on your  Image!",

  "3 off on your  Image",

];
export default function Slider() {
  const containerRef = useRef();
  const [show, setShow] = useState(true);
    const [messageIndex, setMessageIndex] = useState(0);
    useEffect(() => {
            setTimeout(() => {
              setShow(false);
            }, 1000);
    const intervalId = setInterval(() => {
      // get next message
      setMessageIndex((i) => (i + 1) % messages.length);

      // slide the message in
        setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <PromotionsContainer ref={containerRef} overflow="hidden">
          <Box     sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "20px",
            }}>
      <Slide
        direction={show ? "left" : "right"}
        in={show}
        container={containerRef.current}
        timeout={{
          enter: 500,
          exit: 500,
        }}
      >  
        
        <Box display="flex" justifyContent="center" alignItems="center">
          <SlideImage src={SliderImage}/>
          {/* <MessageText>
            {messages[messageIndex]}
          </MessageText> */}
        </Box>
      </Slide>
      <Box display="flex" justifyContent="center" alignItems="center">
      <Radio
      sx={{color:Colors.light}}
      checkedIcon={<Lens sx={{color:Colors.info}}/>}

  checked={messageIndex===0?true:false}
  onChange={()=>setMessageIndex(0)}
  // value="a"
  name="radio-buttons"
  inputProps={{ 'aria-label': 'A' }}
/>
<Radio
      sx={{color:Colors.light}}

  checked={messageIndex===1?true:false}

  // checked={selectedValue === 'b'}
  checkedIcon={<Lens sx={{color:Colors.info}}/>}

  onChange={()=>setMessageIndex(1)}
  value="b"
  name="radio-buttons"
  inputProps={{ 'aria-label': 'B' }}
/>
<Radio
      sx={{color:Colors.light}}

  checked={messageIndex===2?true:false}
  // checkedIcon={<Lens sx={{color:"red"}}/>}
  checkedIcon={<Lens sx={{color:Colors.info}}/>}

  // checked={selectedValue === 'b'}
  onChange={()=>setMessageIndex(2)}
  value="b"
  name="radio-buttons"
  inputProps={{ 'aria-label': 'B' }}
/>
</Box>
</Box>

    </PromotionsContainer>
  );
}
