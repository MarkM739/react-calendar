import React from 'react';
import Calendar from './components/Calendar';

function App() {
  return (
    <div>
      <Calendar month={new Date}/>
    </div>
  );
}

export default App;


