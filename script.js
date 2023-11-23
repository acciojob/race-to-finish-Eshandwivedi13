window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
// Function to generate a random timeout promise
const generateRandomTimeoutPromise = () => {
  const timeout = Math.floor(Math.random() * 5) + 1; // Random time between 1 and 5 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise resolved in ${timeout} seconds`);
    }, timeout * 1000); // Convert seconds to milliseconds
  });
};

// Array of five promises
const promises = [
  generateRandomTimeoutPromise(),
  generateRandomTimeoutPromise(),
  generateRandomTimeoutPromise(),
  generateRandomTimeoutPromise(),
  generateRandomTimeoutPromise(),
];

// Use Promise.any() to wait for the first promise to resolve
Promise.any(promises)
  .then((result) => {
    // Print the result to the div with id 'output'
    document.getElementById('output').innerText = result;
  })
  .catch((error) => {
    // Handle errors if needed
    console.error('Error:', error);
  });

