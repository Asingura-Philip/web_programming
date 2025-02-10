// using callbacks
const fs = require('fs');

function readJsonFile(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      callback(err, null); // Pass the error if there's an issue
    } else {
      try {
        const jsonData = JSON.parse(data); // Parse the data as JSON
        callback(null, jsonData);  // Pass the parsed data to the callback
      } catch (parseError) {
        callback(parseError, null);  // Handle any JSON parsing errors
      }
    }
  });
}

// Define the callback
function handleData(error, data) {
  if (error) {
    console.error("Error reading JSON file:", error);
  } else {
    console.log("Fetched data from sample3.json:", data);
  }
}

// Read the samples.json file and pass the callback
readJsonFile('sample3.json', handleData);






//using promises

const fs = require('fs');

// Using Promises
function readJsonFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(err); // Reject the Promise if there's an error reading the file
      } else {
        try {
          const jsonData = JSON.parse(data); // Parse the data as JSON
          resolve(jsonData);  // Resolve the Promise with the parsed data
        } catch (parseError) {
          reject(parseError); // Reject the Promise if there's an error parsing JSON
        }
      }
    });
  });
}


readJsonFile('sample3.json')
  .then((data) => {
    console.log("Fetched data from samples.json:", data);
  })
  .catch((error) => {
    console.error("Error reading JSON file:", error);
  });





//using asyn/await

const fs = require('fs').promises;  // Use fs.promises for promise-based methods

// Function to read JSON file and parse it
async function readJsonFile(filename) {
  try {
    const data = await fs.readFile(filename, 'utf8'); // Read the file as a promise
    const jsonData = JSON.parse(data); // Parse the data as JSON
    return jsonData; // Return the parsed JSON data
  } catch (error) {
    throw error; // If there's an error, throw it to be caught outside
  }
}

// Use the function with async/await
async function main() {
  try {
    const data = await readJsonFile('sample3.json');
    console.log("Fetched data from samples.json:", data); // Output the data
  } catch (error) {
    console.error("Error reading JSON file:", error); // Handle the error
  }
}

main(); // Call the async main function
