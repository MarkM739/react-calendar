import React from 'react';
import Calendar from './components/Calendar';
import { DateTime } from "luxon";
import Button from './components/Button';
import './index.css';
import Agenda from './components/Agenda';
import Dropdown from './components/Dropdown';

const testAgendaItems = [
  {item: 'workout', dt: DateTime.now().minus({ hour: 1 })},
  {item: 'sleep', dt: DateTime.now().minus({ hour: 4 })},
  {item: 'eat dessert', dt: DateTime.now().plus({ hour: 2, minutes: 20 })},
  {item: 'eat lunch', dt: DateTime.now().plus({ hour: 2 })}
]

function App() {
  const [nowDt, setNowDt] = React.useState(DateTime.now());

  return (
    <div className='bg-gray-700 text-white'>
      <Calendar nowDt={nowDt}/>
      <Button buttonText='Previous Month' onClick={() => setNowDt(nowDt.minus({ months: 1 }))} />
      <Button buttonText='Next Month' onClick={() => setNowDt(nowDt.plus({ months: 1 }))} />
      <Agenda items={testAgendaItems}/>
      
    </div>
  );
}

export default App;
