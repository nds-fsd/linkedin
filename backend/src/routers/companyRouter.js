const { Router } = require("express");

const middle = require("../middleware/validations.js");

const {
  createCompany,
  getCompanyList,
  getCompanyById,
  updateCompany,
  deleteCompany,
} = require("../controllers/companyController");

const md_auth =require ('../middleware/autenticated')

const routerCompany = Router();

routerCompany.post("/", middle.time, middle.validateHasBody, createCompany);
// routerCompany.get("/", [md_auth.asureAuth,middle.time ], getCompanyList);
routerCompany.get("/", [md_auth.asureAuth, middle.time], getCompanyList);
routerCompany.get("/:id", middle.time, middle.validateIdFormat, getCompanyById);
routerCompany.patch("/:id", middle.time, middle.validateIdFormat, middle.validateHasBody, updateCompany);
routerCompany.delete("/:id", middle.time, middle.validateIdFormat, deleteCompany);

module.exports = routerCompany;