import { expect } from 'chai';
import * as sinon from 'sinon';
import User from "../../../models/UserModel";
import { userMockWithId } from "../../mocks/userMocks";

describe('User Model Suite Tests', () => {
  const user = new User();

  before(() => {
    sinon.stub(user._model, 'findOne')
    .onCall(0).resolves(userMockWithId)
    .onCall(1).resolves(null)
  })

  describe('FindOne', () => {
    it('On success', async () => {
      const findUser = await user.findOne(userMockWithId.email);

      expect(findUser).to.be.deep.equal(userMockWithId);
    })

    it('On failure', async () => {
      const findUser = await user.findOne(userMockWithId.email);

      expect(findUser).to.be.deep.equal(null);
    })
  })

});