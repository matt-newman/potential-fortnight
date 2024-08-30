import './App.css';

import { Calendar } from './components/calendar/calendar';
import { mockData } from './data';

function App() {  

  return (
    <div className="App">
      <Calendar data={mockData} />
    </div>
  );
}

export default App;
