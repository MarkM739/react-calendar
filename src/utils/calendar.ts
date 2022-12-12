// import dayjs from "dayjs"

// export const generateDate = (
//     month = dayjs().month(),
//      year = dayjs().year()
//  ) => {

//     const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");              //Using my npm dayjs to sort each day/month/year
//     const lasttDateOfMonth = dayjs().year(year).month(month).endOf("month");

//     const arrayOfDate = []

//     //calculate the prefixed date

//     for(
//         let i = 0; i < firstDateOfMonth.day();i++)
//          {
//         arrayOfDate.push({currentMonth:false,
//              date: firstDateOfMonth.date (i)});           //making date an object to help up grey out the unused days, trying on both first and last day loops.

//     }
//     //Below is a loop for current date showing......maybe? lol
//     for (
//         let i = firstDateOfMonth.date();
//          i<=lasttDateOfMonth.date();
//          i++)
//          {
//         arrayOfDate.push({date:firstDateOfMonth.date(i),       
//             currentMonth: true,                                                 //using "today" from the video, to highlight our current date that we are on. Not understanding fully whats going on here ask Dev.
//             today:
//                 firstDateOfMonth.date(i).toDate().toDateString() == 
//                 dayjs().toDate().toDateString(),
//         });                                   
//     }

//     const remaining = 42 - arrayOfDate.length

//     for (
//         let i = lasttDateOfMonth.date()+1;
//         i<=lasttDateOfMonth()+remaining;i++)                                  //Days of OTHER months greyed out on the grid
//         {
//         arrayOfDate.push({date: lasttDateOfMonth.date(i),
//             currentMonth: false});
//     }
//     return arrayOfDate                                                                      

//   };

export { }