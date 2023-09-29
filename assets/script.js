let dateEl = document.querySelector("#date");
let timeEl = document.querySelector("#time");
let prevBlock = document.querySelector(".past");
let timeStatus = document.querySelector(".timeStatus");
let today = dayjs();
let date = $(dateEl).text(today.format("MMM D, YYYY"));
let time = $(timeEl).text(today.format("h"));
let times = [
  { 9: 9 },
  { 10: 10 },
  { 11: 11 },
  { 12: 12 },
  { 13: 1 },
  { 14: 2 },
  { 15: 3 },
  { 16: 4 },
  { 17: 5 },
];

if (time < 9) {
  console.log("hello");
}

$(".timeStatus").each(function () {
  console.log(typeof $(this).attr("id"));
  if (parseInt($(this).attr("id")) < parseInt(today.format("H"))) {
    $(this).addClass("past");
  } else if (parseInt($(this).attr("id")) === parseInt(today.format("H"))) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

console.log(today.format("H"));
console.log(typeof today.format("h"));

main();
// Defines main function of the page
function main() {
  if ($(timeEl).text(today.format("h")) < 9) {
    console.log("hello");
  }
}

// Encompasses below code into one date and time function

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
