export const getMonthInfo = (month: number, year=new Date().getFullYear()) => {
    const first = new Date(year, month, 1);
    const last = new Date(year, month + 1, 0);
    const daysInMonth = last.getDate();
    const firstDayOfMonth = first.getDay();
    const shiftFromMondayToFirstDayOfMonth = ( firstDayOfMonth + 6 ) % 7; // effectively resets the zero index of the week to be 1, therefore monday

    return {
        first,
        last,
        daysInMonth,
        firstDayOfMonth,
        shiftFromMondayToFirstDayOfMonth,
    }
}