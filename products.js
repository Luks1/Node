 var fs = require("fs");
//calling module
module.exports = function(path){

  this.productNames = function(callback){

//creat empty array
  var products = [];
//creat an empty map
  var myMap = {};
//looking for a listInFiles
  var listInFiles = fs.readFileSync("./files/products.csv", "utf8");
//spliting  rowsInFile
  var items = listInFiles.split('\n');
// creating forEach loop for my rows in file
             items.forEach(function(item){
// spliting my productNames in rowsInFile
  var productName = item.split(",")[1];

             if(myMap[productName]=== undefined){
                products.push(productName);
                             myMap[productName] = 0;
}
});


               callback(null,products);
  }

//creating function for productsSold
  this.productsSold = function(callback) {
    //reading a list in file
      var list = fs.readFileSync('./files/products.csv', 'utf8');
      //spliting items
      var items = list.split('\n');
      //creating an empty
      var products = {};
      //creating forEach loop
      items.forEach(function(item) {

          var productName = item.split(",")[1];
          var productsQuantity = Number(item.split(",")[2]);
      // creating an if/else statement
        if  (products[productName] === undefined){
          products[productName] = productsQuantity;
        } else {
                products[productName] += productsQuantity;
        };

      });
       callback(null, products);

     };
};
