$(document).ready(function () {
  // WHEN I open the planner, THEN the current day is displayed at the top of the calendar
  $("#currentDay").text(moment().format("dddd, MMMM DD, YYYY"));
});

$(document).ready(function () {
  $("#saveBtn").on("click", function () {
    var currentHour = 

  });
});

//     // Add to local storage

//     var meetingTime = $("#meetingTime").val();
//     var meetingInfo = $("#meetingInfo").val();

//     console.log(meetingInfo);
//     console.log(meetingTime);

//     $("#saveBtn").on("click", function (e) {
//       e.preventDefault();

//     // WHEN I view the timeblocks for that day, THEN each timeblock is color coded to indicate whether it is in the past, present, or future

//     var currentHour = moment().startOf("hour");
//     var meetingHour = moment().hour($(this).attr("data-time")).startOf("hour");

//     if (meetingHour < currentHour) {
//       // make backgroundd grey

//     }elseif(meetingHour > currentHour) {
//       // make background green
//     }else{
//       // make background red

//     }:
//   });
// });
