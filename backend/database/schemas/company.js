const { Schema, model }  = require('mongoose');

const companySchema = new Schema({
    
    id: {type:Number},
    name:  {type: String, required: true}, 
    website: {type: String},
    sector: {type: String},
    company_logo_url: {type: String},
    company_size: {type: String},
    company_type: {type: String},
    company_description: {type: String},
    
});

const Company = model('company', companySchema);

module.exports = Company;