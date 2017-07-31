var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",

	password: "123Nori$$$", //insert password
	database: "bamazon_DB"

});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

  displayAvailable();

});

function displayAvailable() {
	connection.query("SELECT * from products", function(err, res) {

    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
    }
    console.log("-----------------------------------");

	});
}

// create in mySql
// drop database if exists bamazon_DB;
// CREATE DATABASE bamazon_DB;

// use bamazon_DB;

// CREATE TABLE products (

// id integer auto_increment not null,
// product_name varchar(100) not null,
// department_name varchar(100) not null,
// price decimal (5,2) not null,
// stock_quantity integer(4) not null,
// primary key (id)

// );

// insert into products (product_name, department_name, price, stock_quantity)
// values ("mockProduct1", "departmentName1", 10.00, 500);

// insert into products (product_name, department_name, price, stock_quantity)
// values ("mockProduct2", "departmentName2", 20.00, 400);

// insert into products (product_name, department_name, price, stock_quantity)
// values ("mockProduct3", "departmentName3", 30.00, 300);

// insert into products (product_name, department_name, price, stock_quantity)
// values ("mockProduct4", "departmentName4", 40.00, 200);

// insert into products (product_name, department_name, price, stock_quantity)
// values ("mockProduct5", "departmentName5", 50.00, 100);

// insert into products (product_name, department_name, price, stock_quantity)
// values ("mockProduct6", "departmentName6", 60.00, 90);

// insert into products (product_name, department_name, price, stock_quantity)
// values ("mockProduct7", "departmentName7", 70.00, 80);

// insert into products (product_name, department_name, price, stock_quantity)
// values ("mockProduct8","departmentName8", 80.00, 70);

// insert into products (product_name, department_name, price, stock_quantity)
// values ("mockProduct9","departmentName9", 90.00, 60);

// insert into products (product_name, department_name, price, stock_quantity)
// values ("mockProduct10","departmentName10", 100.00, 50);