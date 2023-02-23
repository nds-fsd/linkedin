const { Schema, model } = require("mongoose");

const jobSchema = new Schema({
  companyName: { type: String, required: true },
  jobPosition: { type: String, required: true },
  countryLocation: { type: String, required: true },
  //workLocation: { type: String },
  //workday: { type: String, required: true },
  //jobDescription: { type: String, required: true },
  //company_logo_url: { type: String },
  //company_size: { type: Number },
  salary: { type: Number, required: true },
  //experience: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  user:{ type: [Schema.ObjectId], ref: "user" },
  company:{ type: [Schema.ObjectId], ref: "company" }
});

const Job = model("job", jobSchema);

module.exports = Job;
