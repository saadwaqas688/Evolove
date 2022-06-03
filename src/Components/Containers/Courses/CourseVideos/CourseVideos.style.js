import { styled } from "@mui/material";
import { Colors } from "../../../../config/palette";
import BoxCom from '../../../UI/BoxCom/BoxCom';
import Typography from '@mui/material/Typography';


export const CourseVideoHeading = styled('div')(({ theme }) => ({
font:"Poppins",
width:"92px",
height:"28px",
paddingLeft: "20px" ,
color:Colors.light,
marginTop:"20px",
[theme.breakpoints.down("md")]: {
textAlign:"center"
},
}));
export const CourseBox = styled(BoxCom)(({ theme }) => ({
    background:"#1A1A1C" ,
    border:"1px solid #676F85",
    height:"417px",
    width:"55%",
    borderRadius:"19.85px",
    [theme.breakpoints.down("md")]: {
    textAlign:"center"
    },
    }));
    export const CourseVideoAccordianHeading = styled(Typography)(({ theme }) => ({
        font:"Poppins",
        width:"92px",
        height:"28px",
        paddingLeft: "20px" ,
        color:Colors.white,
        marginTop:"20px",
        [theme.breakpoints.down("md")]: {
        textAlign:"center"
        },
        }));