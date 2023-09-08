import { Router } from 'express';
import CompanyController from '../controllers/CompanyController';
import Company from '../models/CompanyModel';
import CompanyService from '../service/CompanyService';

const route = Router();

const company = new Company();
const companyService = new CompanyService(company);
const companyController = new CompanyController(companyService);

route
  .get('/companies', (req, res) => companyController.read(req, res))
  .post('/company', (req, res) => companyController.create(req, res));


export default route;