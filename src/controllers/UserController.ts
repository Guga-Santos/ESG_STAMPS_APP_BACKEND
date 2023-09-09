import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { IUser } from '../interfaces/IUser';

export default class UserController {
  constructor(private _service: IService<IUser>) {};

  public async create(req: Request, res: Response) {
    const { body } = req;
    const newUser = await this._service.create(body);
    return res.status(201).json(newUser);
  }
}