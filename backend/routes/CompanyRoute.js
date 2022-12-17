const {Router} = require("express");

const{deleteCompany,
    updateCompany,
    createCompany,
    getCompanyList} = require("../controllers/CompanyController");

const routerCompany = Router();

routerCompany.post("/company", createCompany);
routerCompany.delete("/company", deleteCompany);
routerCompany.patch("/company", updateCompany);
routerCompany.get("/company", getCompanyList);

module.exports = routerCompany
