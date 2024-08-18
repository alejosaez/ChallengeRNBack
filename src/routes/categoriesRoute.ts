// - `GET /api/categories`: Obtener todas las categorías.
// - `GET /api/categories/:id/products`: Obtener todos los productos de una categoría específica.

import { Router } from 'express';
import { validateCategory } from '../middlewares/categoryMiddleware';
import { createCategoryController } from '../controllers/categoriesController';

const categoryRouter = Router();

categoryRouter.post('/category', validateCategory, createCategoryController);


export default categoryRouter;
