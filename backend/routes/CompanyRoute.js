const {Router} = require("express");

const{deleteCompany,
    updateCompany,
    createCompany,
    findCompanyList,
    getCompanyList} = require("../controllers/CompanyController");

const routerCompany = Router();

routerCompany.post("/", createCompany);
routerCompany.delete("/:id", deleteCompany);
routerCompany.patch("/:id", updateCompany);
routerCompany.get("/", getCompanyList);
routerCompany.get("/:id", findCompanyList);

module.exports = routerCompany
