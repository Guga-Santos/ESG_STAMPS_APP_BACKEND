import { IModel } from "../interfaces/IModel";
import IService from "../interfaces/IService";
import { IStamp } from "../interfaces/IStamp";

class StampService implements IService<IStamp> {
  private _stamp:IModel<IStamp>;

  constructor(model: IService<IStamp>) {
    this._stamp = model;
  }
  create(obj: unknown): Promise<{ name: string; description: string; url: string; logo: string; }> {
    throw new Error("Method not implemented.");
  }
  read(): Promise<{ name: string; description: string; url: string; logo: string; }[] | null> {
    throw new Error("Method not implemented.");
  }
  readOne(_id: string): Promise<{ name: string; description: string; url: string; logo: string; }> {
    throw new Error("Method not implemented.");
  }
  update(_id: string, obj: Partial<{ name: string; description: string; url: string; logo: string; }>): Promise<{ name: string; description: string; url: string; logo: string; } | null> {
    throw new Error("Method not implemented.");
  }
  delete(_id: string): Promise<{ name: string; description: string; url: string; logo: string; } | null> {
    throw new Error("Method not implemented.");
  }
}

export default StampService;