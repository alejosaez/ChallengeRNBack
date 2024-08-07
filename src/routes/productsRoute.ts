import { Router } from 'express';
import * as productController from '../controllers/productsController';
import { validateCreateProduct, validateUpdateProduct } from '../middlewares/productsMiddleware';


const productRouter = Router();

productRouter.post('/products', validateCreateProduct, productController.createProduct);
productRouter.get('/products', productController.getAllProducts);
productRouter.get('/products/:id', productController.getProductById);
productRouter.put('/products/:id', validateUpdateProduct, productController.updateProduct);
productRouter.delete('/products/:id', productController.deleteProduct);

export default productRouter;
