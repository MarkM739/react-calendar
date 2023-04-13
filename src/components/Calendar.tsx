import React from "react";
import { DateTime, Info } from "luxon";
import Button from "./Button";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface CalendarProps {
  activeDate: DateTime;
  setActiveDate: (month: number, date: number) => void;
}

interface DayItem {
  month: number;
  date: number;
}

export default function Calendar(props: CalendarProps) {
  const { activeDate, setActiveDate } = props;

  const weekLength = weekDays.length;

  const firstDayOfMonth = activeDate.startOf("month"); 
  const firstDay = firstDayOfMonth.weekday;             
  const firstDayOffset = firstDay % weekLength;  
  
  const lastDayofMonth = activeDate.endOf("month");
  const lastDay = lastDayofMonth.weekday;
  const lastDayOffset = weekLength - lastDay - 1

  const days: DayItem[] = new Array(activeDate.daysInMonth + firstDayOffset + lastDayOffset)
    .fill(null)
    .map((_, i: number) => {
      const date = firstDayOfMonth
        .minus({ days: firstDayOffset }) 
        .plus({ days: i });

      return {
        month: date.month,
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

//TODO:Table data needs to be a button --> date selector *props setActiveDate (onClick)*
  const buildWeek = (headerArr: DayItem[]) => {
      return (
        <tr>
          {headerArr.map(item => {
            return (
              <td>
                <button onClick={() => setActiveDate(item.month, item.date)}> {item.date}</button>
              </td>
            )
          })}       
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
    <table>
      <thead>
        <tr>
          <th colSpan={weekLength}>{activeDate.monthLong}</th>
        </tr>
        {buildHeader(weekDays)}
      </thead>
      <tbody>{buildMonth(days)}</tbody>
    </table>
  );
}