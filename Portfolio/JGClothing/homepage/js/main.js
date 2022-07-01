// function myFunction(x) {
//     if (x.matches) { // If media query matches
//       document.getElementById("mobile").style.display = "block";
//       document.getElementById("desktop").style.display = "none";
//     } else {
//       document.getElementById("mobile").style.display = "none";
//       document.getElementById("desktop").style.display = "block";
//     }
//   }

  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes