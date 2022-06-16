import React from "react";
import {
  StyledDate,
  PassiveDate,
  CurrentDate,
  DateContent,
  StyledRangedDateStart,
  StyledRangedDateEnd,
  StyledRangedDateMiddle,
} from "./Date.style";
const Date = ({ rangeType, isCurrent, isActive, date, ...props }) => {
  switch ("default") {
    case "start":
      return (
        <React.Fragment>
          {isActive ? (
            <StyledRangedDateStart {...props}>
              {isCurrent && <CurrentDate>&nbsp;</CurrentDate>}
              <DateContent>{date}</DateContent>
            </StyledRangedDateStart>
          ) : (
            <PassiveDate {...props}>{date}</PassiveDate>
          )}
        </React.Fragment>
      );
    case "end":
      return (
        <React.Fragment>
          {isActive ? (
            <StyledRangedDateEnd {...props}>
              {isCurrent && <CurrentDate>&nbsp;</CurrentDate>}
              <DateContent>{date}</DateContent>
            </StyledRangedDateEnd>
          ) : (
            <PassiveDate {...props}>{date}</PassiveDate>
          )}
        </React.Fragment>
      );
    case "middle":
      return (
        <React.Fragment>
          {isActive ? (
            <StyledRangedDateMiddle {...props}>
              {isCurrent && <CurrentDate>&nbsp;</CurrentDate>}
              <DateContent>{date}</DateContent>
            </StyledRangedDateMiddle>
          ) : (
            <PassiveDate {...props}>{date}</PassiveDate>
          )}
        </React.Fragment>
      );
    default:
      return (
        <React.Fragment>
          {
          isActive ? (
            <StyledDate {...props}>
              {isCurrent && <CurrentDate>&nbsp;</CurrentDate>}
              <DateContent>{date}</DateContent>
            </StyledDate>
          ) : 
          (
            <PassiveDate {...props}>{date}</PassiveDate>
          )}
        </React.Fragment>
      );
  }
};

export default Date;

Date.defaultProps = {
  date: 0,
};
