$(document).ready(function () {
  // WHEN I open the planner, THEN the current day is displayed at the top of the calendar
  $("#currentDay").text(moment().format("dddd, MMMM DD, YYYY"));
  $("#saveBtn").on("click", function (e) {
    e.preventDefault();
    meetingInfo = $("#meetingInfo").val();
    console.log(meetingInfo);
  });

  // var currentTime = moment().moment().startOf('hour');
});
