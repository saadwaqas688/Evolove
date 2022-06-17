import { styled } from "@mui/system";
import { Colors } from "../../../config/palette";
export const StyledDate = styled("button")(({ theme }) => ({
  background: "transparent",
  outline: "none",
  border: "none",
  color: Colors.dimGrey,
  cursor: "pointer",
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledRangedDateStart = styled(StyledDate)(({ theme }) => ({
  "&::before": {
    content: '""',
    background: "blue",
    opacity: 0.2,
    position: "absolute",
    height: "25px",
    top: "50%",
    transform: "translateY(-50%)",
    left: "20%",
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
    right: 0,
  },
}));

export const StyledRangedDateEnd = styled(StyledDate)(({ theme }) => ({
  "&::before": {
    content: '""',
    background: "red",
    opacity: 0.2,
    position: "absolute",
    height: "25px",
    top: "50%",
    transform: "translateY(-50%)",
    left: 0,
    right: "20%",
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
  },
}));

export const StyledRangedDateMiddle = styled(StyledDate)(({ theme }) => ({
  "&::before": {
    content: '""',
    background: "green",
    opacity: 0.2,
    position: "absolute",
    height: "25px",
    top: "50%",
    transform: "translateY(-50%)",
    left: 0,
    right: 0,
  },
}));

export const PassiveDate = styled(StyledDate)(({ theme }) => ({
  opacity: 0.3,
}));

export const CurrentDate = styled("div")(({ theme }) => ({
  position: "absolute",
  zIndex: 500,
  top: "50%",
  left: "50%",
  transform: "translateX(-50%) translateY(-50%)",
  width: "30px",
  height: "30px",
  borderRadius: "6px",
  background: "#E63369",
}));

export const DateContent = styled("span")(({ theme }) => ({
  position: "relative",
  zIndex: 1000,
}));


export const MoonDate = styled("div")(({ theme,color }) => ({
  position: "absolute",
  zIndex: 500,
  top: "50%",
  left: "50%",
  transform: "translateX(-50%) translateY(-50%)",
  border:`2px solid ${color}`,
  borderRadius: "50px",
  paddingLeft:"9px",
  paddingRight:"9px",
  paddingTop:"3px",
  paddingBottom:"3px",
}));