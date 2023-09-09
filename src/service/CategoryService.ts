import { CategoryZodSchema, ICategory } from "../interfaces/ICategory";
import { IModel } from "../interfaces/IModel";
import IService from "../interfaces/IService";

class CategoryService implements IService<ICategory> {
  private _category:IModel<ICategory>;

  constructor(model: IModel<ICategory>) {
    this._category = model;
  }
  create(obj: unknown): Promise<{ name: string; description: string; stamps: string[]; }> {
    const parsed = CategoryZodSchema.safeParse(obj);
    if(!parsed.success) {
      throw parsed.error;
    }

    return this._category.create(parsed.data);
  }
  read(): Promise<{ name: string; description: string; stamps: string[]; }[] | null> {
    throw new Error("Method not implemented.");
  }
  readOne(_id: string): Promise<{ name: string; description: string; stamps: string[]; }> {
    throw new Error("Method not implemented.");
  }
  update(_id: string, obj: Partial<{ name: string; description: string; stamps: string[]; }>): Promise<{ name: string; description: string; stamps: string[]; } | null> {
    throw new Error("Method not implemented.");
  }
  delete(_id: string): Promise<{ name: string; description: string; stamps: string[]; } | null> {
    throw new Error("Method not implemented.");
  }
}