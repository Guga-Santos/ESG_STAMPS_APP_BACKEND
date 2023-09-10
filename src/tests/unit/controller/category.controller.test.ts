import CategoryController from "../../../controllers/CategoryController";
import Category from "../../../models/CategoryModel";
import CategoryService from "../../../service/CategoryService";

import { expect } from 'chai';
import { Request, Response } from "express";
import * as sinon from 'sinon';
import { categoryMock, categoryMockWithId } from "../../mocks/categoryMocks";

describe('Category Controller Suite Tests', () => {
  const category = new Category();
  const categoryService = new CategoryService(category);
  const categoryController = new CategoryController(categoryService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(categoryService, 'create').resolves(categoryMockWithId);
    sinon.stub(categoryService, 'read').resolves([categoryMockWithId]);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    res.end = sinon.stub().returns(res);
  })

  after(() => {
    sinon.restore();
  })

  describe('Create a new Category', () => {
    it('On Success', async () => {
      req.body = categoryMock;
      await categoryController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(categoryMockWithId)).to.be.true;
    })
  })

  describe('Real All Categories', () => {
    it('On Success', async () => {
      await categoryController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([categoryMockWithId])).to.be.true;


    })
  })

  describe('ReadOne Category', () => {
    it('On Success', async () => {})
  })

  describe('Update Category', () => {
    it('On Success', async () => {})
  })

  describe('Delete Category', () => {
    it('On Success', async () => {})
  })
})