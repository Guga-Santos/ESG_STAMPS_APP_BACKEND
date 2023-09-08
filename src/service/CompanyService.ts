import { ErrorTypes } from '../errors/catalog';
import { CompanyZodSchema, ICompany } from '../interfaces/ICompany';
import { IModel } from '../interfaces/IModel';
import IService from '../interfaces/IService';

class CompanyService implements IService<ICompany> {
  private _company:IModel<ICompany>;

  constructor(model: IModel<ICompany>) {
    this._company = model;
  }

  public async create(obj: unknown): Promise<{ name: string; description: string; url: string; email: string; sector: string; stamps: string[]; logo: string; }> {
    const parsed = CompanyZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._company.create(parsed.data);
  }

  public async read(): Promise<{ name: string; description: string; url: string; email: string; sector: string; stamps: string[]; logo: string; }[] | null> {
    const list = await this._company.read();
    
    return list;
  }

  public async readOne(_id: string): Promise<{ name: string; description: string; url: string; email: string; sector: string; stamps: string[]; logo: string; }> {
    const company = await this._company.readOne(_id);

    if (!company) throw new Error(ErrorTypes.EntityNotFound);

    return company;
  }

  public async update(_id: string, obj: Partial<{ name: string; description: string; url: string; email: string; sector: string; stamps: string[]; logo: string; }>): Promise<{ name: string; description: string; url: string; email: string; sector: string; stamps: string[]; logo: string; } | null> {
    throw new Error('Method not implemented.');
  }

  public async delete(_id: string): Promise<{ name: string; description: string; url: string; email: string; sector: string; stamps: string[]; logo: string; } | null> {
    throw new Error('Method not implemented.');
  }
}

export default CompanyService;