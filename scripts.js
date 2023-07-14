// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

    let takeOff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");


    takeoff.addEventListener("click", function (event) {
       let response = window.confirm("Confirm that the shuttle is ready for takeoff.");

       if (response) {
        flightStatus.innerText = "Shuttle in flight.";
       } else {
        flightStatus.innerText = "Space shuttle ready for takeoff";
       }
    });

    
});
