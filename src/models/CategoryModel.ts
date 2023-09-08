import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICategory } from '../interfaces/ICategory';
import MongoModel from './MongoModel';

const categoryMongooseModel = new Schema<ICategory>({
  name: String,
  description: String,
  stamps: [String]
},{ versionKey: false });

class Category extends MongoModel<ICategory> {
  constructor(model = mongooseCreateModel('Categories', categoryMongooseModel)) {
    super(model);
  }
}

export default Category;