const express = require("express");
const router = express.Router()
const userRoutes = require("./user")
const companyRoutes = require("./CompanyRoute")


router.use("/user", userRoutes)
router.use("/company",companyRoutes)

module.exports = router;