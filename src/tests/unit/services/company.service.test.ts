import Company from "../../../models/CompanyModel";
import CompanyService from "../../../service/CompanyService";
import { companyMock, companyMockWithId } from "../../mocks/companyMocks";

import { expect } from 'chai';
import * as sinon from 'sinon';

describe('Company Service Suite Tests', () => {
  const companyModel = new Company();
  const companyService = new CompanyService(companyModel);

  before(() => {
    sinon.stub(companyModel, 'create').resolves(companyMockWithId);
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
      
    })
  })

  describe('Read All Company', () => {
    it('On Success', async () => {

    })

    it('On Failure', async () => {
      
    })
  })

  describe('ReadOne Company', () => {
    it('On Success', async () => {

    })

    it('On Failure', async () => {
      
    })
  })

  describe('Update Company', () => {
    it('On Success', async () => {

    })

    it('On Failure', async () => {
      
    })
  })

  describe('Delete Company', () => {
    it('On Success', async () => {

    })

    it('On Failure', async () => {
      
    })
  })
})