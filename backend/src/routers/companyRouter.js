const { Router } = require("express");

const middle = require("../middleware/validations.js");
const mdAuth = require("../middleware/autenticated") 

const {
  createCompany,
  getCompanyList,
  getCompanyById,
  updateCompany,
  deleteCompany,
} = require("../controllers/companyController");

const md_auth =require ('../middleware/autenticated')

const routerCompany = Router();

routerCompany.post("/", [md_auth.asureAuth, middle.time, middle.validateHasBody] , createCompany);
// routerCompany.get("/", [md_auth.asureAuth,middle.time ], getCompanyList);
routerCompany.get("/", [md_auth.asureAuth, middle.time], getCompanyList);
routerCompany.get("/:id", [md_auth.asureAuth, middle.time, middle.validateIdFormat] , getCompanyById);
routerCompany.patch("/:id", [md_auth.asureAuth, middle.time, middle.validateIdFormat,middle.validateHasBody] , updateCompany);
routerCompany.delete("/:id", [md_auth.asureAuth, middle.time, middle.validateIdFormat], deleteCompany);

module.exports = routerCompany;
