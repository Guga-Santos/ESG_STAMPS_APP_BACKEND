import { ErrorTypes } from "../errors/catalog";
import { CategoryZodSchema, ICategory } from "../interfaces/ICategory";
import { IModel } from "../interfaces/IModel";
import IService from "../interfaces/IService";

class CategoryService implements IService<ICategory> {
  private _category:IModel<ICategory>;

  constructor(model: IModel<ICategory>) {
    this._category = model;
  }
  async create(obj: unknown): Promise<{ name: string; description: string; stamps: string[]; }> {
    const parsed = CategoryZodSchema.safeParse(obj);
    if(!parsed.success) {
      throw parsed.error;
    }

    return this._category.create(parsed.data);
  }
  async read(): Promise<{ name: string; description: string; stamps: string[]; }[] | null> {
    const list = await this._category.read();
    
    return list;
  }
  async readOne(_id: string): Promise<{ name: string; description: string; stamps: string[]; }> {
    const company = await this._category.readOne(_id);

    if (!company) throw new Error(ErrorTypes.EntityNotFound);

    return company;
  }
  async update(_id: string, obj: Partial<{ name: string; description: string; stamps: string[]; }>): Promise<{ name: string; description: string; stamps: string[]; } | null> {
    const updated = await this._category.update(_id, obj);
    if (!updated) throw new Error(ErrorTypes.EntityNotFound);

    return updated;
  }
  async delete(_id: string): Promise<{ name: string; description: string; stamps: string[]; } | null> {
    const deleted = await this._category.delete(_id);
    if (!deleted) throw new Error(ErrorTypes.EntityNotFound);

    return deleted;
  }
}