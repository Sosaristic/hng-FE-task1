const currentDay = document.getElementById("current_day");
const currentTime = document.getElementById("utc_time");

const date = new Date();
const day = date.getDay();

const formatDate = () => {
  return day == 1
    ? "Monday"
    : day == 2
    ? "Tuesday"
    : day == 3
    ? "Wednesday"
    : day == 4
    ? "Thursday"
    : day == 5
    ? "Friday"
    : day == 6
    ? "Saturday"
    : "Sunday";
};

currentDay.textContent = formatDate();
currentTime.textContent = Date.now();
