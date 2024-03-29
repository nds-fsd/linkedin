const JobModel = require("../database/schemas/job");

//Endpoint CREATE -------------------------------------------------------------(C)
const createJob = async (req, res) => {
  try {
    const body = req.body;
    const {
      companyName,
      jobPosition,
      countryLocation,
      workLocation,
      workday,
      jobDescription,
      company_logo_url,
      company_size,
      salary,
      experience,
      company,
    } = body;

    const data = {
      companyName: companyName,
      jobPosition: jobPosition,
      countryLocation: countryLocation,
      workLocation: workLocation,
      workday: workday,
      jobDescription: jobDescription,
      company_logo_url: company_logo_url,
      company_size: company_size,
      salary: salary,
      experience: experience,
      company: company,
    };

    const newJob = new JobModel(data);
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    return res
      .status(500)
      .send({ status: "ERROR TRYCATCH CREATE", message: error });
  }
};

//Endpoint Read All -----------------------------------------------------------(R)
const getJobList = async (req, res) => {
  try {
    const job = await JobModel.find();

    if (job) res.status(200).json(job);
    else res.status(404).send({ status: "ERROR", message: "Jobs not found" });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "ERROR TRYCATCH List", message: error });
  }
};

//Endpoint Read One By Id -----------------------------------------------------(R)
const getJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await JobModel.findById(id);
    if (job) res.status(200).json(job);
    else res.status(404).send({ status: "ERROR", message: "Job not found" });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "ERROR TRYCATCH ById", message: error });
  }
};

//Endpoint Update -------------------------------------------------------------(U)
const updateJob = async (req, res) => {
  try {
    console.log();
    const { id } = req.params;
    const job = await JobModel.findByIdAndUpdate(id, req.body);
    if (job) res.status(200).json(job);
    else
      res
        .status(404)
        .send({ status: "ERROR", message: "Job not Found. Not Updated" });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "ERROR TRYCATCH UPDATE", message: error });
  }
};

//Endpoint Delete -------------------------------------------------------------(D)
const deleteJob = async (req, res) => {
  try {
    const job = await JobModel.findByIdAndDelete(req.params.id);
    if (job) {
      res.status(200).json(job);
    } else
      res
        .status(404)
        .send({ status: "ERROR", message: "Job not Found. Not Deleted." });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "ERROR TRYCATCH DELETE", message: error });
  }
};

const linkUser = async (req, res) => {
  try {
    const { jobId, userId } = req.body;

    const job = await JobModel.findById(jobId);
    if (job) {
      console.log(job);

      if (!job.user.includes(userId)) {
        job.user.push(userId);
        await job.updateOne({ $push: { user: userId } });
        res.json(job);
      } else res.status(200).json({ msg: "Usuario ya incuido" });
    } else res.status(200).json({ msg: "No se ha localizado el Job indicado" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(console.log("error del servidor"));
  }
};

const unLinkUser = async (req, res) => {
  try {
    const { jobId, userId } = req.body;
    const job = await JobModel.findById(jobId);
    if (job) {
      if (job.user.includes(userId)) {
        job.user.pull(userId);
        await job.updateOne({ $pull: { user: userId } });
        res.json(job);
      } else res.status(200).json({ msg: "El usuario no existe en este Job" });
    } else res.status(200).json({ msg: "No se ha localizado el Job indicado" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(console.log("error del servidor"));
  }
};

module.exports = {
  createJob,
  getJobList,
  getJobById,
  updateJob,
  deleteJob,
  linkUser,
  unLinkUser,
};
