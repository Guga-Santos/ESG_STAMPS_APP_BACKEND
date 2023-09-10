import Category from "../../../models/CategoryModel";
import CategoryService from "../../../service/CategoryService";

import { expect } from "chai";
import * as sinon from 'sinon';
import { ErrorTypes } from "../../../errors/catalog";
import { categoryMock, categoryMockWithId, updateCategory, updatedCategoryMock } from "../../mocks/categoryMocks";

describe('Category Service Suite Tests', () => {
  const categoryModel = new Category();
  const categoryService = new CategoryService(categoryModel);

  before(() => {
    sinon.stub(categoryModel, 'create').resolves(categoryMockWithId);

    sinon.stub(categoryModel, 'read')
    .onCall(0).resolves([categoryMockWithId])
    .onCall(1).resolves(null);

    sinon.stub(categoryModel, 'readOne')
    .onCall(0).resolves(categoryMockWithId)
    .onCall(1).resolves(null);

    sinon.stub(categoryModel, 'update')
    .onCall(0).resolves(updatedCategoryMock)
    .onCall(1).resolves(null);
  })

  after(() => {
    sinon.restore();
  })

  describe('Create Category', () => {
    it('On Success', async () => {
      const newCategory = await categoryService.create(categoryMock);
      expect(newCategory).to.be.deep.equal(categoryMockWithId);
    })
    it('On Failure', async () => {
      let error;
      try {
        await categoryService.create({});
      } catch (err: any) {
        error = err;
      }
      expect(error, 'error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.FieldsMissing);
    })
  })
  describe('Read All Category', () => {
    it('On Success', async () => {
      const list = await categoryService.read();
      expect(list).to.be.deep.equal([categoryMockWithId]);
    })
    it('On Failure', async () => {
      const list = await categoryService.read();
      expect(list).to.be.deep.equal(null);
    })
  })
  describe('ReadOne Category', () => {
    it('On Success', async () => {
      const oneCategory = await categoryService.readOne(categoryMockWithId._id);
      expect(oneCategory).to.be.deep.equal(categoryMockWithId);
    })
    it('On Failure', async () => {
      let error;
      try {
        await categoryService.readOne(categoryMockWithId._id);
      } catch (err: any) {
        error = err;
      }
      expect(error, 'error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    })
  })
  describe('Update Category', () => {
    it('On Success', async () => {
      const updated = await categoryService.update(categoryMockWithId._id, updateCategory);
      expect(updated).to.be.deep.equal(updatedCategoryMock);
    })
    it('On Failure', async () => {
      let error;
      try {
        await categoryService.update(categoryMockWithId._id, updateCategory);
      } catch (err: any) {
        error = err;
      }
      expect(error, 'error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    })
  })
  describe('Delete Category', () => {
    it('On Success', async () => {

    })
    it('On Failure', async () => {

    })
  })

})