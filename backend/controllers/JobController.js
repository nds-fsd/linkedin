//necesitaremos un middleware  const {validateTodo, addDateMiddleware} = require('../middleware');
const UserModel = require("../database/schemas/jobs");
const { job } = require("../routes");

const getJobList = async (req, res) => {
  const job = await JobModel.find();
  res.json(job);
};

const registerJob = async (req, res) => {
  try {
    const body = req.body;
    const newJob = new JobModel(data);
    await newJob.save();
    res.json(newJob);
  } catch (err) {
    res.status(404).send("something occurred, try again");
  }
};

const editJob = async (req, res) => {
  console.log(req);
  const { id } = req.params;
  const job = await JobModel.findByIdAndUpdate(id, req.body);
  res.json(job);
};

const deleteJob = (req, res) => {
  JobModel.findByIdAndDelete(req.params.id, (err, user) => {
    if (!job) {
      return res.status(500).json("Job not found");
    }
    res.status(200).json(job);
  });
};

const findJob = async (req, res) => {
  const { id } = req.params;
  const job = await JobModel.find(id);
  res.json(job);
};

module.exports = {
  registerJob,
  getJobList,
  editJob,
  deleteJob,
  findJob,
};
