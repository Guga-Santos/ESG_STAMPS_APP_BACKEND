import Stamp from "../../../models/StampModel";
import StampService from "../../../service/StampService";

import * as sinon from 'sinon';

describe('Stamp Service Suite Tests', () => {
  const stampModel = new Stamp();
  const stampService = new StampService(stampModel);

  before(() => {

  });

  after(() => {
    sinon.restore();
  });

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

  describe('', () => {
    it('On Success', async () => {})
    it('On Failure', async () => {})
  })
})