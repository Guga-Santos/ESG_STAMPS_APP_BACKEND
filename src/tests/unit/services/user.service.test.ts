import User from "../../../models/UserModel";
import UserService from "../../../service/UserService";

import { expect } from 'chai';
import * as sinon from 'sinon';
import { ErrorTypes } from "../../../errors/catalog";
import {
  // updateUserMock,
  updatedUserMock,
  userMock,
  userMockWithId
} from '../../mocks/userMocks';

describe('Users Service Suite Tests', () => {
  const userModel = new User();
  const userService = new UserService(userModel);

  before(() => {
    sinon.stub(userModel, 'create').resolves(userMockWithId);

    sinon.stub(userModel, 'read')
    .onCall(0).resolves([userMockWithId])
    .onCall(1).resolves(null);

    sinon.stub(userModel, 'readOne')
    .onCall(0).resolves(userMockWithId)
    .onCall(1).resolves(null);

    sinon.stub(userModel, 'update')
    .onCall(0).resolves(updatedUserMock)
    .onCall(1).resolves(null);

    sinon.stub(userModel, 'delete')
    .onCall(0).resolves(userMockWithId)
    .onCall(1).resolves(null);
  })

  after(() => {
    sinon.restore();
  })

  describe('Create User', () => {
    it('On Success', async () => {
      const newUser = await userService.create(userMock);
      expect(newUser).to.be.deep.equal(userMockWithId);
    })

    it('On Failure', async () => {
      let error;
      try {
        await userService.create({});
      } catch (err: any) {
        error = err;
      }
      expect(error, 'error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.FieldsMissing);
    })
  })
})