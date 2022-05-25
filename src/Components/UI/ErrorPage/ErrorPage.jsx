import React from "react";
import { styled } from "@mui/system";

const ErrorPage = () => {
  const Wrapper = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));
  return (
    <Wrapper>
      <h1>Page Not Found</h1>
    </Wrapper>
  );
};

export default ErrorPage;
