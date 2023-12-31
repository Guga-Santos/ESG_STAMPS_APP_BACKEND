import UserController from "../../../controllers/UserController";
import User from "../../../models/UserModel";
import UserService from "../../../service/UserService";


import { expect } from "chai";
import { Request, Response } from "express";
import * as sinon from 'sinon';
import { updateUserMock, updatedUserMock, userMock, userMockWithId } from "../../mocks/userMocks";

describe('User Controller Suite Tests', () => {
  const userModel = new User();
  const userService = new UserService(userModel);
  const userController = new UserController(userService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(userService, 'create').resolves(userMock);
    sinon.stub(userService, 'read').resolves([userMockWithId]);
    sinon.stub(userService, 'readOne').resolves(userMockWithId);
    sinon.stub(userService, 'update').resolves(updatedUserMock);
    sinon.stub(userService, 'delete').resolves();
    

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    res.end = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  })

  describe('Create a new User', () => {
    it('On Success', async () => {
      req.body = userMock;
      await userController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(userMock)).to.be.true;
    })
  })

  describe('Read all Users', () => {
    it('On Success', async() => {
      await userController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([userMockWithId])).to.be.true;
    })
  })

  describe('ReadOne User', () => {
    it('On success', async () => {
      req.params = { id: userMockWithId._id }
      await userController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(userMockWithId)).to.be.true;
    })
  })

  describe('Update User', () => {
    it('On Success', async () => {
      req.params = { id: userMockWithId._id }
      req.body = updateUserMock;
      await userController.update(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(updatedUserMock)).to.be.true;
    })
  })

  describe('Delete User', () => {
    it('On Success', async () => {
      req.params = { id: userMockWithId._id };
      await userController.delete(req, res);

      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
    })
  })
})
