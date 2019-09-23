var connection = require("./connection");

var orm = {
    selectAll: function (tableName) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableName, function (err, result) {
            if (err) throw err;
            console.log(result);
        });

    },
    insertOne: function (tableName, colName, data) {
        var queryString = "INSERT INTO ?? (??) VALUES(?)";
        connection.query(queryString, [tableName, colName, data], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (tableName, colName, data) {
        var queryString = "UPDATE TABLE ?? SET ?? = ?";
        connection.query(queryString, [tableName, colName, data], function (err, result) {
            if (err) throw err;
            console.log(result);
        })
    }
}


module.exports = orm;