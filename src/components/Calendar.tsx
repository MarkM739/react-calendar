import React from "react";
import { DateTime } from "luxon";

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const days = new Array(31).fill(null).map((_, i) => i + 1);

const setDate = DateTime.now();          
const dt = DateTime.local();
console.log(dt);
console.log(dt.toJSDate());



// @ts-ignore
export default function Calendar(props) {                   //Do we call our DateTime here? This is where I first tried
    const { month } = props;

    const buildHeader = (headerArr: string[]) => {
        return (
            <tr>
                {headerArr.map(item => <th>{item}</th>)}
            </tr>
        )
    };
    
    const buildWeek = (headerArr: number[]) => {             //Once we determine DateTime do we replace it with {item} in our Table row???
        return (
            <tr>
                {headerArr.map(item => <td>{item}</td>)}
            </tr>
        )
    };
    
    const buildMonth = (days: number[]) => {                //Same question as above
        const foo: number[][] = [];

        const numOfWeeks = Math.ceil(days.length / 7);

        for (let i = 0; i < numOfWeeks; i++) {
            foo.push([...days.slice(i * 7, (i * 7) + 7)])
        }

        return foo.map(week => buildWeek(week))
    }
    
    return (
        <table border={1}>
            <tr>
                <th colSpan={7}>{month}</th>
            </tr>
            {buildHeader(weekDays)}
            {buildMonth(days)} 
        </table>
    );
}

// determine which dates to render
// determine current month, previous month, next month dates
// note: first row includes tail of prev month + start current month
// note: last row includes tail of current month + start of next month
// detemine current month
// determine what day (sunday, monday, etc), the first date of the month (1)
// render all 42 (7x6) dates

// we need to use now() to get the current datetime
// we can use daysInMonth to get number of days in the current month
// weekday we give us the day (sunday, monday) of the date
//const now = DateTime.now();
// const endOfPreviousMonth = now.minus({ months: 1 }).endOf('month');

// const startOfMonth = now.startOf('month');
// const firstDayOfMonth = startOfMonth.weekday;

// const firstRow = new Array(7).fill(null);
// firstRow[firstDayOfMonth] = startOfMonth.day

// const calendar = [
//     firstRow, // [null, null, null, null, 1, 2, 3]
//     [4, 5, 6, 7, 8, 9, 10]
// ]

// const

// return (
//     <h1>{JSON.stringify(calendar)}</h1>
// )
