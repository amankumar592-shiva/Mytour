



// //      con.connect(function(err) {
// //      if (err) {
// //         console.error("Connection error:", err.message);
// //         return;  
// //         }
// //      console.log("Connected!"); 
// //     });

// //     var sql = "CREATE TABLE employee(name VARCHAR(255), address VARCHAR(255),city VARCHAR(255))";
// //     con.query(sql, function (err, result) {
// //              if (err) return err; 
// //              console.log('new db');
// //     });

   

// //  con.connect(function(err) {
// //  if (err) throw err;
// //             console.log("Connected!");
// //             var sql = "INSERT INTO student (name, address,age ) VALUES ?";

// //             var values = [
// //               ['John', 'Highway 71','Delhi'],
// //               ['Peter', 'Lowstreet 4','Dwarka'],
// //               ['John', 'Highway 71','Delhi'],
// //               ['Peter', 'Lowstreet 4','Dwarka'],
// //               ['Peter', 'Lowstreet 4','Dwarka'],
// //               ['John', 'Highway 71','Delhi'],
// //               ['Peter', 'Lowstreet 4','Dwarka'],
          
// //             ];

// //             con.query(sql, [values], function (err, result) {
// //               if (err) throw err;
// //               console.log("Number of records inserted: " + result.affectedRows);
// //             });
// //             });

// //             //2
          
// //             //  con.connect(function(err) {
// //             //  if (err) throw err;
// //             //  con.query("SELECT  name, address,age  FROM customers", function (err, result, fields) {
// //             // if (err) throw err;
// //             // console.log(result);
// //             // });
// //             // });
            



//  // new exp.
//  var mysql = require('mysql2');

//  var con = mysql.createConnection({
//    host: "localhost",
//    user: "root",
//    password: "Aman@2025shiva",
//    database:'newdb'
//  });
 
//  con.connect(function(err) {
//    if (err) throw err;
//    console.log("Connected!");
//  });


// var mysql = require('mysql2');  
// var con = mysql.createConnection({
// host: 'localhost',  
// user: 'root',       
// password: 'Aman@2025shiva', 
// database: 'amandb'
// });


// con.connect(function(err) {
//   if(err) throw err;
//   console.log('Connected!')


// con.query("CREATE DATABASE amandb", function(err,result){
// if(err) throw err;
// console.log("Database Created");
// });
// });

// con.connect(function(err) {
//     if(err) throw err;
//    console.log('Connected!')
//   });


// var sql ="CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255), city VARCHAR(255), Salary VARCHAR(255))";

// con.query(sql, function(err,result){
//   if(err) throw err;
//   console.log("table created")
// });


// con.connect(function(err){
//   if(err) throw err;
//   console.log("Connected!")
// });
// var sql = "INSERT INTO customers (name, address, city, salary) VALUES ?";
//   var values = [
//     ['John', 'Highway 71','Jaipur', '20k'],
//     ['Jack', 'Highway 71','Delhi', '30k'],
//     ['Aman', 'Highway 71','Mumbai', '40k'],
//     ['Rani', 'Highway 71','Pune', '50k'],
//     ['Rohini', 'Highway 71','Bihar', '10k'],
//   ];

//   con.query(sql,[values], function(err, result){
//     if(err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows)
//   });


// con.connect(function(err) {
//   if (err) throw err;
//     con.query("SELECT * FROM customers WHERE name LIKE 'A%'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DELETE FROM customers WHERE name = 'Rani'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
//   });
// });

//3
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

//4

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "UPDATE customers SET address = 'valley 345' WHERE address = 'highway 71'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result.affectedRows + " record  updated");
//   });
// });

//5  result update karne per show karna 
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

//6 // limits
// con.connect(function(err) {
//   if (err) throw err;
//   // var sql = "SELECT * FROM customers LIMIT 3";
//   var sql = "SELECT * FROM customers LIMIT 2, 6";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// 5 join table

// var mysql= require('mysql2');
// var con = mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"Aman@2025shiva",
//    database:"amandb"
// })


// con.connect(function(err){
//   if(err) throw err;
//   console.log('connected');
// })

// //create table

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
  
//   var sql = "CREATE TABLE  apple ( name VARCHAR(255), favrite_product VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

// inserted table



// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO  apple (name, favrite_product) VALUES ?";
//   var values = [
//     ['John', 'apple'],
//     ['Peter', 'pineapple'],
//     ['Amy', ' guvava'],
//     ['Hannah', 'redchili'],
//     ['Michael', 'orange'],
//     ['Sandy', 'mango'],
//     ['Betty', 'papaya'],
    
//   ];
//   con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM apple", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// second table
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE fruits (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });


// inserted 2 table
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO  fruits (name, address) VALUES ?";
//   var values = [
//     ['John', 'Highway 71'],
//     ['Peter', 'Lowstreet 4'],
//     ['Amy', 'Apple st 652'],
//     ['Hannah', 'Mountain 21'],
//     ['Michael', 'Valley 345'],
//     ['Sandy', 'Ocean blvd 2'],
//     ['Betty', 'Green Grass 1'],
//     ['Richard', 'Sky st 331'],
   
//   ];
//   con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT user.name AS user, product.name AS favorite FROM user JOIN product ON user.favorite_product = product.id";

//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });



// new database create
// var mysql = require('mysql2');
// var con = mysql.createConnection({

//   host:"localhost",
//    user:"root",
//    password:"Aman@2025shiva", 
//    database:"apdb"
// });


//  con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE sales_3 (quantitysolid VARCHAR(255), salesdate VARCHAR(255), totalprice INT)";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO sales_3 (quantitysolid, salesdate, totalprice ) VALUES ?";
//   // var sql = "ALTER TABLE salesrecord MODIFY  quantitysolid VARCHAR(255) "
//   var values = [
//     ['apple', '9 jan 2025', '420'],
//     ['papaya', '5 may 2025', '120'],
//     ['mango', '24 may 2025','2426'],
//     ['pineapple', '2 jun 2025','675'],
//     ['orange', '16 oct. 2025', '542'],
//     ['stoneapple', '22 Dec.2024','6789'],
//     ['grapple', '7 feb 2024', '4597'],
//     ['grapes', '3 jan. 2025','2490'],
   
//   ];
//   con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM  sales_3 ", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// question 2 
//  con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE p_details (productdate VARCHAR(255), name VARCHAR(255), category VARCHAR(255), unitprice INT)";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });


// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO p_details  (productdate, name,category, unitprice ) VALUES ?";
  
//   var values = [
//     ['9 jan 2025', 'APPLE','A','340'],
//     ['5 may 2025', 'BANANA','B','540'],
//     ['24 may 2025','MANGO','A','760'],
//     ['2 jun 2025','PAPAYA','D','530'],
//     ['16 oct. 2025', 'GUVAVA','B','890'],
//     ['22 Dec.2024','ORANGE','A','890'],
//     ['7 feb 2024', 'PINEAPPLE','C','346'],
//     ['3 jan. 2025','STROBARY','B','630'],
   
//   ];
//   con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   });
// });


//question 9

// con.connect(function(err) {
//   if (err) throw err;

//   var sql = "SELECT SUM(totalprice) AS Total_revenue FROM sales_3";
//   con.query(sql, function(err, result, fields) {
//     if (err) throw err;
//     console.log("Total Revenue:", result[0].Total_revenue);
//   });
// });
  



// question 8 

// con.connect(function(err) {
//   if (err) throw err;

//   var sql = "SELECT SUM(unitprice) AS Total_revenue FROM p_details WHERE unitprice < 100";
//   con.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log("Total Revenue (unitprice < $100):", result[0].Total_revenue);
//   });
// });


// datafilter < $ 100  etc.
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM p_details  WHERE  unitprice > 500", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });  


//  con.connect(function(err){
//   if (err) throw err;
//  var sql = ("SELECT  SUM(totalprice) AS  totalreveanue FROM sales_3");
//  con.query(sql, function(err, result) {
//   if(err)  throw err;
//   console.log("Total Revenue:", result.Totalrevenue);
//  });
//  });

con.connect(function(err) {
  if (err) throw err;

  var sql = "SELECT SUM(totalprice) AS Totalrevenue FROM sales_3";
  con.query(sql, function(err, result, fields) {
    if (err) throw err;
    console.log("Total Revenue:", result[0].Totalrevenue);
  });
});
