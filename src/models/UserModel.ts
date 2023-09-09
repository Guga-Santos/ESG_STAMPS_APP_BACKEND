import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IUser } from '../interfaces/IUser';
import MongoModel from './MongoModel';

const UsersMongooseSchema = new Schema<IUser>({
  name: String,
  email: String,
  password: String,
  role: String,
}, { versionKey: false });

class User extends MongoModel<IUser> {
  constructor(model = mongooseCreateModel('Users', UsersMongooseSchema)) {
    super(model);
  }

  public async findOne(email: string): Promise<IUser | null> {
    return this._model.findOne({ email });
  }
}

export default User;