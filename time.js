$(document).ready(function () {
  var currentDay = moment().format("dddd, MMMM DD, YYYY");
  var currentTime = moment().format("h:mm a");

  console.log(moment().format("dddd, MMMM DD, YYYY"));
  console.log(moment().format("h:mm a"));

  $("#currentDay").text(currentDay);
  $("#currentTime").text(currentTime);
});
