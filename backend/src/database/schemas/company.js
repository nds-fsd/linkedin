const { Schema, model } = require("mongoose");

const companySchema = new Schema({
  name: { type: String, required: true },
  website: { type: String },
  sector: { type: String },
  company_logo_url: { type: String },
  company_size: { type: String },
  company_type: { type: String },
  company_description: { type: String },
  relationJob: { type: [Schema.ObjectId], ref: "job" },
  relationPost: { type: [Schema.ObjectId], ref: "post" },
  owner:{type: Schema.ObjectId, ref:"user"},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  user:{ type: [Schema.ObjectId], ref: "user" },
  relationJob: { type: [Schema.ObjectId], ref: "job" },
});

const Company = model("company", companySchema);

module.exports = Company;
