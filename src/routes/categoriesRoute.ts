import { Router } from "express";
import { validateCategory } from "../middlewares/categoryMiddleware";
import {
  createCategoryController,
  getAllCategoryController,
  getProductsByCategoryController
} from "../controllers/categoriesController";

const categoryRouter = Router();

categoryRouter.post("/categories", validateCategory, createCategoryController);
categoryRouter.get("/categories", getAllCategoryController);
categoryRouter.get("/categories/:id/products", getProductsByCategoryController);

export default categoryRouter;
