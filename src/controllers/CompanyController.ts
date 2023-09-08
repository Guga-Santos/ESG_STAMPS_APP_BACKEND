import { Request, Response } from 'express';
import { ICompany } from '../interfaces/ICompany';
import IService from '../interfaces/IService';

export default class CompanyController {
  constructor(private _service: IService<ICompany>) {};

  public async create(req: Request, res: Response) {
    const { body } = req;
    const newCompany = await this._service.create(body);
    return res.status(201).json(newCompany);
  }
}