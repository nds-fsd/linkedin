const {Schema,model} = require('mongoose')
const jobsSchema = new Schema (
    {
    companyName: {type: String, required: true},
    jobPosition: {type: String, required: true},
    countryLocation: {type: String, required: true},
    workLocation: {type: String},
    workDay: {type: String, required: true},
    jobDescription: {type: String, required: true},
    company_size: {type: String},
    company_logo_url: {type: String},
    salary: {type: String}
});
const Jobs = model('jobs',jobsSchema)
module.exports = Jobs