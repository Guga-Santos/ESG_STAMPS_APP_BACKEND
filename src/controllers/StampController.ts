import IService from "../interfaces/IService";
import { IStamp } from "../interfaces/IStamp";

export default class StampController {
  constructor(private _service: IService<IStamp>) {};
}