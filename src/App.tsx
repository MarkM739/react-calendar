import React from 'react';
import Calendar from './components/Calendar';
import { DateTime } from "luxon";
import Button from './components/Button';




function App() {
  return (
    <div>
      <Calendar nowDt={ DateTime.now().plus({ months: 4 }) }/>
      <Button/>
    </div>
    
  );
}

export default App;


