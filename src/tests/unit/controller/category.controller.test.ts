import CategoryController from "../../../controllers/CategoryController";
import Category from "../../../models/CategoryModel";
import CategoryService from "../../../service/CategoryService";

import { Request, Response } from "express";
import * as sinon from 'sinon';

describe('Category Controller Suite Tests', () => {
  const category = new Category();
  const categoryService = new CategoryService(category);
  const categoryController = new CategoryController(categoryService);

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

  describe('Create a new Category', () => {
    it('On Success', async () => {})
  })

  describe('Real All Categories', () => {
    it('On Success', async () => {})
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