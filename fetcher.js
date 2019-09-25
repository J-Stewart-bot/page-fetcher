const arg = process.argv.slice(2);
const fs = require('fs');
const request = require('request');

request(arg[0], (error, response, body) => {
  if (error != null) {
    console.log('ERROR URL NOT FOUND:', error);
  }
  fs.writeFile(arg[1], body, function(err) {
    if(err) {
      return console.log('ERROR: ', err);
    }
    console.log(`Downloaded and saved ${body.length * 2} bytes to ${arg[1]}`);
  });
});