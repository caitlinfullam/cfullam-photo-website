var exec = require('child_process').exec;

function log(level) {
  var prefix = level.toUpperCase() + ":";
  return function() {
    arguments.unshift(prefix);
    console.log.apply(console, arguments); 
  }
}
var err = log("error");
var info = log("info");
var warn = log("warning");

var gitDirectoryDirty = exec("git diff-files --quiet")
gitDirectoryDirty .on('exit', function (code) {
  if (code !== 0) {
    console.error('Cannot build with dirty git directory');
    process.exit(1);
  }
});

function switchBranch(toBranch) {
  var gitCo = exec("git checkout " + toBranch) 

  gitCo.on('exit', function (code) {
    if (code !== 0) {
      err("Problem when switching git branches to [" + toBranch + "]. Script aborting")
      process.exit(2);
    }
  });
}

switchBranch("gh-pages");
