import Stamp from "../../../models/StampModel";
import StampService from "../../../service/StampService";

import { expect } from "chai";
import * as sinon from 'sinon';
import { ErrorTypes } from "../../../errors/catalog";
import { stampMock, stampMockWithId } from "../../mocks/stampMocks";

describe('Stamp Service Suite Tests', () => {
  const stampModel = new Stamp();
  const stampService = new StampService(stampModel);

  before(() => {
    sinon.stub(stampModel, 'create').resolves(stampMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('Create Stamp', () => {
    it('On Success', async () => {
      const newStamp = await stampService.create(stampMock);
      expect(newStamp).to.be.deep.equal(stampMockWithId);
    })
    it('On Failure', async () => {
      let error;
      try {
        await stampService.create({});
      } catch (err: any) {
        error = err;
      }
      expect(error, 'Error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.FieldsMissing);
    })
  })

  describe('', () => {
    it('On Success', async () => {})
    it('On Failure', async () => {})
  })

  describe('', () => {
    it('On Success', async () => {})
    it('On Failure', async () => {})
  })

  describe('', () => {
    it('On Success', async () => {})
    it('On Failure', async () => {})
  })

  describe('', () => {
    it('On Success', async () => {})
    it('On Failure', async () => {})
  })
})