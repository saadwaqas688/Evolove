import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";

const Loader = ({ ...props }) => {
  const Wrapper = styled("div")(( ) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

  return (
    <Wrapper>
      <CircularProgress
        {...props}
        sx={{ color: "lightblue" }}
      />
    </Wrapper>
  );
};

export default Loader;
