import Product from '../models/product';
import ProductSize from '../models/productSize';
import ProductCombination from '../models/productCombination';
import { CreateProductData, ProductCreationAttributes } from '../types/productType';
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
        through: { attributes: [] },  // Excluir atributos de la tabla intermedia ProductSize
        attributes: ['size_id', 'name', 'additional_price']
      },
      {
        model: Combination,
        through: { attributes: [] },  // Excluir atributos de la tabla intermedia ProductCombination
        attributes: ['combination_id', 'name', 'additional_price']
      }
    ]
  });
}

export async function getProductById(productId: string) {
  return await Product.findByPk(productId);
}

export async function updateProduct(productId: string, data: Partial<CreateProductData>) {
  const { sizes, combinations, ...productData } = data;

  const [updated] = await Product.update(productData as Partial<ProductCreationAttributes>, {
    where: { product_id: productId },
  });

  // Aquí podrías actualizar `sizes` y `combinations` si fuera necesario

  return updated ? await Product.findByPk(productId) : null;
}

export async function deleteProduct(productId: string) {
  return await Product.destroy({ where: { product_id: productId } });
}
