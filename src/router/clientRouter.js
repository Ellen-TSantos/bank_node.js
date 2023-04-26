const express = require("express");
const router = express.Router();


const { ClientController } = require("../controllers/clientController");
const dataBase = require("../infraData/dataBase/data");

const clientController = new ClientController();


router.post("/customerData/new", clientController.exec);

router.get("/customerData/new/", (req, res) => {
return res.send(dataBase)
 
});


module.exports =  router;
