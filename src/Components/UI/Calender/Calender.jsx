import React from "react";
import * as StyledComponents from "./Calender.style";
import { IconButton } from "@mui/material";
import * as Icons from "./icons";
import WeekEach from "./Week";
import sub from "date-fns/sub";
import setDate from "date-fns/setDate";
import days from "./days.static";
import months from "./months.static";
import isAfter from "date-fns/isAfter";
const {
  Wrapper,
  MonthSelector,
  Month,
  Year,
  Week,
  Days,
  Day,
  ConfigSelectorContainer,
} = StyledComponents;

const getFirstDayOfMonth = (date, month, year) => {
  const dt = new Date(year, month, date);
  return setDate(dt, 1);
};

const Calender = ({isMoonCalander} ) => {
  const currentDate = new Date();

  //   states
  const [month, setMonth] = React.useState(currentDate.getMonth());
  const [year, setYear] = React.useState(currentDate.getFullYear());
  const [selectedDay,setSelectedDay]=React.useState(currentDate.getDate())
  const first = getFirstDayOfMonth(currentDate.getDate(), month, year);
  const firstDay = sub(first, { days: first.getDay() });
  const [selections, setSelections] = React.useState({
    start: currentDate,
    end:null
  });

  //   handlers
  const prevMonthHandler = (e) => {
    if (month === 0) {
      setYear((prevState) => prevState - 1);
      return setMonth(11);
    }
    setMonth((prevState) => prevState - 1);
  };

  const nextMonthHandler = (e) => {
    if (month === 11) {
      setYear((prevState) => prevState + 1);
      return setMonth(0);
    }
    setMonth((prevState) => prevState + 1);
  };

  const clickDateHandler = (e) => {
    const selectedDate = new Date(e.currentTarget.getAttribute("id"));
    setSelectedDay(selectedDate.getDate())
    let temp = { ...selections };
    const {start}=temp;
    //  temp={start:selectedDate,end:null}
    if (!selections.end) {
      if (isAfter(start, selectedDate)) {
        temp = {
          start: selectedDate,
          end: selectedDate,
        };
      } else {
        temp = {
          end: selectedDate,
          start,
        };
      }
    } else {
      temp = {
        start: selectedDate,
        end: null,
      };
    }
    setSelections(temp);
    setMonth(selectedDate.getMonth());
  };

  console.log("selectedDay",selectedDay)
  return (
    <Wrapper >
      <MonthSelector>
        <IconButton onClick={prevMonthHandler}>
          <Icons.Left />
        </IconButton>
        <ConfigSelectorContainer
          style={{ cursor: "pointer" ,fontSize:"20px",fontFamily: '"Poppins", "sans-serif"', }}
        >
          <Month>{months[month]}</Month>
          <Year>{year}</Year>
        </ConfigSelectorContainer>
        <IconButton onClick={nextMonthHandler}>
          <Icons.Right />
        </IconButton>
      </MonthSelector>
      <Days>
        {days.map((day, index) => (
          <Day key={index}>{day}</Day>
        ))}
      </Days>
      {[...new Array(5)].map((_, weekIndex) => {
        return (
          <Week key={weekIndex} >
            {[...new Array(7)].map((_, dateIndex) => {
              return (
                <WeekEach
                  key={dateIndex}
                  clickDateHandler={clickDateHandler}
                  dateIndex={dateIndex}
                  month={month}
                  selections={selections}
                  weekIndex={weekIndex}
                  first={firstDay}
                  selectedDay={selectedDay}
                  isMoonCalander={isMoonCalander}
                />
              );
            })}
          </Week>
        );
      })}
    </Wrapper>
  );
};

export default Calender;
