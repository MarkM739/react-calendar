import React from 'react';
import Calendar from './components/Calendar';
import { DateTime } from "luxon";
import Button from './components/Button';
import './index.css';
import Agenda from './components/Agenda';


function App() {
  const [nowDt, setNowDt] = React.useState(DateTime.now());

  return (
    <div>
      <Calendar nowDt={nowDt}/>
      <Button buttonText='Previous Month' onClick={() => setNowDt(nowDt.minus({ months: 1 }))} />
      <Button buttonText='Next Month' onClick={() => setNowDt(nowDt.plus({ months: 1 }))} />
      <Agenda buttonText='Add Event' onClick={() => }/>

    </div>
  );
}

export default App;
