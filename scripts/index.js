$(document).ready(function () {
  var cartoon = $("#cartoon");

  // Function to toggle the rocking class
  function toggleRocking() {
    cartoon.toggleClass("rocking");
  }

  // Animation to start rocking after a delay
  setTimeout(function () {
    toggleRocking();
  }, 3000);
});
