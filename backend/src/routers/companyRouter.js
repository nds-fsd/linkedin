const { Router } = require("express");

const middle = require("../middleware/validations.js");
const md_auth = require("../middleware/autenticated") 

const {
  createCompany,
  getCompanyList,
  getCompanyById,
  getCompanyByName,
  updateCompany,
  deleteCompany,
} = require("../controllers/companyController");



const routerCompany = Router();

routerCompany.post("/", [middle.time, middle.validateHasBody] , createCompany);
// routerCompany.get("/", [,middle.time ], getCompanyList);
routerCompany.get("/", [middle.time, md_auth.asureAuth], getCompanyList);
routerCompany.get("/:id", [middle.time, middle.validateIdFormat] , getCompanyById);
routerCompany.get("/name/:name", [middle.time] , getCompanyByName);
routerCompany.patch("/:id", [middle.time, middle.validateIdFormat,middle.validateHasBody] , updateCompany);
routerCompany.delete("/:id", [middle.time, middle.validateIdFormat], deleteCompany);

module.exports = routerCompany;
