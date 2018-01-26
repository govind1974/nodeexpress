var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sa",
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM sap_employee ORDER BY emp_name", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
