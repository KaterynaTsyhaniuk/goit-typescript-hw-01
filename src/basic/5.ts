export enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

export const isWeekend = (day: DayOfWeek): void => {
  if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
    console.log(" it is the weekend");
  } else {
    console.log("it is a weekday");
  }
};
