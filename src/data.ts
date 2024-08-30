import { CalendarData } from "./components/calendar/calendar";
import { addDaysToDate } from "./utils";

const today = new Date();

export const mockData: CalendarData = {    
    streak_length: 1,
    calendar: [
      {
        streak_type: 'hot',
        date: addDaysToDate(today, -29).toISOString(),
      },
      {
        streak_type: 'mid',
        date: addDaysToDate(today, -4).toISOString(),
      },
      {
        streak_type: 'mid',
        date: addDaysToDate(today, -4).toISOString(),
      },
      {
        streak_type: 'mid',
        date: addDaysToDate(today, -4).toISOString(),
      },
      {
        streak_type: 'mid',
        date: addDaysToDate(today, -4).toISOString(),
      },
      {
        streak_type: 'freeze',
        date: addDaysToDate(today, -3).toISOString(),
      },
      {
        streak_type: 'hot',
        date: addDaysToDate(today, -2).toISOString(),
      },
      {
        streak_type: 'hot',
        date: addDaysToDate(today, -1).toISOString(),
      },
    ],
    images: [],
  };