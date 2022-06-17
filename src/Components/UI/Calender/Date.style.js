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


export const PassiveDate = styled(StyledDate)(( ) => ({
  opacity: 0.3,
}));

export const CurrentDate = styled("div")(( ) => ({
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

export const DateContent = styled("span")(( ) => ({
  position: "relative",
  zIndex: 1000,
}));


export const MoonDate = styled("div")(({color }) => ({
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