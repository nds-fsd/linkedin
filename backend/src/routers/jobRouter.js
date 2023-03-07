const { Router } = require("express");

const middle = require("../middleware/validations.js");
const md_auth = require("../middleware/autenticated") 

const {
  createJob,
  getJobList,
  getJobById,
  updateJob,
  deleteJob,
  linkUser,
  unLinkUser,
} = require("../controllers/jobController");

const routerJob = Router();

routerJob.post("/", [middle.time, middle.validateHasBody], createJob);
routerJob.get("/", [middle.time], getJobList);
//,md_auth.asureAuth
routerJob.get("/:id",[middle.time, middle.validateIdFormat], getJobById);
routerJob.patch("/:id",[middle.time, middle.validateIdFormat,middle.validateHasBody], updateJob);
routerJob.delete("/:id", [middle.time, middle.validateIdFormat], deleteJob);

routerJob.post("/link/",  linkUser);
routerJob.post("/unlink/", [middle.time, middle.validateHasBody], unLinkUser);


module.exports = routerJob;
