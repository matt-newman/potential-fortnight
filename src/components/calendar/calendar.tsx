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

const emptyDay = {
    streak_type: 'empty',
    date: '',
};

export function Calendar(props: CalendarProps) {
    const { streak_length: streak, calendar } = props.data;

    // potentially need to sort calender array by date, which is easy if needed:
    const sortByDate = (a: string, b: string) => {
        return (new Date(a).valueOf() - new Date(b).valueOf());
    }

    const grid = createGrid(calendar);

    // const firstDay = calendar[0];
    // const lastDay = calendar.slice().pop();
    // const firstDate = new Date(firstDay.date);
    // const lastDate = new Date(lastDay!.date);

    // const maxDaysInMonth = getMaxDaysInMonth(firstDate.getMonth())
    // const firstDayOfMonth = getFirstDayOfMonth(firstDate.getMonth());

    // const gapFromMonToFirstDay = firstDayOfMonth - 1;
    // const gapFromLastDayToSun = (maxDaysInMonth % 6);

    // // const gapFromLastEntryToSun = ();

    // // to put days into a grid, day of month % 7
    // // grid size is calender length 
    // const startGap = new Array(gapFromMonToFirstDay).fill(emptyDay);
    // const emptyStarts = new Array(firstDate.getDate()).fill(emptyDay); // % 7 + 1 to start from monday

    // const endGap = new Array(gapFromLastDayToSun).fill(emptyDay);

    // const fullCal = [...startGap, ...emptyStarts, ...calendar, ...endGap];

    return (
        <div className="calendar">
            <h1 className='title'>{streak || 0} day streak</h1>

            <div className='header'>
                <span className="headerDay">Mon</span>
                <span className="headerDay">Tue</span>
                <span className="headerDay">Wed</span>
                <span className="headerDay">Thu</span>
                <span className="headerDay">Fri</span>
                <span className="headerDay">Sat</span>
                <span className="headerDay">Sun</span>
            </div>
            <div className='days'>
                {grid.map((day, index) => {
                    return renderDay(day, index);
                })}
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
                    {isValidDay && type !== 'empty' && (<img className={''} alt={`${type}`} src={`/images/${type}.png`} />)}
                </div>
            )}
        </>
    )
}

const getMonthInfo = (month: number, year=new Date().getFullYear()) => {
    const date = new Date(year, month, 0);
    const daysInMonth = date.getDate();
    const firstDayOfMonth = date.getDay();

    return {
        date,
        daysInMonth,
        firstDayOfMonth,
    }
}

const createGrid = (days: Array<CalendarDay>): Array<CalendarDay> => {
    const firstDate = new Date(days[0].date);    
    const gridSize = 7 * 5; // will be able to fit any month
    let grid = new Array(gridSize).fill(emptyDay);

    const shiftFromMondayToFirstDate = (firstDate.getDay() + 6) % 7; // effectively resets the zero index of the week to be 1, therefore monday

    // splice days into grid
    grid.splice(shiftFromMondayToFirstDate + firstDate.getDate(), days.length, ...days);

    console.log( {shiftFromMondayToFirstDate, grid} );

    return grid;
}