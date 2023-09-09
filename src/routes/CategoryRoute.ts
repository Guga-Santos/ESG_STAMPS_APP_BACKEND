import { Router } from "express";
import CategoryController from "../controllers/CategoryController";
import Category from "../models/CategoryModel";
import CategoryService from "../service/CategoryService";

const route = Router();

const category = new Category();
const categoryService = new CategoryService(category);
const categoryController = new CategoryController(categoryService);

route
  .get('/categories', (req, res) => categoryController.read(req, res))
  .get('/category/:id', (req, res) => categoryController.readOne(req, res))
  .post('/category', (req, res) => categoryController.create(req, res))
  .put('/category/:id', (req, res) => categoryController.update(req, res))
  .delete('/category/:id', (req, res) => categoryController.delete(req, res));


export default route;