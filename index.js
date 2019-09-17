/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  const splitTime = time.split(':')
  const convertTime = parseInt(splitTime[0])
  if (convertTime < 12) {
    return("Good Morning")
  } 
  else if (convertTime > 12 && convertTime < 18) {
    return("Good Afternoon")
  } 
  else {
    return("Good Evening")
  }
}

function displayMessage(string) {
  greeting = document.getElementById('greeting')
  greeting.innerText = string
}



/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
