const express = require("express");
const router = express.Router()

const userRoutes = require("./user")
const jobRoutes = require("./job")
const companyRoutes = require("./CompanyRoute")
const postRoutes = require("./post")


router.use("/user", userRoutes)
router.use("/job", jobRoutes)
router.use("/company",companyRoutes)
router.use("/post",postRoutes)


module.exports = router;