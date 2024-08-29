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

    const emptyDay = {
        streak_type: 'empty',
        date: '',
    };

    // potentially need to sort calender array by date, which is easy if needed:
    const sortByDate = (a: string, b: string) => {
        return (new Date(a).valueOf() - new Date(b).valueOf());
    }

    function getMaxDaysInMonth (month: number, year=new Date().getFullYear()) {
        return new Date(year, month, 0).getDate();
    }

    function getFirstDayOfMonth (month: number, year=new Date().getFullYear()) {
        return new Date(year, month, 0).getDay();
    }

    const firstDay = calendar[0];
    const lastDay = calendar.slice().pop();
    const firstDate = new Date(firstDay.date);
    const lastDate = new Date(lastDay.date);
    const maxDaysInMonth = getMaxDaysInMonth(firstDate.getMonth())
    const firstDayOfMonth = getFirstDayOfMonth(firstDate.getMonth());
    const gapFromMonToFirstDay = firstDayOfMonth - 1;
    const gapFromLastDayToSun = (maxDaysInMonth % 6);

    // to put days into a grid, day of month % 7
    // grid size is calender length 
    const startGap = new Array(gapFromMonToFirstDay).fill(emptyDay);
    const emptyStarts = new Array(firstDate.getDate()).fill(emptyDay); // % 7 + 1 to start from monday

    const endGap = new Array(gapFromLastDayToSun).fill(emptyDay);

    const fullCal = [...startGap, ...emptyStarts, ...calendar, ...endGap];

    return (
        <div className="calendar">
            Calendar
            <h1 className='title'>{streak} day streak</h1>

            {/* Calendar grid based on month... current? */}

            {/* make the gird 5 rows regardless */}

            <div>
                <span className="headerDay">Mon</span>
                <span className="headerDay">Tue</span>
                <span className="headerDay">Wed</span>
                <span className="headerDay">Thu</span>
                <span className="headerDay">Fri</span>
                <span className="headerDay">Sat</span>
                <span className="headerDay">Sun</span>
            </div>
            <div>
                {/* render empty days at start */}


                {fullCal.map((day, index) => {
                    return renderDay(day, index);
                })}

                {/* empty days at end */}
            </div>
        </div >
    );
}

function renderDay(day: CalendarDay, index: number) {
    const { date: strDate, streak_type: type } = day;
    const date = new Date(strDate);

    const dayNum = date.getDate();
    const isValidDay = dayNum > -1 || type === 'empty';
    const fallbackType = type || 'empty';

    return (
        <>
            {isValidDay && (
                <div className={`day day--${fallbackType}`}>
                    {dayNum}<br />
                    getDay = {date.getDay()}<br />
                </div>
            )}
        </>
    )
}
