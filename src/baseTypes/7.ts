/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum dayOfWeek {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

const isWeekend = (day:dayOfWeek):boolean =>{
  if (day === dayOfWeek.SATURDAY || day=== dayOfWeek.SUNDAY) {
    return true;
  }
  return false;
}