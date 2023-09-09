import { Request, Response } from 'express';
import { ICategory } from '../interfaces/ICategory';
import IService from '../interfaces/IService';

export default class CategoryController {
  constructor(private _service: IService<ICategory>) {};

  public async create(req: Request, res: Response) {
    const { body } = req;
    const newCategory = await this._service.create(body);
    return res.status(201).json(newCategory);
  }

  public async read(req: Request, res: Response) {
    const list = await this._service.read();
    return res.status(200).json(list);
  }

  public async readOne(req: Request, res: Response) {
    const { id  } = req.params;
    const category = await this._service.readOne(id);

    return res.status(200).json(category);
  }
}