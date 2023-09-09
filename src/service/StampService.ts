import { ErrorTypes } from "../errors/catalog";
import { IModel } from "../interfaces/IModel";
import IService from "../interfaces/IService";
import { IStamp, StampZodSchema } from "../interfaces/IStamp";

class StampService implements IService<IStamp> {
  private _stamp:IModel<IStamp>;

  constructor(model: IService<IStamp>) {
    this._stamp = model;
  }

  async create(obj: unknown): Promise<{ name: string; description: string; url: string; logo: string; }> {
    const parsed = StampZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._stamp.create(parsed.data);
  }

  async read(): Promise<{ name: string; description: string; url: string; logo: string; }[] | null> {
    const list = await this._stamp.read();
    
    return list;
  }

  async readOne(_id: string): Promise<{ name: string; description: string; url: string; logo: string; }> {
    const stamp = await this._stamp.readOne(_id);

    if(!stamp) throw new Error(ErrorTypes.EntityNotFound);

    return stamp;
  }

  async update(_id: string, obj: Partial<{ name: string; description: string; url: string; logo: string; }>): Promise<{ name: string; description: string; url: string; logo: string; } | null> {
    throw new Error("Method not implemented.");
  }

  async delete(_id: string): Promise<{ name: string; description: string; url: string; logo: string; } | null> {
    throw new Error("Method not implemented.");
  }
}

export default StampService;