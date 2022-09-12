import { styled} from "@mui/material";
import { Colors } from "../../../../config/palette";
import BoxCom from "../../../UI/BoxCom/BoxCom";

  
  export const CourseImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "100%", 
    height:"125px",
    objectFit: "cover",
    borderRadius:"16px",
    [theme.breakpoints.down("md")]: {
      width: "100%", 
      marginLeft:"0px",
      marginTop:"0px",
      // height:'auto',
    },
  }));


  export const IconContainer = styled(BoxCom)(() => ({
    display:"flex",
    marginTop:"-25px",
    justifyContent:"flex-end",
    marginRight:"12px"
  }));

  export const ShareIconContainer = styled(BoxCom)(() => ({
    paddingTop:"5px",
    paddingLeft:"8px",
    paddingRight:"8px",
    borderRadius:"20px",
    background:Colors.dark,
  }));

  export const HeartIconContainer = styled(BoxCom)(() => ({
    paddingTop:"5px",
    paddingLeft:"8px",
    paddingRight:"8px",
    marginLeft:"10px",
    borderRadius:"40px",
    background:Colors.dark,
  }));


  export const NameContainer = styled(BoxCom)(() => ({
    color:Colors.darkGrey,
    marginLeft:"12px",
    marginTop:"10px",
    fontSize:"11px",  
    fontFamily: '"Poppins", "sans-serif"',
  
  }));


  export const CourseNameContainer = styled(BoxCom)(() => ({
    color:"white",
    marginLeft:"12px",
    marginTop:"10px",
    fontSize:"13px",
    fontFamily: '"Poppins", "sans-serif"',
  
  }));

  export const CardFooter = styled(BoxCom)(() => ({
    marginTop:"10px",
    paddingBottom:"10px",
    paddingRight:"10px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
  
  }));