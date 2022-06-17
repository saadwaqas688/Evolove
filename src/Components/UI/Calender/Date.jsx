import React from "react";
import {
  StyledDate,
  PassiveDate,
  CurrentDate,
  DateContent,
  MoonDate,
} from "./Date.style";
const Date = ({ rangeType, isCurrent, isActive, date,selectedDay, ...props }) => {
  console.log('date',date)
      return (
        <React.Fragment>
          {
          isActive ? (
            <StyledDate {...props}>
              {selectedDay===date && <CurrentDate>&nbsp;</CurrentDate>}
              {date ===14 && <MoonDate color="yellow">&nbsp;</MoonDate>}
              {date ===16 && <MoonDate color="green">&nbsp;</MoonDate>}

              <DateContent>{date}</DateContent>
            </StyledDate>
          ) : 
          (
            <PassiveDate {...props}>{date}</PassiveDate>
          )}
        </React.Fragment>
      );
  }

export default Date;

Date.defaultProps = {
  date: 0,
};
