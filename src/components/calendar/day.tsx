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
    const { streak_type: type } = day;

    const fallbackType = type || 'empty';
    const isEmpty = type === 'empty';
    const today = new Date();
    const month = getMonthInfo(today.getMonth(), today.getFullYear());
    const isToday = (month.shiftFromMondayToFirstDayOfMonth + today.getDate() - 1) === index; // getDate() - 1, to shift date to be 0 indexed like array
    const todayClass = isToday ? 'day--today' : '';
    let weekClass = index % 7 === 0 ? ' week-start ' : ''; // start of week
    weekClass += index % 7 === 6 ? ' week-end ' : ''; // end of week

    return (
        <>
            {/* div vs span tweak to allow css :first-of-type selector */}
            {isEmpty && (
                <div className={`day day--${fallbackType} ${todayClass} ${weekClass}`}></div>
            ) || (
                <span className={`day day--streak day--${fallbackType} ${todayClass} ${weekClass}`}>
                    {type !== 'empty' && (<img className={'day-image'} alt={`${type}`} src={`/images/${type}.png`} />)}
                </span>
            )}
        </>
    )
}