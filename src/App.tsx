import './App.css';

import { Calendar, CalendarData } from './components/calendar/calendar';

function App() {

  const mockDataShape: CalendarData = {
    streak_length: 1,
    calendar: [
      {
        streak_type: 'hot',
        date: new Date().toISOString(),
      },
      {
        streak_type: 'mid',
        date: new Date().toISOString(),
      },
      {
        streak_type: 'freeze',
        date: new Date().toISOString(),
      },
      {
        streak_type: '',
        date: new Date().toISOString(),
      }
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
