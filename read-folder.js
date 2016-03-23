var fs = require("fs");
//reading filesInFolder
var filesInFolder = fs.readdirSync("./files/week1");
// creating an empty array
var linesInFiles = [];
//creating forEach to read each file
filesInFolder.forEach(function(file){
  var content = fs.readFileSync("./files/week1/"+file, "utf8");
  //creating split for each line
  lines = content.split('\n');
  //creating forEach to read each line
  lines.forEach(function(line){
    //creating push to push the lines to the empty array
    linesInFiles.push(line);
  });

});
//console.log(linesInFiles);
//return(linesInFiles)


  exports.linesInFiles = function(folderName){
    return linesInFiles;
  };

  exports.linesInFilesAsync = function(folderName, callback){
    callback(null, linesInFiles);
    return linesInFiles;
  };
    //linesInFilesAsync('/dir/name', function(err, files){ });
