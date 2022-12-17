const CompanyModel = require("../database/schemas/company");

const getCompanyList = async(req,res) =>{

    const company = await CompanyModel.find();
    res.json(company);
}

const createCompany = async (req, res) => {
    const body = req.body
    const {name, website,sector,company_logo_url,company_size,company_type,company_description} = body

    const data = {
        name : name,
        website : website,
        sector : sector,
        company_logo_url : company_logo_url,
        company_size : company_size,
        company_type : company_type,
        company_description : company_description
    }
    const newCompany = new CompanyModel(data)
    await newCompany.save()
    res.json(newCompany)
}
const updateCompany = async(req,res) =>{
    console.log(req)
    const{id}= req.params
    const company = await CompanyModel.findByIdAndUpdate(id,req.body);
    res.json(company)
}
const deleteCompany = (req, res)=>{
    CompanyModel.findByIdAndDelete(req.params.id),(err,company) => {
        if(!company){
            return res.status(404).send('company not found')
        }
        res.status(200).json(company)
    }
}
module.exports = {
    deleteCompany,
    updateCompany,
    createCompany,
    getCompanyList
}