var exec = require('child_process').exec;


exec('node_modules/.bin/metalsmith', function(err, stdout, stderr) {
  console.log(stdout);
  console.log(err); 
});



