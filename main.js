// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Select the heart icon and error modal from the DOM
const heart = document.querySelector('.heart');
const errorModal = document.querySelector('.error-modal');

// Function to handle the click event
function handleHeartClick() {
  mimicServerCall()
    .then(() => {
      // On success, change heart to full and add .activated-heart class
      heart.classList.add('activated-heart');
    })
    .catch((error) => {
      // On failure, show the error modal with the error message
      errorModal.classList.remove('hidden');
      errorModal.innerText = error.message; // Display the error message

      // Hide the modal after 3 seconds
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
}

// Function to handle the heart click event
function toggleHeart() {
  if (heart.classList.contains('activated-heart')) {
    // If heart is already full, change it back to empty
    heart.classList.remove('activated-heart');
  } else {
    // If heart is empty, handle click to make a server call
    handleHeartClick();
  }
}

// Add click event listener to the heart
heart.addEventListener('click', toggleHeart);




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
