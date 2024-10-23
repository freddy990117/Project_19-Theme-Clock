const hourEL = document.querySelector(".hour");
const minEL = document.querySelector(".min");
const secEL = document.querySelector(".sec");
const timeEL = document.querySelector(".time");
const dateEL = document.querySelector(".date");
const toggle = document.querySelector(".toggle");
const html = document.querySelector("html");
console.log(html);
toggle.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
  } else {
    html.classList.add("dark");
  }
});
function setTime() {
  const time = new Date();
  const date = time.getDate();
  const day = time.getDay();
  const month = time.getMonth();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  const hoursForClock = hour > 12 ? "0" + (hour % 12) : "0" + hour;
  const ampm = hour > 12 ? "PM" : "AM";

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
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
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
  hourEL.style.transform = `translate(-50%, -100%) rotate(${scale(
    hour,
    0,
    12,
    0,
    360
  )}deg)`;
  minEL.style.transform = `translate(-50%, -100%) rotate(${scale(
    minute,
    0,
    60,
    0,
    360
  )}deg)`;
  secEL.style.transform = `translate(-50%, -100%) rotate(${scale(
    second,
    0,
    60,
    0,
    360
  )}deg)`;

  timeEL.innerHTML = `${ampm} ${hoursForClock} : ${minute} : ${
    second < 10 ? "0" + second : second
  }`;

  dateEL.innerHTML = `${days[day]} ,${months[month]}<span class="circle">${date}</span>`;
}

setInterval(setTime, 1000);
setTime();
// 條件 ? 表達式1 : 表達式2;
