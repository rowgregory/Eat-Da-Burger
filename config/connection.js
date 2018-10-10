// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
  connection = mysql.createConnection({
    host:"a07yd3a6okcidwap.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user:"j1ibt0cad1m2wjj5",
    password:"tc2w5hcoj9e11ohe",
    database:"t6rydj8bgdgjwuhg"
  });
};
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
