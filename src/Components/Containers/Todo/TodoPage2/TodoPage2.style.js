import { styled, Typography } from "@mui/material";
import { Colors } from "../../../../config/palette";



//New Submission
export const NewSubmissionTypography = styled(Typography)(() => ({
    color: Colors.white,
    marginTop: "10px",
    fontSize: "14.8px",
    fontFamily: "Poppins"
}))
//TodoTypography
export const TodoTypography = styled(Typography)(() => ({
    color: "white",
    fontFamily: "Poppins",
    fontSize: "17px",
    marginLeft: "10px"
}))


//TodoDiv2
export const TodoDiv1 = styled('div')(() => ({
    display: "flex",
    marginTop: "20px"
}))

//DataAndTime
export const DataAndTime = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: '0px 15px 0px 10px',
    marginTop: "20px",
    width: "19rem",
    height: "4.5rem",
    background: "#2A2A3F",
    borderLeft: "10px solid #FFD600",
    borderRadius: "9.03226px",
    [theme.breakpoints.down("lg")]: {
        width: "90%"
    }
}))
//TodoDiv2
export const MainDivDateAndTime = styled('div')(() => ({
    display: "flex",
    color: Colors.light,
    marginTop:"10px",
    justifyContent: "space-between"
}))


// TodoDescription

export const TodoDescription = styled("div")(({ theme }) => ({
    fontFamily: '"Poppins", "sans-serif"',
    color: Colors.darkGrey,
    marginTop: "20px",
    [theme.breakpoints.down("lg")]: {
        textAlign: "center"
    },
}));

// Add Todo Button
export const AddTodoButton = styled(Typography)(({ theme }) => ({
    width: "95%",
    background: Colors.info,
    marginTop: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: Colors.light,
    height: "59px",
    border: "none",
    borderRadius: "36.5227px",
    [theme.breakpoints.down("lg")]: {
        height: "40px",
        marginLeft: "5px",
        marginBottom: "10px"
    }

}))

// HoursTypography
export const HoursTypography = styled(Typography)(() => ({
    marginBottom: "4px",
    paddingLeft: "5px",
    color: Colors.light,
}))
// HourDiv
export const HourDiv = styled(Typography)(() => ({
    display: "flex",
    color: Colors.light,

}))
//New Submission
export const AddTodoBox = styled(Typography)(({ theme }) => ({
    marginTop: "15px",
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: 'column',
    background: "#1A1A1C",
    height: "19rem",
    width: "23rem",
    borderRadius: "8px",
    border: "0.25px solid #676F85",
    [theme.breakpoints.down("lg")]: {
        width: "auto",
        height: "18rem"
    },
}))

//CompleteTodoButton
export const CompleteTodoButton = styled('button')(({ theme }) => ({
    width: "50%",
    marginLeft: "30px",
    background: "#259F46",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: Colors.light,
    fontweight: "500",
    height: "59px",
    border: "none",
    borderRadius: "36.5227px",
    [theme.breakpoints.down("lg")]: {
        height: "40px",
        width: "100%"
    }

}))
//Icondiv

export const Icondiv = styled("div")(({ theme }) => ({
    display: "flex",
    marginTop: "50px",
    height: "90px",
    width: "350px",
    justifyContent: 'space-evenly',
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
        width: "100%"
    },
}));