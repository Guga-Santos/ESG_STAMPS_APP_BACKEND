import { ErrorTypes } from "../../../errors/catalog";
import Company from "../../../models/CompanyModel";
import CompanyService from "../../../service/CompanyService";
import { companyMock, companyMockWithId, updateCompanyMock, updatedCompanyMock } from "../../mocks/companyMocks";

import { expect } from 'chai';
import * as sinon from 'sinon';

describe('Company Service Suite Tests', () => {
  const companyModel = new Company();
  const companyService = new CompanyService(companyModel);

  before(() => {
    sinon.stub(companyModel, 'create').resolves(companyMockWithId);

    sinon.stub(companyModel, 'read')
    .onCall(0).resolves([companyMockWithId])
    .onCall(1).resolves(null);

    sinon.stub(companyModel, 'readOne')
    .onCall(0).resolves(companyMockWithId)
    .onCall(1).resolves(null);

    sinon.stub(companyModel, 'update')
    .onCall(0).resolves(updatedCompanyMock)
    .onCall(1).resolves(null);

    sinon.stub(companyModel, 'delete')
    .onCall(0).resolves(companyMockWithId)
    .onCall(1).resolves(null);
  })
  
  after(() => {
    sinon.restore();
  })

  describe('Create Company', () => {
    it('On Success', async () => {
      const newCompany = await companyService.create(companyMock);
      expect(newCompany).to.be.deep.equal(companyMockWithId);
    })

    it('On Failure', async () => {
      let error;
      try {
        await companyService.create({});
      } catch(err: any) {
        error = err;
      }

      expect(error, 'error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.FieldsMissing);
    })
  })

  describe('Read All Company', () => {
    it('On Success', async () => {
      const list = await companyService.read();
      expect(list).to.be.deep.equal([companyMockWithId]);
    })

    it('On Failure', async () => {
      const list = await companyService.read();
      expect(list).to.be.deep.equal(null);
    })
  })

  describe('ReadOne Company', () => {
    it('On Success', async () => {
      const oneCompany = await companyService.readOne(companyMockWithId._id);
      expect(oneCompany).to.be.deep.equal(companyMockWithId);
    })

    it('On Failure', async () => {
      let error;
      try {
        await companyService.readOne(companyMockWithId._id);
      } catch(err: any) {
        error = err;
      }
      expect(error, 'error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    })
  })

  describe('Update Company', () => {
    it('On Success', async () => {
      const updated = await companyService.update(companyMockWithId._id, updateCompanyMock);
      expect(updated).to.be.deep.equal(updatedCompanyMock);
    })

    it('On Failure', async () => {
      let error;
      try {
        await companyService.update(companyMockWithId._id, updateCompanyMock);
      } catch(err: any) {
        error = err;
      }
      expect(error, 'error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    })
  })

  describe('Delete Company', () => {
    it('On Success', async () => {
      const deleted = await companyService.delete(companyMockWithId._id);
      expect(deleted).to.be.deep.equal(companyMockWithId);
    })

    it('On Failure', async () => {
      let error;
      try {
        await companyService.delete(companyMockWithId._id);
      } catch (err: any) {
        error = err;
      }
      expect(error, 'error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    })
  })
})