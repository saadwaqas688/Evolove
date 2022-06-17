import React from "react";
import DateComp from "./Date";
import add from "date-fns/add";
import isSameDay from "date-fns/isSameDay";
const Week = ({
  clickDateHandler,
  dateIndex,
  month,
  selections,
  weekIndex,
  first,
  selectedDay,
  isMoonCalander
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
    );

      setRangeTypeTest("");
    }

  return (
    <DateComp
      rangeType={rangeTypeTest}
      isCurrent={isCurrent}
      id={dateToRender}
      date={dateToRender.getDate()}
      isActive={dateToRender.getMonth() === month}
      onClick={clickDateHandler}
      selectedDay={selectedDay}
      isMoonCalander={isMoonCalander}
    />
  );
};

export default Week;
