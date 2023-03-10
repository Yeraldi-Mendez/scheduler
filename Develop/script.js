// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(function () {
  // #1 : TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // 2: TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // 3: TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // 4: TODO: Add code to display the current date in the header of the page.
//});

var today = dayjs()

$(document).ready(function(){  

  //this is to cover #1 AND #4 todo...
  $("#currentDay").text(today.format("dddd, MMMM D")); //Displaying today's date
  $(".saveBtn").on("click",function(){ //saving user's input
    var inputText = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(time, inputText) //personal use to make sure it is being consoled into the right time
    localStorage.setItem(time, inputText);
  });
  //#1 todo cont, creating ID's for each input that will be used for later
  $("#7 .description").val(localStorage.getItem("7"));
  $("#8 .description").val(localStorage.getItem("8"));
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
  $("#18 .description").val(localStorage.getItem("18"));
  $("#19 .description").val(localStorage.getItem("19"));
  $("#20 .description").val(localStorage.getItem("20"));
  $("#21 .description").val(localStorage.getItem("21"));
  $("#22 .description").val(localStorage.getItem("22"));
  $("#23 .description").val(localStorage.getItem("23"));
  $("#24 .description").val(localStorage.getItem("24"));

  //this will be for #3 todo, using ID to know which class past, present, future to apply
  function timeChange(){
    var currentHour = today.hour();
    //calls id to check against current time
    $(".time-block").each(function(){
      var idTime = parseInt($(this).attr("id"));
      if(idTime < currentHour){
        $(this).addClass("past");
      }else if(idTime === currentHour){
        $(this).addClass("present");
        $(this).removeClass("past");
      } else{
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      }
    })
  }
  //calls function
  timeChange();
  var timeInterval = setInterval(timeChange, 1000);


});