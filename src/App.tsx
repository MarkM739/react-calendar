import React from "react";
import Calendar from "./components/Calendar";
import { DateTime } from "luxon";
import Button from "./components/Button";
import "./index.css";
import Agenda from "./components/Agenda";
import Dropdown from "./components/Dropdown";
import { AgendaItem } from "./types";

const testAgendaItems = [
  { item: "workout", dt: DateTime.now().minus({ hour: 1 }) },
  { item: "sleep", dt: DateTime.now().minus({ hour: 4 }) },
  { item: "eat dessert", dt: DateTime.now().plus({ hour: 2, minutes: 20 }) },
  { item: "eat lunch", dt: DateTime.now().plus({ hour: 2 }) },
];

function App() {
  const [activeDate, setActiveDate] = React.useState(DateTime.now());
  const [agendaItems, setAgendaItems] = React.useState(testAgendaItems);
  //TODO make new piece of state for highlighting CURRENT date, when another is selected.

  const filterAgenda = agendaItems.filter(agendaItem => agendaItem.dt.day === activeDate.day && agendaItem.dt.month === activeDate.month);
  
  const updateActiveDate = (month: number, date: number) => {
    const newDate = DateTime.local().set({ month, day: date });
    setActiveDate(newDate);
  };

  const addAgendaItem = (item: AgendaItem) => {
    const copy = [...agendaItems, item]
    setAgendaItems(copy);
  }

  // const newDt = DateTime. ??

  return (
    <div className="flex flex-row flex-wrap">
      <div className="basis-2/3 grow border border-solid">
        <Calendar activeDate={activeDate} setActiveDate={updateActiveDate} />
        <Button
          buttonText="<<"
          onClick={() => setActiveDate(activeDate.minus({ months: 1 }))}
        />
        <Button
          buttonText=">>"
          onClick={() => setActiveDate(activeDate.plus({ months: 1 }))}
        />
      </div>
      <div className="basis-1/3 grow border border-solid">
        <Agenda items={filterAgenda} addAgendaItem={addAgendaItem} activeDate={activeDate}/>
      </div>
    </div>
  );
}

export default App;

// bg-red xl: