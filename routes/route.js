const express = require('express');
const route = express.Router();
const {normal,createnew,readById, updateById,deleteById} = require("../controllers/crudcontrollers.js");

route.get("/",normal)

route.post("/create",createnew) 
route.get("/read/:id",readById) 
route.post("/update/:id",updateById);
route.get("/delete/:id",deleteById);

module.exports= route;