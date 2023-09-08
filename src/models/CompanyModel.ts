import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICompany } from '../interfaces/ICompany';
import MongoModel from './MongoModel';

const companyMoongoseSchema = new Schema<ICompany>({
  name: String,
  description: String,
  url: String,
  email: String,
  sector: String,
  stamps: [String],
  logo: String
}, { versionKey: false });

class Company extends MongoModel<ICompany> {
  constructor(model = mongooseCreateModel('Companies', companyMoongoseSchema)) {
    super(model)
  }
}

export default Company;