$(document).ready(function () {
  // WHEN I open the planner, THEN the current day is displayed at the top of the calendar
  $("#currentDay").text(moment().format("dddd, MMMM DD, YYYY"));

  // WHEN I refresh the page, THEN the saved events persist
  $(".storage").each(function () {
    var currentTime = moment().startOf("hour");
    var meetingTime = moment().hour($(this).attr("data-time")).startOf("hour");

    if (currentTime > meetingTime) {
      // set background to gray
      $(this).addClass("past");
    } else if (currentTime.isSame(meetingTime, "hour")) {
      // set background to red
      $(this).addClass("present");
    } else {
      // set background to green
      $(this).addClass("future");
    }

    $(this)
      .children("form")
      .children("textarea")
      .val(localStorage.getItem($(this).attr("data-time")));
  });

  // WHEN I click the save button for that timeblock, THEN the text for that event is saved in local storage
  $("form").click(function (event) {
    event.preventDefault();
    var meetingInfo = $(this).children("textarea").val();
    var meetingHour = $(this).parent().attr("data-time");

    localStorage.setItem(meetingHour, meetingInfo);
  });
});
