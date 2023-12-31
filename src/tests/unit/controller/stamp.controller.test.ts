import StampController from "../../../controllers/StampController";
import Stamp from "../../../models/StampModel";
import StampService from "../../../service/StampService";

import { expect } from "chai";
import { Request, Response } from "express";
import * as sinon from 'sinon';
import { stampMock, stampMockWithId, updateStamp, updatedStampMock } from "../../mocks/stampMocks";

describe('Stamp Controller Suite Tests', () => {
  const stamp = new Stamp();
  const stampService = new StampService(stamp);
  const stampController = new StampController(stampService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(stampService, 'create').resolves(stampMockWithId);
    sinon.stub(stampService, 'read').resolves([stampMockWithId]);
    sinon.stub(stampService, 'readOne').resolves(stampMockWithId);
    sinon.stub(stampService, 'update').resolves(updatedStampMock);
    sinon.stub(stampService, 'delete').resolves();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    res.end = sinon.stub().returns(res);
  })

  after(() => {
    sinon.restore();
  })

  describe('Create a new Stamp', () => {
    it('On Success', async () => {
      req.body = stampMock;
      await stampController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(stampMockWithId)).to.be.true;
    });
  })

  describe('Read All Stamps', () => {
    it('On Success', async () => {
      await stampController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([stampMockWithId])).to.be.true;
    });
  })

  describe('ReadOne Stamp', () => {
    it('On Success', async () => {
      req.params = { id: stampMockWithId._id };
      await stampController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(stampMockWithId)).to.be.true;
    });
  })

  describe('Update Stamp', () => {
    it('On Success', async () => {
      req.params = { id: stampMockWithId._id };
      req.body = updateStamp;
      await stampController.update(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(updatedStampMock)).to.be.true;
    });
  })

  describe('Delete Stamp', () => {
    it('On Success', async () => {
      req.params = { id: stampMockWithId._id };
      await stampController.delete(req, res);

      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
    });
  })
})