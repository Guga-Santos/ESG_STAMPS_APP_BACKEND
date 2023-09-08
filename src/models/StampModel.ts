import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IStamp } from '../interfaces/IStamp';
import MongoModel from './MongoModel';

const stampsMongooseSchema = new Schema<IStamp>({
  name: String,
  description: String,
  url: String,
  logo: String,
},{ versionKey: false });

class Stamp extends MongoModel<IStamp> {
  constructor(model = mongooseCreateModel('Stamps', stampsMongooseSchema)) {
    super(model);
  }
}

export default Stamp;