import './App.css';

import { Calendar, CalendarData } from './components/calendar/calendar';

function App() {
  const today = new Date();
  const addDaysToDate = (date=new Date(), days=0) => {
    const newDate = new Date();
    newDate.setDate(date.getDate() + days);
    return newDate;
  }
  

  const mockDataShape: CalendarData = {
    streak_length: 1,
    calendar: [
      {
        streak_type: 'hot',
        date: addDaysToDate(today, -5).toISOString(),
      },
      {
        streak_type: 'mid',
        date: addDaysToDate(today, -4).toISOString(),
      },
      {
        streak_type: 'freeze',
        date: addDaysToDate(today, -3).toISOString(),
      },
      {
        streak_type: 'hot',
        date: addDaysToDate(today, -2).toISOString(),
      },
      {
        streak_type: 'hot',
        date: addDaysToDate(today, -1).toISOString(),
      },
    ],
    images: [],
  };

  return (
    <div className="App">
      <Calendar data={mockDataShape} />
    </div>
  );
}

export default App;
