import { Router } from "express";
import StampController from "../controllers/StampController";
import Stamp from "../models/StampModel";
import StampService from "../service/StampService";

const route = Router();

const stamp = new Stamp();
const stampService = new StampService(stamp);
const stampController = new StampController(stampService);

route
  .get('/stamps', (req, res) => stampController.read(req, res))
  .get('/stamp/:id', (req, res) => stampController.readOne(req, res))
  .post('/stamp', (req, res) => stampController.create(req, res))
  .put('/stamp/:id', (req, res) => stampController.update(req, res))
  .delete('/stamp/:id', (req, res) => stampController.delete(req, res));


export default route;
