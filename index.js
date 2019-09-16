/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let hour = time.split(':')[0];
  if (parseInt(hour) < 12) {
    return "Good Morning";
  } else if (parseInt(hour) > 12 && parseInt(hour) < 17) {
    return "Good Afternoon";
  } else if (parseInt(hour) > 17) {
    return "Good Evening";
  }
  
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let content = document.getElementById("greeting")
  content.innerText = message
}