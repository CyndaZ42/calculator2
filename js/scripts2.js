$(document).ready(function() {
  $("form#name").submit(function(event) {
    alert("Your response has been submitted. Claim your free Bitcoin at virus.com")
    event.preventDefault();

  });  
});