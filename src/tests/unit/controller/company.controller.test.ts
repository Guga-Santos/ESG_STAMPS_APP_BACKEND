import CompanyController from "../../../controllers/CompanyController";
import Company from "../../../models/CompanyModel";
import CompanyService from "../../../service/CompanyService";

import { expect } from "chai";
import { Request, Response } from "express";
import * as sinon from 'sinon';
import { companyMock, companyMockWithId, updateCompanyMock, updatedCompanyMock } from "../../mocks/companyMocks";

describe('Company Controller Suite Tests', () => {
  const company = new Company();
  const companyService = new CompanyService(company);
  const companyController = new CompanyController(companyService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(companyService, 'create').resolves(companyMockWithId);
    sinon.stub(companyService, 'read').resolves([companyMockWithId]);
    sinon.stub(companyService, 'readOne').resolves(companyMockWithId);
    sinon.stub(companyService, 'update').resolves(updatedCompanyMock);
    sinon.stub(companyService, 'delete').resolves();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    res.end = sinon.stub().returns(res);
  })

  after(() => {
    sinon.restore()
  })

  describe('Create a new Company', () => {
    it('On Success', async () => {
      req.body = companyMock;
      await companyController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(companyMockWithId)).to.be.true;
    })
  })

  describe('Read All Companies', () => {
    it('On Success', async () => {
      await companyController.read(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([companyMockWithId])).to.be.true;
    })
  })

  describe('ReadOne Company', () => {
    it('On Success', async () => {
      req.params = { id: companyMockWithId._id };
      await companyController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(companyMockWithId)).to.be.true;
    })
  })

  describe('Update Company', () => {
    it('On Success', async () => {
      req.params = { id: companyMockWithId._id };
      req.body = updateCompanyMock;
      await companyController.update(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(updatedCompanyMock)).to.be.true;
    })
  })

  describe('Delete Company', () => {
    it('On Success', async () => {
      req.params = { id: companyMockWithId._id };
      await companyController.delete(req, res);

      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
    })
  })
})