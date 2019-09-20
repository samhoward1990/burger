var mysql = require("mysql");
require("dotenv").config();
var env = process.env;
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: env.MYSQL_PW,
    database: "burgers_db"
});
connection.connect(function (err) {
    if (err) throw err;
});
module.exports = connection;