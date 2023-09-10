import UserController from "../../../controllers/UserController";
import User from "../../../models/UserModel";
import UserService from "../../../service/UserService";

import { Request, Response } from "express";
import * as sinon from 'sinon';

describe('User Controller Suite Tests', () => {
  const userModel = new User();
  const userService = new UserService(userModel);
  const userController = new UserController(userService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {});

  after(() => {
    sinon.restore();
  })

  describe('Create a new User', () => {
    it('On Success', () => {})
  })

  describe('Read all Users', () => {
    it('On Success', () => {})
  })

  describe('ReadOne User', () => {
    it('On Success', () => {})
  })

  describe('Update User', () => {
    it('On Success', () => {})
  })

  describe('Delete User', () => {
    it('On Success', () => {})
  })
})