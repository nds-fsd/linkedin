const express = require("express");
const router = express.Router()

const userRoutes = require("./userRouter")
const jobRoutes = require("./jobRouter")
const companyRoutes = require("./companyRouter")
const postRoutes = require("./postRouter")


router.use("/user", userRoutes)
router.use("/job", jobRoutes)
router.use("/company",companyRoutes)
router.use("/post",postRoutes)


module.exports = router;