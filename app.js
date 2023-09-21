const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Shashi6204@', // Replace with your actual database password
  database: 'student_login',
});

connection.connect(function(err) {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected!");
  
  var sql = "INSERT INTO student (username, password) VALUES ('shashi123@gmail.com', 'Rao_sahab0003')";
  connection.query(sql, function (err, result) {
    if (err) {
      console.error("Error inserting record:", err);
    } else {
      console.log("1 record inserted");
    }
    // Close the MySQL connection
    connection.end();
  });
});
