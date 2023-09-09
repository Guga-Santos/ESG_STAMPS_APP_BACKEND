import { Request, Response } from "express";
import IService from "../interfaces/IService";
import { IStamp } from "../interfaces/IStamp";

export default class StampController {
  constructor(private _service: IService<IStamp>) {};

  public async create(req: Request, res: Response) {
    const { body } = req;
    const newStamp = await this._service.create(body);
    return res.status(201).json(newStamp);
  }

  public async read(req: Request, res: Response) {
    const list = await this._service.read();
    return res.status(200).json(list);
  }
}