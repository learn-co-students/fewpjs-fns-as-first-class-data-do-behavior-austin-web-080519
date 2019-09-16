/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) { 
  let hourstring = string.split(':');
  let hour = parseInt(hourstring[0]);
  if (hour < 12) {
    console.log("Good Morning");
    return "Good Morning";
  } else if (hour > 12 && hour < 18) {
    console.log("Good Afternoon")
    return "Good Afternoon";
  } else {
    console.log("Good Evening");
    return "Good Evening";
  }
}


function displayMessage(string) { 
  let greeting = document.querySelector('#greeting')
  greeting.innerText = string;
}



/* Write your implementation of displayMessage() */
