import React from "react";
import { DateTime, Info } from "luxon";
import Button from "./Button";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface CalendarProps {
  nowDt: DateTime;
}

interface DayItem {
  month: string;
  date: number;
}

export default function Calendar(props: CalendarProps) {
  const { nowDt } = props;

  const weekLength = weekDays.length;

  const firstDayOfMonth = nowDt.startOf("month"); 
  const firstDay = firstDayOfMonth.weekday;             
  const firstDayOffset = firstDay % weekLength;  
  
  const lastDayofMonth = nowDt.endOf("month");
  const lastDay = lastDayofMonth.weekday;
  const lastDayOffset = weekLength - lastDay - 1

  const days: DayItem[] = new Array(nowDt.daysInMonth + firstDayOffset + lastDayOffset)
    .fill(null)
    .map((_, i: number) => {
      const date = firstDayOfMonth
        .minus({ days: firstDayOffset }) 
        .plus({ days: i });

      return {
        month: date.monthLong,
        date: date.day,
      };
    });

  const buildHeader = (headerArr: string[]) => {
    return (
      <tr>
        {headerArr.map(item => <th>{item}</th>)}
      </tr>
    );
  };

  const buildWeek = (headerArr: DayItem[]) => {
    return (
      <tr>
        {headerArr.map(item => <td>{item.date}</td>)}
      </tr>
    );
  };

  const buildMonth = (days: DayItem[]) => {
    const foo: DayItem[][] = [];

    const numOfWeeks = Math.ceil(days.length / weekLength);

    for (let i = 0; i < numOfWeeks; i++) {
      foo.push([...days.slice(i * weekLength, i * weekLength + weekLength)]);
    }

    return foo.map(week => buildWeek(week));
  };

  return (
    <table border={1}>
      <thead>
        <tr>
          <th colSpan={weekLength}>{nowDt.monthLong}</th>
        </tr>
        {buildHeader(weekDays)}
      </thead>
      <tbody>{buildMonth(days)}</tbody>
    </table>
  );
}