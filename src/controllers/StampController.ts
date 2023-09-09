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

  public async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const stamp = this._service.readOne(id);
    res.status(200).json(stamp);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;

    const updated = await this._service.update(id, body);

    return res.status(201).json(updated);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    await this._service.delete(id);
    return res.status(204).end();
  }
}