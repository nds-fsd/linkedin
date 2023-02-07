const { Router } = require("express");

const middle = require("../middleware/validations.js");
const mdAuth = require("../middleware/autenticated") 

const {
  createJob,
  getJobList,
  getJobById,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

const routerJob = Router();

routerJob.post("/", [md_auth.asureAuth, middle.time, middle.validateHasBody], createJob);
routerJob.get("/", [md_auth.asureAuth, middle.time], getJobList);
routerJob.get("/:id",[md_auth.asureAuth, middle.time, middle.validateIdFormat], getJobById);
routerJob.patch("/:id",[md_auth.asureAuth, middle.time, middle.validateIdFormat,middle.validateHasBody], updateJob);
routerJob.delete("/:id", [md_auth.asureAuth, middle.time, middle.validateIdFormat], deleteJob);


module.exports = routerJob;
