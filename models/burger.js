var orm = require("../config/orm.js");

orm.updateOne("burgers", "burger_name", "Whopper", 4)