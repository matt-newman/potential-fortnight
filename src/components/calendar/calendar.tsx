import './calendar.css';

import { CalendarDay, Day } from './day';
import { getMonthInfo } from "../../utils";

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

const emptyDay = {
    streak_type: 'empty',
    date: '',
};

export function Calendar(props: CalendarProps) {
    const { streak_length: streak, calendar } = props.data;

    const createGrid = (days: Array<CalendarDay>): Array<CalendarDay> => {
        const firstDate = new Date(days[0].date);
        const gridSize = 7 * 5; // will be able to fit any month
        let grid = new Array(gridSize).fill(emptyDay);

        const month = getMonthInfo(firstDate.getMonth(), firstDate.getFullYear());
        const insertAt = month.shiftFromMondayToFirstDayOfMonth + firstDate.getDate() - 1; // -1 because of zero index of array

        // splice days into grid
        grid.splice(insertAt, days.length, ...days);

        // console.log({ insertAt, grid, first: firstDate.getDate(), month });

        return grid;
    }

    // potentially need to sort calender array by date, which is easy if needed:
    const sortByDate = (a: string, b: string) => {
        return (new Date(a).valueOf() - new Date(b).valueOf());
    }

    const grid = createGrid(calendar);

    const days = grid.map((day, index) => {
        return <Day day={day} index={index} />;
    })

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
                {days}
            </div>
        </div >
    );
}