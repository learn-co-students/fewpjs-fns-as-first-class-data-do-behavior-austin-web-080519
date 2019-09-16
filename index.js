/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(strTime) {
  const arrTime = strTime.split(':');
  const hour = parseInt(arrTime[0]);
  if(hour > 17) {
    return "Good Evening";
  }
  else if (hour < 12) {
    return "Good Morning";
  }
  else {
    return "Good Afternoon";
  }
}

function displayMessage(message) {
  let header = document.querySelector('#greeting');
  header.innerText = `${message}`;
}