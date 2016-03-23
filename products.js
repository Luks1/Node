var fs = require("fs");
//calling module
module.exports = function(path){
this.productNames = function(callback){

//creat empty array
var products = [];
var myMap = {};

//creat split to become in new lines

  //creating forEach to leave the lines unique
  var listInFiles = fs.readFileSync("./files/products.csv", "utf8");
  var answer = listInFiles.split('\n');


  answer.forEach(function(answer){
  //var listInFiles = fs.readFileSync("./files/products.csv", "utf8");
   var productName = answer.split(",")[1];
//products.push(productName);
if(myMap[productName]=== undefined){
products.push(productName);
myMap[productName] = 0;
}
  });

// then console.log the output of answer
 //console.log(myMap);
 callback(null,products);
 }
};




























// var fs = require('fs'); // calling modules
//
// 	module.exports = function(filePath){
//
// 		this.productNames = function(callback) {
//
// 			var filesInFolder = fs.readFileSync(filePath, "utf8");
//
// 			//split the content of the file into rows
// 			var rows = filesInFolder.split('\n');
//
// 			console.log("===> " + rows.length);
//
// 			//now use each row and split it up tp find each product
//
// 	        //
// 	        var listOfProducts = [];
//
// 	        var productMap = {};
//
// 	        rows.forEach(function(row){
// 	        	//console.log(row.split(',')[1]);
// 	        	var productName = row.split(',')[1];
//
// 	        	if( productMap[productName] === undefined ){
// 	        		listOfProducts.push(productName);
// 	        		productMap[productName] = 0;
// 	        	}
//
// 	        });
//
// 			//now create a unique lis, lucts
// 	        callback(null, listOfProducts);
//
// 	    };
//
//
// 	    this.productsSold = function(callback){
//
// 	    	var filesInFolder = fs.readFileSync(filePath, "utf8"); // reading the file which contains  products and the prices
//
// 	    	var rowsInFile = filesInFolder.split('\n'); // putting them in row because we can not loop in a string
// 	    	 console.log(rowsInFile.length);
//
//
// 	    	var productQuantity = []; // we will quantgity here
//
// 	    	var quantityMap = {};
//
//
// 	    	rowsInFile.forEach(function(row){
//
// 	            var fields = row.split(',');
//
// 	            var currentProduct = fields[1];
// 	    		var productQty = fields[2];
//
// 	            console.log( " fields : " +  JSON.stringify(fields));
//
// 	            if( quantityMap[currentProduct] === undefined){
// 	                quantityMap[currentProduct] = 0;
// 	            }
// 	            quantityMap[currentProduct] = quantityMap[currentProduct] +  Number(productQty);
//
//
// 	        });
//
//
//
// 	        console.log( "-----> " + JSON.stringify(quantityMap));
// 	        callback(null, quantityMap);
// 	    };
//
//
//
//
// 	};
