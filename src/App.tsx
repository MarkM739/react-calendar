import React from 'react';
import Calendar from './components/Calendar';
import { DateTime } from "luxon";
import Button from './components/Button';
import './index.css';


function App() {
  const [nowDt, setNowDt] = React.useState(DateTime.now());

  return (
    <div>
      <Calendar nowDt={nowDt}/>
      <Button buttonText='Previous Month' onClick={() => setNowDt(nowDt.minus({ months: 1 }))} />
      <Button buttonText='Next Month' onClick={() => setNowDt(nowDt.plus({ months: 1 }))} />
    </div>
  );
}

export default App;
