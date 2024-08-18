import { Router } from "express";
import {
  createSizesController,
  getAllSizesController,
} from "../controllers/sizesController";

const sizesRouter = Router();

sizesRouter.post("/sizes", createSizesController);
sizesRouter.get("/sizes", getAllSizesController);

export default sizesRouter;
