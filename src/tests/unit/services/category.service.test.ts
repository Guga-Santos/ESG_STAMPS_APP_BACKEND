import Category from "../../../models/CategoryModel";
import CategoryService from "../../../service/CategoryService";

import * as sinon from 'sinon';

describe('Category Service Suite Tests', () => {
  const categoryModel = new Category();
  const categoryService = new CategoryService(categoryModel);

  before(() => {

  })

  after(() => {
    sinon.restore();
  })

  describe('Create Category', () => {
    it('On Success', async () => {

    })
    it('On Failure', async () => {

    })
  })
  describe('Read All Category', () => {
    it('On Success', async () => {

    })
    it('On Failure', async () => {

    })
  })
  describe('ReadOne Category', () => {
    it('On Success', async () => {

    })
    it('On Failure', async () => {

    })
  })
  describe('Update Category', () => {
    it('On Success', async () => {

    })
    it('On Failure', async () => {

    })
  })
  describe('Delete Category', () => {
    it('On Success', async () => {

    })
    it('On Failure', async () => {

    })
  })

})