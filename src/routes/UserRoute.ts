import { Router } from "express";
import UserController from "../controllers/UserController";
import User from "../models/UserModel";
import UserService from "../service/UserService";

const route = Router();

const user = new User();
const userService = new UserService(user);
const userController = new UserController(userService);

route
  .post('/users', (req, res) => userController.create(req, res))
  .get('/users/:id', (req, res) => userController.readOne(req, res))
  .get('/users', (req, res) => userController.read(req, res))
  .put('/users/:id', (req, res) => userController.update(req, res))
  .delete('/users/:id', (req, res) => userController.delete(req, res));

export default route;