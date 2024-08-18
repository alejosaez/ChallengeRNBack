import Product from '../models/product';
import ProductSize from '../models/productSize';
import ProductCombination from '../models/productCombination';
import { CreateProductData, ProductCreationAttributes, UpdateProductData } from '../types/productType';
import Size from '../models/size';
import Combination from '../models/combination';

export async function createProduct(data: CreateProductData) {
  const { sizes, combinations, ...productData } = data;

  const product = await Product.create(productData as ProductCreationAttributes);

  if (sizes && sizes.length > 0) {
    for (const sizeId of sizes) {
      await ProductSize.create({ product_id: product.getDataValue('product_id'), size_id: sizeId });
    }
  }

  if (combinations && combinations.length > 0) {
    for (const combinationId of combinations) {
      await ProductCombination.create({ product_id: product.getDataValue('product_id'), combination_id: combinationId });
    }
  }

  return product;
}


export async function getAllProducts() {
  return await Product.findAll({
    include: [
      {
        model: Size,
        through: { attributes: [] }, 
        attributes: ['size_id', 'name', 'additional_price']
      },
      {
        model: Combination,
        through: { attributes: [] },  
        attributes: ['combination_id', 'name', 'additional_price']
      }
    ]
  });
}

export async function getProductById(product_id: string) {
  return await Product.findByPk(product_id, {
    include: [
      { model: Size, through: { attributes: [] } },
      { model: Combination, through: { attributes: [] } }
    ]
  });
}

export async function updateProduct(product_id: string, data: Partial<UpdateProductData>) {
  const { sizes, combinations, ...productData } = data;

  // Actualizamos los campos básicos del producto
  const [updated] = await Product.update(productData as Partial<ProductCreationAttributes>, {
    where: { product_id },
  });

  if (!updated) {
    return null;
  }

  // Actualizamos las relaciones con tamaños (sizes)
  if (sizes && sizes.length > 0) {
    // Primero eliminamos las relaciones actuales
    await ProductSize.destroy({ where: { product_id } });
    // Luego creamos las nuevas relaciones
    for (const sizeId of sizes) {
      await ProductSize.create({ product_id, size_id: sizeId });
    }
  }

  // Actualizamos las relaciones con combinaciones (combinations)
  if (combinations && combinations.length > 0) {
    // Primero eliminamos las relaciones actuales
    await ProductCombination.destroy({ where: { product_id } });
    // Luego creamos las nuevas relaciones
    for (const combinationId of combinations) {
      await ProductCombination.create({ product_id, combination_id: combinationId });
    }
  }

  // Devolvemos el producto actualizado con las relaciones incluidas
  return await Product.findByPk(product_id, {
    include: [
      { model: Size, through: { attributes: [] } },
      { model: Combination, through: { attributes: [] } }
    ]
  });
}

export async function deleteProduct(product_id: string) {
  return await Product.destroy({ where: { product_id: product_id } });
}
