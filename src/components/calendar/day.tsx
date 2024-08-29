import { ReactElement } from "react";
import { getMonthInfo } from "../../utils";

import './day.css';

export type DayProps = {
    day: CalendarDay;
    index: number;
}

export type CalendarDay = {
    streak_type: string;
    date: string;
}

export function Day(props: DayProps):ReactElement {
    const { day, index } = props;
    const { date: strDate, streak_type: type } = day;
    const date = new Date(strDate);

    const dayNum = date.getDate();
    const isValidDay = dayNum > -1 || type === 'empty';
    const isEmpty = type === 'empty';
    const fallbackType = type || 'empty';
    const today = new Date();
    const month = getMonthInfo(today.getMonth(), today.getFullYear());
    const isToday = (month.shiftFromMondayToFirstDayOfMonth + today.getDate() - 1) === index; // getDate() - 1, to shift date to be 0 indexed like array
    let weekClass = index % 7 === 0 ? ' week-start ' : ''; // start of week
    weekClass += index % 7 === 6 ? ' week-end ' : ''; // end of week

    return (
        <>
            {/* div vs span tweak to allow css :first-of-type selector */}
            {isEmpty && (
                <div className={`day day--${fallbackType} ${isToday ? 'day--today' : ''} ${weekClass}`}></div>
            )}
            {isValidDay && !isEmpty && (
                <span className={`day day--${fallbackType} day--streak ${isToday ? 'day--today' : ''} ${weekClass}`}>
                    {/* {today.getDate()} - {todayOffset} - {index} */}
                    {isValidDay && type !== 'empty' && (<img className={'day-image'} alt={`${type}`} src={`/images/${type}.png`} />)}
                </span>
            )}
        </>
    )
}