let dateEl = document.querySelector("#date");
let timeEl = document.querySelector("#time");
let prevBlock = document.querySelector('.past')
let today = dayjs();
let times = [
    {9: 9},
    {10: 10},
    {11: 11},
    {12: 12},
    {13: 1},
    {14: 2},
    {15: 3},
    {16: 4},
    {17: 5},
   ];

 if ($(dateEl).text(today.format("MMM D, YYYY")))

   


main();
// Defines main function of the page
function main() {
  setDateTime();
}

// Encompasses below code into one date and time function
function setDateTime() {
  // Sets the date and the time formattes as wanted
  function updateTime() {
    
    let date = $(dateEl).text(today.format("MMM D, YYYY"));
    let time = $(timeEl).text(today.format("h:mm:ss a"));

  } let timeL = 14;
  for (let i = 0; i < times.length; i++) {
      // Get the value (time) from the object
      let timeValue = Object.values(times[i])[0];

  }

  // Calls update time
  updateTime();
  // Sets seconds ++ for the current time
  setInterval(updateTime, 1000);
}

console.log(date.text);





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
