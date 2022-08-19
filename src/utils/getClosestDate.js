import SCHEDULE from "../data/schedule";

let now = new Date();

export let currentDateObj = { month: now.getMonth(), day: now.getDate() };

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getClosest = (arr) => {
  let closestDate = arr[0];
  for (let elem of arr.slice(1)) {
    if (
      (elem.day >= closestDate.day ||
        months.indexOf(elem.month) >= months.indexOf(closestDate.month)) &&
      months.indexOf(elem.month) <= currentDateObj.month
    ) {
      closestDate = elem;
    }
  }
  return closestDate;
};


export let result = getClosest(SCHEDULE);

export let lastRaceResultsIndex = SCHEDULE.findIndex(elem => elem.circuitId === result.circuitId );

export let lastRaceResults = SCHEDULE[lastRaceResultsIndex - 1];
