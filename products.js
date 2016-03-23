 var fs = require("fs");
//calling module
            module.exports = function(path){

            this.productNames = function(callback){

//creat empty array
  var products = [];
//creat an empty map
  var myMap = {};

  var listInFiles = fs.readFileSync("./files/products.csv", "utf8");

  var answer = listInFiles.split('\n');

             answer.forEach(function(answer){

  var productName = answer.split(",")[1];

             if(myMap[productName]=== undefined){
                products.push(productName);
                             myMap[productName] = 0;
}
  });

               callback(null,products);
 }
};
