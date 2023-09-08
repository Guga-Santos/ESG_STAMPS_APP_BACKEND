import { ICompany } from "../interfaces/ICompany";
import Company from "../models/CompanyModel";
const companies = require('./seed.json');

export default class Populate {
  public companySeed() {
    companies.forEach((company: ICompany) => {
      new Company().create(company);
    })
  }
}