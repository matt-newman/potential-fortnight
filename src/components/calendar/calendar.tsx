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

    // to put days into a grid, day of month % 7
    // grid size is calender length 

    return (
        <div className="Calendar">
            Calendar
            <h1 className='title'>{streak} day streak</h1>

            {/* Calendar grid based on month... current? */}
            <table>
                <thead>
                    <tr>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                        <th>Sun</th>
                    </tr>
                </thead>
                <tbody>
                    {/* for every 7 days close row open a new one */}
                    {calendar.map(day => {
                        return renderDay(day);
                    })} 
                </tbody>
            </table>

            
        </div>
    );
}

function renderDay(day: CalendarDay) {
    const { date: strDate, streak_type: type } = day;
    const date = new Date(strDate);

    return (
        <>
            {strDate}<br />
            {type}<br />
        </>
    )
}
