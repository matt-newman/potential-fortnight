import './calendar.css';

/*
The data structure you receive: You receive the following data in an object:

streak_length = the number of days streak they’re on
calendar = a list of Day objects, one for each day in a month
Each Day object has fields:
streak_type: the type of streak they got that day, can be None. Different streaks have different images
date
images = a list of all the streak images

{
    streak_length: 1,
    calendar: [
        {
            streak_type: '',
            date: '',
        }
    ]
    images: [],
}
*/

const mockDataShape = {
    streak_length: 1,
    calendar: [
        {
            streak_type: '',
            date: '',
        }
    ],
    images: [],
}

export function Calendar() {
  return (
    <div className="Calendar">
        Calendar
    </div>
  );
}
