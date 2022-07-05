console.log("JS connected!");

// alert message on loading page
// let messageDiv = document.getElementById('');

// messageDiv.innerHTML = alert("UNDER CONSTRUCTION !!!");

// let about = document.getElementById('about')

// about.innerHTML = "This is a webpage 🥰"
// about.style.color = "white";

// let articles = document.getElementById('articles')

// articles.innerHTML = "Interesting Stuff"
// articles.style.color = "white";


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