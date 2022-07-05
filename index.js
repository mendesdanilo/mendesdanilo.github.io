console.log("JS connected");


// change text color feature
function changeColor() {
  let theToggle = document.getElementById('about-header');
  let toggleStatus = theToggle.dataset.status;
  switch (toggleStatus) {
    case "one":
      theToggle.dataset.status = "two";
      theToggle.style.color = "orange";
      break;  
    case "two":
      theToggle.dataset.status = "three";
      theToggle.style.color = "blue";
      break;
    case "three":
      theToggle.dataset.status = "four";
      theToggle.style.color = "pink";
      break;
    case "four":
      theToggle.dataset.status = "five";
      theToggle.style.color = "green";
      break;  
    case "five":
      theToggle.dataset.status = "six";
      theToggle.style.color = "grey"; 
      break;
    case "six":
      theToggle.dataset.status = "seven";
      theToggle.style.color = "black";
      break;  
  }
}

//let clicked = false;

//function display previous years
// function displayPreviousYears() {
//   if (!clicked) {
//     clicked = true;
//     document.getElementById("currentYear").style.display = "none";
//     document.getElementById("previousMonths").style.display = "none";
//     document.getElementById("btn2021").style.display = "inline";
//     document.getElementById("displayPreviousYears").innerHTML = "Back";
//   } else {
//     clicked = false;
//     document.getElementById("previousMonths").style.display = "inline";
//     document.getElementById("btn2021").style.display = "none";
//     document.getElementById("displayPreviousYears").innerHTML =
//       "Previous Years";
//     document.getElementById("currentYear").style.display = "inline";
//     document.getElementById("divMonths2021").style.display = "none";
//   }
// }

// //display months
// function displayMonths() {
//   if (!clicked) {
//     clicked = true;
//     document.getElementById("divMonths2021").style.display = "inline";
//     document.getElementById("btn2021").innerHTML = "Back";
//   } else {
//     clicked = false;
//     document.getElementById("divMonths2021").style.display = "none";
//     document.getElementById("btn2021").innerHTML = "2021";
//   }
// }

// //function to toggle september div
// function displaySeptDiv() {
//   if (!clicked) {
//     clicked = true;
//     document.getElementById("septemberDiv").style.display = "inline";
//     document.getElementById("toggleBtnSept").innerHTML = "Back";
//   } else {
//     clicked = false;
//     document.getElementById("septemberDiv").style.display = "none";
//     document.getElementById("toggleBtnSept").innerHTML = "September";
//   }
// }

// //function to toggle october div
// function displayOctDiv() {
//   if (!clicked) {
//     clicked = true;
//     document.getElementById("octoberDiv").style.display = "inline";
//     document.getElementById("toggleBtnOct").innerHTML = "Back";
//   } else {
//     clicked = false;
//     document.getElementById("octoberDiv").style.display = "none";
//     document.getElementById("toggleBtnOct").innerHTML = "October";
//   }
// }

// //function to toggle november div
// function displayNovDiv() {
//   if (!clicked) {
//     clicked = true;
//     document.getElementById("novemberDiv").style.display = "inline";
//     document.getElementById("toggleBtnNov").innerHTML = "Back";
//   } else {
//     clicked = false;
//     document.getElementById("novemberDiv").style.display = "none";
//     document.getElementById("toggleBtnNov").innerHTML = "November";
//   }
// }

// //function to toggle december div
// function displayDecDiv() {
//   if (!clicked) {
//     clicked = true;
//     document.getElementById("decemberDiv").style.display = "inline";
//     document.getElementById("toggleBtnDec").innerHTML = "Back";
//   } else {
//     clicked = false;
//     document.getElementById("decemberDiv").style.display = "none";
//     document.getElementById("toggleBtnDec").innerHTML = "December";
//   }
// }

// //function to show january 
// function displayJanDiv() {
//   if (!clicked) {
//     clicked = true;
//     document.getElementById("displayJanBtn").innerHTML = "Back";
//     document.getElementById("janDiv").style.display = "inline";
//     document.getElementById("aprilDiv").style.display = "none";
//   } else {
//     clicked = false;
//     document.getElementById("janDiv").style.display = "none";
//     document.getElementById("displayJanBtn").innerHTML = "January";
//     document.getElementById("aprilDiv").style.display = "inline";
//   }
// }

// //function to show february
// function displayFebDiv() {
//   if (!clicked) {
//     clicked = true;
//     document.getElementById("februaryDiv").style.display = "inline";
//     document.getElementById("displayFebBtn").innerHTML = "Back";
//   } else {
//     clicked = false;
//     document.getElementById("februaryDiv").style.display = "none";
//     document.getElementById("displayFebBtn").innerHTML = "February";
//   }
// }

// //function to show march and hide
// function displayMarDiv() {
//   if (!clicked) {
//     clicked = true;
//     document.getElementById("marchDiv").style.display = "inline";
//     document.getElementById("displayMarBtn").innerHTML = "Back";
//     document.getElementById("aprilDiv").style.display = "none";
//   } else {
//     clicked = false;
//     document.getElementById("marchDiv").style.display = "none";
//     document.getElementById("displayMarBtn").innerHTML = "March";
//   }
// }



// var lastName = "Lovelace";
// // Only change code below this line
// var lastLetterOfLastName = lastName.length - 1;
// // Change this line
// console.log(lastLetterOfLastName)