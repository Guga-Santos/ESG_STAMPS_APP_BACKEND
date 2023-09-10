import CompanyController from "../../../controllers/CompanyController";
import Company from "../../../models/CompanyModel";
import CompanyService from "../../../service/CompanyService";

import { Request, Response } from "express";
import * as sinon from 'sinon';

describe('Company Controller Suite Tests', () => {
  const company = new Company();
  const companyService = new CompanyService(company);
  const companyController = new CompanyController(companyService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    res.end = sinon.stub().returns(res);
  })

  after(() => {
    sinon.restore()
  })

  describe('Create a new Company', () => {
    it('On Success', async () => {})
  })

  describe('Read All Companies', () => {
    it('On Success', async () => {})
  })

  describe('ReadOne Company', () => {
    it('On Success', async () => {})
  })

  describe('Update Company', () => {
    it('On Success', async () => {})
  })

  describe('Delete Company', () => {
    it('On Success', async () => {})
  })
})