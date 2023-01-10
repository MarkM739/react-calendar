import React from 'react';
import Calendar from './components/Calendar';
import { DateTime } from "luxon";



function App() {
  return (
    <div>
      <Calendar nowDt={ DateTime.now().plus({ months: 4 }) }/>
    </div>
  );
}

export default App;


