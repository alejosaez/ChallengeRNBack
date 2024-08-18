// - `GET /api/categories`: Obtener todas las categorías.
// - `GET /api/categories/:id/products`: Obtener todos los productos de una categoría específica.

import { Router } from "express";
import { validateCategory } from "../middlewares/categoryMiddleware";
import {
  createCategoryController,
  getAllCategoryController,
} from "../controllers/categoriesController";

const categoryRouter = Router();

categoryRouter.post("/categories", validateCategory, createCategoryController);
categoryRouter.get("/categories", getAllCategoryController);

export default categoryRouter;
