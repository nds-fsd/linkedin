const { Router } = require("express");

const {
  registerJob,
  getJobList,
  editJob,
  deleteJob,
  findJob,
} = require("../controllers/JobController");

const router = Router();

router.post("/", registerJob);
router.get("/", getJobList);
router.patch("/:id", editJob);
router.delete("/:id", deleteJob);
router.get("/:id", findJob);

module.exports = router;
