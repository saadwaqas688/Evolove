import { CourseImage } from "./HomeCourseCard.style";
 import cardImage from "../../../../assets/images/homeOnBoarding/courseCard.png";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import { Typography } from "@mui/material";
import Button from "../../../UI/Button/Button";
import { Colors } from "../../../../config/palette";
import { ShareIcon } from "../../../../assets/icons/ShareIcon";
import { HeartIcon } from "../../../../assets/icons/HeartIcon";
  
  const HomeCourseCard = () => {
    return (
  <BoxCom sx={{background:Colors.dark,borderRadius:"16px"}}>

    <CourseImage src={cardImage} alt="Paris" />
    <BoxCom  sx={{display:"flex",marginTop:"-25px",justifyContent:"flex-end",marginRight:"12px"}}>

    <BoxCom sx={{paddingTop:"5px",paddingLeft:"8px",paddingRight:"8px",borderRadius:"20px",background:Colors.dark}}>
   <ShareIcon />
    </BoxCom>
   <BoxCom sx={{paddingTop:"5px",paddingLeft:"8px",paddingRight:"8px",marginLeft:"10px",borderRadius:"40px",background:Colors.dark}}>
    <HeartIcon/>
   </BoxCom>
    </BoxCom>
    <BoxCom >
    <Typography variant="body1" sx={{color:Colors.darkGrey,marginLeft:"12px",marginTop:"10px",fontSize:"11px",   fontFamily: '"Poppins", "sans-serif"'
}}>
     Dr.John Kevin
    </Typography>
    <Typography variant="body1" sx={{color:"white",marginLeft:"12px",marginTop:"10px",fontSize:"13px",fontFamily: '"Poppins", "sans-serif"'}}>
     Master of Spirituality
    </Typography>
    <BoxCom sx={{marginTop:"10px",paddingBottom:"10px",paddingRight:"10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    <Typography variant="body1" sx={{color:"#0AB27D",marginLeft:"12px"}}>
     $59.99
    </Typography>
    <Button variant="contained" size="small" sx={{width:"80px",height:"25px",fontSize:"10px"}} >Buy Now</Button>
    </BoxCom>
    </BoxCom>

  </BoxCom>


  );
  };
  
  export default HomeCourseCard;
  
  