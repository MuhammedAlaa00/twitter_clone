// * this chatGpt code
export const updateDays = (value, Months) => {
  const daysInMonth = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31
  };
  const monthIndex = Months.indexOf(value);
  let numOfDays;
  if (monthIndex === -1) {
    numOfDays = 31;
  } else {
    const currentMonth = Months[monthIndex];
    numOfDays = daysInMonth[currentMonth];
    if (currentMonth === "February") {
      let year = new Date().getFullYear();
      if (isLeapYear(year)) numOfDays = 29
    }
  }
  const days = [...Array(numOfDays)].map((_, i) => i + 1);
  return days;
};

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}
// ? this is my code
/**
 * export const updateDays = (value, Months) => {
  const days = [];
  let numOfDays;
  if (
    value === Months?.[3] ||
    value === Months?.[5] ||
    value === Months?.[8] ||
    value === Months?.[10]
  ) {
    numOfDays = 30;
  } else if (
    value === Months?.[0] ||
    value === Months?.[2] ||
    value === Months?.[4] ||
    value === Months?.[6] ||
    value === Months?.[7] ||
    value === Months?.[9] ||
    value === Months?.[11]
  ) {
    numOfDays = 31;
  } else if (value === Months?.[1]) {
    numOfDays = 28;
  } else {
    numOfDays = 31;
  }

  for (let i = 1; i <= numOfDays; i++) {
    days.push(i);
  }
  return days;
};
 */
// * chatGpt code here *
const currentYear = new Date().getFullYear() - 15;
export const getyearsList = Array.from({ length: 100 }, (_, i) => currentYear - i);
// ? my code here
/**
 * export const getyearsLists = () => {
  const yearsAmount = 100;
  const now = new Date().getUTCFullYear();
  return Array(yearsAmount)
    .fill('')
    .map((year, index) => now - index);
};
 */
// * check if object is empty 

export const isObjectEmpty = (objectName) => {
  return Object.keys(objectName).length === 0
}
