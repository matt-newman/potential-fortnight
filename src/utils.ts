import { START_OF_WEEK } from "./constants";

export const dayInWeekFromStart = (day: number) => {
    const gapFromStartToSeven = 7 - START_OF_WEEK;
    return (day + gapFromStartToSeven) % 7; // effectively resets the zero index of the week to be START_OF_WEEK
}

export const addDaysToDate = (date = new Date(), days = 0) => {
    const newDate = new Date();
    newDate.setDate(date.getDate() + days);
    return newDate;
}

export const getWeekDays = (locale: string = 'en-GB'): string[] => {
    const now = new Date();
    const weekDays: string[] = [];
    const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
    };
    const differenceToZeroIndex = dayInWeekFromStart(now.getDay()) * -1;
    const startDay = addDaysToDate(now, differenceToZeroIndex);

    let i=0;
    for (; i<7; i++ ) {
        weekDays.push( addDaysToDate(startDay, i).toLocaleDateString(locale, options) );
    }

    return weekDays;
};

export const getMonthInfo = (month: number, year = new Date().getFullYear()) => {
    const first = new Date(year, month, 1);
    const last = new Date(year, month + 1, 0);
    const daysInMonth = last.getDate();
    const firstDayOfMonth = first.getDay();
    const shiftFromMondayToFirstDayOfMonth = dayInWeekFromStart(firstDayOfMonth);

    return {
        first,
        last,
        daysInMonth,
        firstDayOfMonth,
        shiftFromMondayToFirstDayOfMonth,
    }
}