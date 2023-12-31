let dateEl = document.querySelector("#date");
let timeEl = document.querySelector("#time");
let prevBlock = document.querySelector(".past");
let timeStatus = document.querySelector(".timeStatus");
let today = dayjs();

let time = $(timeEl).text(today.format("h"));

// Encompasses below code into one date and time function

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//Saves
document.addEventListener("DOMContentLoaded", function () {
  let textInput = document.querySelector("textarea");
  let savedTask = localStorage.getItem("savedTask");
  if (savedTask) {
    textInput.value = savedTask;
  }
});

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  let saveButton = document.querySelector(".saveBtn");
  let textInput = document.querySelector("textarea");
  saveButton.addEventListener("click", function (event) {
    let userInput = textInput.value;
    localStorage.setItem("savedTask", userInput);

    console.log("Saved:" + userInput);

    document.addEventListener("DOMContentLoaded", function () {
      let textInput = document.querySelector("textarea");
      let savedTask = localStorage.getItem("savedTask");
      if (savedTask) {
        textInput.value = savedTask;
      }
    });
  });

  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
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

  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  document.addEventListener("DOMContentLoaded", function () {
    let textInput = document.querySelector("textarea");
    let savedTask = localStorage.getItem("savedTask");
    if (savedTask) {
      textInput.value = savedTask;
    }
  });

  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  let date = $(dateEl).text(today.format("MMM D, YYYY"));
});
