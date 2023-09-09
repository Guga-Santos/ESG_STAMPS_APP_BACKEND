import { IModel } from "../interfaces/IModel";
import IService from "../interfaces/IService";
import { IUser } from "../interfaces/IUser";

class UserService implements IService<IUser> {
  private _user:IModel<IUser>;

  constructor(model: IModel<IUser>) {
    this._user = model;
  }
}