import Stamp from "../../../models/StampModel";
import StampService from "../../../service/StampService";

import { expect } from "chai";
import * as sinon from 'sinon';
import { ErrorTypes } from "../../../errors/catalog";
import { stampMock, stampMockWithId, updateStamp, updatedStampMock } from "../../mocks/stampMocks";

describe('Stamp Service Suite Tests', () => {
  const stampModel = new Stamp();
  const stampService = new StampService(stampModel);

  before(() => {
    sinon.stub(stampModel, 'create').resolves(stampMockWithId);

    sinon.stub(stampModel, 'read')
    .onCall(0).resolves([stampMockWithId])
    .onCall(1).resolves(null);

    sinon.stub(stampModel, 'readOne')
    .onCall(0).resolves(stampMockWithId)
    .onCall(1).resolves(null);

    sinon.stub(stampModel, 'update')
    .onCall(0).resolves(updatedStampMock)
    .onCall(1).resolves(null);

    sinon.stub(stampModel, 'delete')
    .onCall(0).resolves(stampMockWithId)
    .onCall(1).resolves(null);
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

  describe('Read All Stamps', () => {
    it('On Success', async () => {
      const list = await stampService.read();
      expect(list).to.be.deep.equal([stampMockWithId]);
    })
    it('On Failure', async () => {
      const list = await stampService.read();
      expect(list).to.be.deep.equal(null);
    })
  })

  describe('ReadOne Stamp', () => {
    it('On Success', async () => {
      const oneStamp = await stampService.readOne(stampMockWithId._id);
      expect(oneStamp).to.be.deep.equal(stampMockWithId);
    })
    it('On Failure', async () => {
      let error;
      try {
        await stampService.readOne(stampMockWithId._id);
      } catch (err: any) {
        error = err;
      }
      expect(error, 'Error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    })
  })

  describe('Update Stamp', () => {
    it('On Success', async () => {
      const updated = await stampService.update(stampMockWithId._id, updateStamp);
      expect(updated).to.be.deep.equal(updatedStampMock);
    })
    it('On Failure', async () => {
      let error;
      try {
        await stampService.update(stampMockWithId._id, updateStamp);
      } catch (err: any) {
        error = err;
      }
      expect(error, 'Error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    })
  })

  describe('Delete Stamp', () => {
    it('On Success', async () => {
      const deleted = await stampService.delete(stampMockWithId._id);
      expect(deleted).to.be.deep.equal(stampMockWithId);
    })
    it('On Failure', async () => {
      let error;
      try {
        await stampService.delete(stampMockWithId._id);
      } catch (err: any) {
        error = err;
      }
      expect(error, 'Error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    })
  })
})