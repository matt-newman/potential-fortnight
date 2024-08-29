import './calendar.css';

/*
The data structure you receive: You receive the following data in an object:

streak_length = the number of days streak they’re on
    calendar = a list of Day objects, one for each day in a month
        day:
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
export type CalendarProps = {
    data: CalendarData;
}

export type CalendarData = {
    streak_length: number;
    calendar: Array<CalendarDay>;
    images: Array<string>;
}

type CalendarDay = {
    streak_type: string;
    date: string;
}

const mockDataShape = {
    streak_length: 1,
    calendar: [
        {
            streak_type: '',
            date: '',
        }
    ],
    images: [],
};

export function Calendar(props: CalendarProps) {
    const { streak_length: streak, calendar } = props.data;
    return (
        <div className="Calendar">
            Calendar
            <h1 className='title'>{streak} day streak</h1>

            {/* Calendar grid based on month... current? */}
            {calendar.map(day => {
                return renderDay(day);
            })}
        </div>
    );
}

function renderDay(day: CalendarDay) {
    return (
        <>
            {day.streak_type}<br />
            {day.date}<br />
        </>
    )
}
