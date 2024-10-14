import { Request, Response, NextFunction } from 'express';
import * as productService from '../service/productService';
import { productSchema, updateProductSchema } from '../schemas/productSchema';
import { CreateProductData } from '../types/productType';

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validation = productSchema.parse(req.body);

    const productData: CreateProductData = {
      ...validation,
      sizes: validation.sizes || [],
      combinations: validation.combinations || []
    };

    const product = await productService.createProduct(productData);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { search } = req.query as { search?: string };

   
    console.log("search: ", search)
    const products = await productService.getAllProductsService(search);
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validation = updateProductSchema.parse(req.body);
    const updatedProduct = await productService.updateProduct(req.params.id, validation);
    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deleted = await productService.deleteProduct(req.params.id);
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    next(error);
  }
};
