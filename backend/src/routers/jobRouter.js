const { Router } = require("express");

const middle = require("../middleware/validations.js");
const md_auth = require("../middleware/autenticated") 

const {
  createJob,
  getJobList,
  getJobById,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

const routerJob = Router();

routerJob.post("/", [middle.time, middle.validateHasBody], createJob);
routerJob.get("/", [middle.time], getJobList);
routerJob.get("/:id",[middle.time, middle.validateIdFormat], getJobById);
routerJob.patch("/:id",[middle.time, middle.validateIdFormat,middle.validateHasBody], updateJob);
routerJob.delete("/:id", [middle.time, middle.validateIdFormat], deleteJob);


module.exports = routerJob;
