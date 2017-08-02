var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",

	password: " ", //censored password
	database: "bamazon_DB"

});

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);

	displayAvailable();
	userInput();

});

function displayAvailable() {
	connection.query("SELECT * from products", function(err, res) {

    	for (var i = 0; i < res.length; i++) {
    		console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
    		console.log("-----------------------------------");
		}
	});
}		


function userInput() {
	inquirer.prompt([
		{
   			name: "productId",
    		type: "input",
      		message: "Enter Product ID.",
    	},
    	{
    	name: "productQty",
    	type: "input",
    	message: "Enter Product Quantity."
    	}
    ]).then(function(answer) {

    	connection.query("SELECT * from products", function(err, res) {
    	
    		var j = answer.productId - 1;
    		
    		console.log("The quantity of Product " + answer.productId + " you intend to purchase is " + answer.productQty);
    		console.log("The quantity of Stock " + answer.productId + " is " + res[j].stock_quantity);

    		if (answer.productQty < res[j].stock_quantity) {

      			var updateQty = res[j].stock_quantity - answer.productQty

      			console.log("After purchase, the quantity of stock is " + updateQty);

        		"INSERT INTO bamazon_DB ?",
        		{
        			stock_quantity: updateQty
        		}
      		} else {
        		console.log("Insufficient Quantity")
      		}
    	});
    });
}