const CompanyModel = require("../database/schemas/company");

//Endpoint CREATE -------------------------------------------------------------(C)
const createCompany = async (req, res) => {
  try {
    const body = req.body;
    const {
      name,
      website,
      sector,
      company_logo_url,
      company_size,
      company_type,
      company_description,
    } = body;

    const data = {
      name: name,
      website: website,
      sector: sector,
      company_logo_url: company_logo_url,
      company_size: company_size,
      company_type: company_type,
      company_description: company_description,
    };
    const newCompany = new CompanyModel(data);
    await newCompany.save();
    res.status(201).json(newCompany);
  } catch (error) {
    return res.status(500).send({ status: "ERROR TRYCATCH CREATE", message: error });
  }
};

//Endpoint Read All -----------------------------------------------------------(R)
const getCompanyList = async (req, res) => {
  try {
    const company = await CompanyModel.find().populate("relationJob").populate("relationPost");

    if (company) res.status(200).json(company);
    else res.status(404).send({ status: "ERROR", message: "Companys not found" });
  } catch (error) {
    return res.status(500).send({ status: "ERROR TRYCATCH List", message: error });
  }
};

//Endpoint Read One By Id -----------------------------------------------------(R)
const getCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await CompanyModel.findById(id)
      .populate("relationJob")
      .populate("relationPost");
    if (company) res.status(200).json(company);
    else res.status(404).send({ status: "ERROR", message: "Company not found" });
  } catch (error) {
    return res.status(500).send({ status: "ERROR TRYCATCH ById", message: error });
  }
};

//Endpoint Read One By Id -----------------------------------------------------(R)
const getCompanyByName = async (req, res) => {
  try {
    const { name } = req.params;
    console.log("name= "+ name);
    const company = await CompanyModel.find({ name: { $regex: name, $options: "i" } })
      .populate("relationJob")
      .populate("relationPost");
    if (company) res.status(200).json(company);
    else res.status(404).send({ status: "ERROR", message: "Company not found" });
  } catch (error) {
    return res.status(500).send({ status: "ERROR TRYCATCH ByName", message: error });
  }
};

//Endpoint Update -------------------------------------------------------------(U)
const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await CompanyModel.findByIdAndUpdate(id, req.body);
    if (company) res.status(200).json(company);
    else res.status(404).send({ status: "ERROR", message: "Company not Found. Not Updated" });
  } catch (error) {
    return res.status(500).send({ status: "ERROR TRYCATCH UPDATE", message: error });
  }
};

//Endpoint Delete -------------------------------------------------------------(D)
const deleteCompany = async (req, res) => {
  try {
    const company = await CompanyModel.findByIdAndDelete(req.params.id);
    if (company) {
      res.status(200).json(company);
    } else res.status(404).send({ status: "ERROR", message: "Company not Found. Not Deleted." });
  } catch (error) {
    return res.status(500).send({ status: "ERROR TRYCATCH DELETE", message: error });
  }
};

module.exports = {
  createCompany,
  getCompanyList,
  getCompanyById,
  getCompanyByName,
  updateCompany,
  deleteCompany,
};
