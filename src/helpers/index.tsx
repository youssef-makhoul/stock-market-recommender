export function generateDatesArray(days: number): Array<Date> {
  const dates: Array<Date> = [];
  for (let index = 0; index < days; index++) {
    let day = new Date();
    day.setDate(day.getDate() - index);
    dates.push(day);
  }
  return dates;
}

export function generateRandomPositiveNumber(
  max: number,
  min: number = 0
): number {
  return Math.random() * (max - min) + min;
}
