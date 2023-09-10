import StampController from "../../../controllers/StampController";
import Stamp from "../../../models/StampModel";
import StampService from "../../../service/StampService";

import { Request, Response } from "express";
import * as sinon from 'sinon';

describe('Stamp Controller Suite Tests', () => {
  const stamp = new Stamp();
  const stampService = new StampService(stamp);
  const stampController = new StampController(stampService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    res.end = sinon.stub().returns(res);
  })

  after(() => {
    sinon.restore();
  })

  describe('Create a new Stamp', () => {
    it('On Success', () => {});
  })

  describe('Read All Stamps', () => {
    it('On Success', () => {});
  })

  describe('ReadOne Stamp', () => {
    it('On Success', () => {});
  })

  describe('Update Stamp', () => {
    it('On Success', () => {});
  })

  describe('Delete Stamp', () => {
    it('On Success', () => {});
  })
})