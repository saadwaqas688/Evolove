import React from "react";
import AlertComp from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Alert = ({ severity, message, title }) => {
  return (
    <AlertComp severity={severity}>
      <AlertTitle>{title}</AlertTitle>
      {message}
    </AlertComp>
  );
};
export default Alert;

Alert.defaultProps = {
  severity: "info",
  message: "",
  title: "",
};
