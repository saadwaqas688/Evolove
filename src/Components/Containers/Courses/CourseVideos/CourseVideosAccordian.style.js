import { styled } from "@mui/material";
import { Colors } from "../../../../config/palette";
import BoxCom from '../../../UI/BoxCom/BoxCom';
import Typography from '@mui/material/Typography';


export const CourseVideoHeading = styled('div')(({ theme }) => ({
    font: "Poppins",
    width: "92px",
    height: "28px",
    paddingLeft: "20px",
    color: Colors.light,
    marginTop: "20px",
    [theme.breakpoints.down("lg")]: {
        textAlign: "center"
    },
}));
export const CourseBox = styled(BoxCom)(({ theme }) => ({
    background: "#1A1A1C",
    height: "auto%",
    // width:"50%",
    paddingBottom: "1.5rem",
    borderRadius: "20.85px",
    border: "0.25px solid #676F85",
    [theme.breakpoints.down("lg")]: {
        textAlign: "center",
        width: "auto",

    },
}));
export const CourseVideoAccordianHeading = styled(Typography)(({ theme }) => ({
    width: "100%",
    height: "28px",
    paddingLeft: "20px",
    color: Colors.white,
    opacity: "0.7 ",
    fontWeight: "bold",
    fontSize: "20px",
    marginTop: "20px",
    [theme.breakpoints.down("lg")]: {
        textAlign: "left"
    },
}));

// style for accordian component
export const CourseVideoAccordianTypography = styled(Typography)(({ theme }) => ({
    width: 'auto',
    color: Colors.light,
    padding: "10px",
    marginLeft: "28px",
    marginRight: "28px",
    opacity: 0.7,
    [theme.breakpoints.down("lg")]: {

    },
}));
export const CourseVideoAccordianAlign = styled('div')(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: Colors.light,
    opacity: 0.7,

}));