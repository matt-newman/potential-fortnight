import './App.css';

import { Calendar, CalendarData } from './components/calendar/calendar';

function App() {

  const mockDataShape: CalendarData = {
    streak_length: 1,
    calendar: [
        {
            streak_type: '',
            date: '',
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
