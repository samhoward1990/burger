var express = require("express");
var orm = require("./config/orm");

orm.updateOne("burgers", "burger_name", "Whopper")