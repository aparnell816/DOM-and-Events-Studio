// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

    let takeOff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    let landing = document.getElementById("landing");
    
    let missionAbort = document.getElementById("missionAbort");


    takeoff.addEventListener("click", function (event) {
       let response = window.confirm("Confirm that the shuttle is ready for takeoff.");

       if (response) {
        flightStatus.innerText = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerText = 10000;
        
       } else {
        flightStatus.innerText = "Space shuttle ready for takeoff";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerText = 0;
       }
    });

    landing.addEventListener("click", function (event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerText = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerText = 0;
    })

    missionAbort.addEventListener("click", function (event) {
        let abort = window.confirm("Confirm that you want to abort the mission.");

        if (abort) {
        flightStatus.innerText = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerText = 0;
      }
    })

    
});
