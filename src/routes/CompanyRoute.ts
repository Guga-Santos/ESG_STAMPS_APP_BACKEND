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
  .get('/company/:id', (req, res) => companyController.readOne(req, res))
  .post('/company', (req, res) => companyController.create(req, res))
  .put('/company/:id', (req, res) => companyController.update(req, res))
  .delete('/company/:id', (req, res) => companyController.delete(req, res));


export default route;