var exec = require('child_process').exec;


exec('metalsmith', function(err, stdout, stderr) {
  console.log(stdout);
  console.log(err); 
});



