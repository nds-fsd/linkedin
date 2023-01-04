const { Schema, model } = require('mongoose');

const jobSchema = new Schema ({
    
    companyName: { type: String, required: true },
    jobPosition: { type: String, required: true },
    countryLocation: { type: String, required: true },
    workLocation: { type: String},
    workday: { type: String, required: true },
    jobDescription: { type: String, required: true },
    company_logo_url: { type: String },
    company_size: { type: String },
    salary: { type: Number, required: true },
    experience: { type: String, required: true } 
    
});

const Jobs = model('jobs', jobSchema);

module.exports = Jobs;
