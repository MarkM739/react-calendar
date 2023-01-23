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

  const firstDayOfMonth = nowDt.startOf("month");       // start of the current month

  const firstDay = firstDayOfMonth.weekday;             // get the current week day (monday, tuesday, etc) as a number

  const firstDayOffset = firstDay % weekDays.length;    // gets the offset of the previous month in the current week

  const days: DayItem[] = new Array(nowDt.daysInMonth + firstDayOffset)
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
        {headerArr.map((item) => (
          <th>{item}</th>
        ))}
      </tr>
    );
  };

  const buildWeek = (headerArr: DayItem[]) => {
    return (
      <tr>
        {headerArr.map((item) => (
          <td>{item.date}</td>
        ))}
      </tr>
    );
  };

  const buildMonth = (days: DayItem[]) => {
    const foo: DayItem[][] = [];

    const numOfWeeks = Math.ceil(days.length / 7);

    for (let i = 0; i < numOfWeeks; i++) {
      foo.push([...days.slice(i * 7, i * 7 + 7)]);
    }

    return foo.map((week) => buildWeek(week));
  };

  return (
    <table border={1}>
      <thead>
        <tr>
          <th colSpan={7}>{nowDt.monthLong}</th>
        </tr>
        {buildHeader(weekDays)}
      </thead>
      <tbody>{buildMonth(days)}</tbody>
    </table>
  );
}