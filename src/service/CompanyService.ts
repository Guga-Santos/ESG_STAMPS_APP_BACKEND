import { ICompany } from '../interfaces/ICompany';
import { IModel } from '../interfaces/IModel';
import IService from '../interfaces/IService';

class CompanyService implements IService<ICompany> {
  private _company:IModel<ICompany>;

  constructor(model: IModel<ICompany>) {
    this._company = model;
  }
  create(obj: unknown): Promise<{ name: string; description: string; url: string; email: string; sector: string; stamps: string[]; logo: string; }> {
    throw new Error('Method not implemented.');
  }
  read(): Promise<{ name: string; description: string; url: string; email: string; sector: string; stamps: string[]; logo: string; }[] | null> {
    throw new Error('Method not implemented.');
  }
  readOne(_id: string): Promise<{ name: string; description: string; url: string; email: string; sector: string; stamps: string[]; logo: string; }> {
    throw new Error('Method not implemented.');
  }
  update(_id: string, obj: Partial<{ name: string; description: string; url: string; email: string; sector: string; stamps: string[]; logo: string; }>): Promise<{ name: string; description: string; url: string; email: string; sector: string; stamps: string[]; logo: string; } | null> {
    throw new Error('Method not implemented.');
  }
  delete(_id: string): Promise<{ name: string; description: string; url: string; email: string; sector: string; stamps: string[]; logo: string; } | null> {
    throw new Error('Method not implemented.');
  }
}

export default CompanyService;