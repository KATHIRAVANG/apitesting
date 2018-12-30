const newman = require('newman'); // require newman in your project
const path = require('path');
let envjsonPath = path.join(__dirname, '..', 'postmancollection', 'SENTHIL_ENV.postman_environment.json');
let testjsonPath = path.join(__dirname, '..', 'postmancollection', 'SENTHILPOSTMAN_AUTOMATION.postman_collection.json');
// call newman.run to pass `options` object and wait for callback
//newman.run
newman.run({ 
    environment: envjsonPath,
     collection: testjsonPath,
     insecure: true,
     reporters: ['html', 'progress'],
     reporter: { 
        html: { 
            export: './htmlResults.html', // If not specified, the file will be written to `newman/` in the current working directory.
             
        } 
    } 
},  function (err) { 
    if (err) {
        throw err;
    } 
    console.log('collection run complete!. Results stored in htmlResults.html'); 
});