import { ICompany } from "../interfaces/ICompany";
import Company from "../models/CompanyModel";
const companies = require('./seed.json');

export default class Populate {
  public companySeed() {
    const newCompany = new Company();
    companies.forEach((company: ICompany) => {
      newCompany.create(company);
    })
  }
}