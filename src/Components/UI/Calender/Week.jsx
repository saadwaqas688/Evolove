import React from "react";
import DateComp from "./Date";
import add from "date-fns/add";
import isSameDay from "date-fns/isSameDay";
import isBefore from "date-fns/isBefore";
import isAfter from "date-fns/isAfter";
import startOfWeek from "date-fns/startOfWeek";
import endOfWeek from "date-fns/endOfWeek";

const Week = ({
  clickDateHandler,
  dateIndex,
  month,
  selections,
  weekIndex,
  first,
}) => {
  const [rangeTypeTest, setRangeTypeTest] = React.useState("");
  const [isCurrent, setIsCurrent] = React.useState(false);

  const dateToRender = add(first, {
    days: dateIndex,
    weeks: weekIndex,
  });

  React.useEffect(() => {
    getRangeType();
  }, [selections, month]);


  const getRangeType = () => {
    setIsCurrent(
      (selections.start && isSameDay(dateToRender, selections.start)) 
      // ||d
      //   (selections.end && isSameDay(dateToRender, selections.end))
    );

    if (selections.end) {
      if (
        isBefore(dateToRender, selections.start) ||
        isAfter(dateToRender, selections.end)
      ) {
        setRangeTypeTest("");
      } else {
        setRangeTypeTest("middle");
        const [startWeek, endWeek] = [
          startOfWeek(dateToRender),
          endOfWeek(dateToRender),
        ];
        if (isSameDay(dateToRender, startWeek)) {
          setRangeTypeTest("start");
        }
        if (isSameDay(dateToRender, endWeek)) {
          setRangeTypeTest("end");
        }
        if (isSameDay(dateToRender, selections.start)) {
          setRangeTypeTest("start");
        }

        if (isSameDay(dateToRender, selections.end)) {
          setRangeTypeTest("end");
        }
      }
    } else {
      setRangeTypeTest("");
    }
  };

  // console.log("rangeTypeTest",rangeTypeTest)

  return (
    <DateComp
      rangeType={rangeTypeTest}
      isCurrent={isCurrent}
      id={dateToRender}
      date={dateToRender.getDate()}
      isActive={dateToRender.getMonth() === month}
      onClick={clickDateHandler}
    />
  );
};

export default Week;
