$(document).ready(function () {
  var currentDay = moment().format("dddd, MMMM DD, YYYY");
  //   console.log(moment().format("dddd, MMMM DD, YYYY"));
  $("#currentDay").text(currentDay);
});
