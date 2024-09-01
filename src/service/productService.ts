import Product from "../models/product";
import ProductSize from "../models/productSize";
import ProductCombination from "../models/productCombination";
import {
  CreateProductData,
  ProductCreationAttributes,
  UpdateProductData,
} from "../types/productType";
import Size from "../models/size";
import Combination from "../models/combination";
import { Op } from "sequelize";
import Category from "../models/category";

export async function createProduct(data: CreateProductData) {
  const { sizes, combinations, ...productData } = data;

  const product = await Product.create(
    productData as ProductCreationAttributes
  );

  if (sizes && sizes.length > 0) {
    for (const sizeId of sizes) {
      await ProductSize.create({
        product_id: product.getDataValue("product_id"),
        size_id: sizeId,
      });
    }
  }

  if (combinations && combinations.length > 0) {
    for (const combinationId of combinations) {
      await ProductCombination.create({
        product_id: product.getDataValue("product_id"),
        combination_id: combinationId,
      });
    }
  }

  return product;
}

export async function getAllProducts(search?: string) {
  // Construir la cláusula WHERE para la búsqueda parcial por nombre de producto y categoría
  const whereClause = search
    ? {
        [Op.or]: [
          { name: { [Op.iLike]: `%${search}%` } }, // Búsqueda parcial insensible a mayúsculas para nombre de producto
          { "$Category.name$": { [Op.iLike]: `%${search}%` } }, // Búsqueda parcial insensible a mayúsculas para nombre de categoría
        ],
      }
    : {};

  // Realizar la consulta a la base de datos con o sin filtro
  return await Product.findAll({
    where: whereClause, // Aplicar la cláusula WHERE si hay un término de búsqueda
    include: [
      {
        model: Size,
        through: { attributes: [] },
        attributes: ["size_id", "name", "additional_price"],
      },
      {
        model: Combination,
        through: { attributes: [] },
        attributes: ["combination_id", "name", "additional_price"],
      },
      {
        model: Category,
        attributes: ["category_id", "name"],
      },
    ],
  });
}

export async function getProductById(product_id: string) {
  return await Product.findByPk(product_id, {
    include: [
      { model: Size, through: { attributes: [] } },
      { model: Combination, through: { attributes: [] } },
    ],
  });
}

export async function updateProduct(
  product_id: string,
  data: Partial<UpdateProductData>
) {
  const { sizes, combinations, ...productData } = data;

  // Actualizar los atributos del producto
  const [updated] = await Product.update(
    productData as Partial<ProductCreationAttributes>,
    {
      where: { product_id },
    }
  );

  if (!updated) {
    return null;
  }

  // Actualizar los tamaños asociados
  if (sizes && sizes.length > 0) {
    await ProductSize.destroy({ where: { product_id } }); // Elimina los tamaños existentes
    for (const sizeId of sizes) {
      await ProductSize.create({ product_id, size_id: sizeId }); // Crea nuevas asociaciones de tamaños
    }
  }

  // Actualizar las combinaciones asociadas
  if (combinations && combinations.length > 0) {
    await ProductCombination.destroy({ where: { product_id } });
    for (const combinationId of combinations) {
      await ProductCombination.create({
        product_id,
        combination_id: combinationId,
      });
    }
  }

  // Retornar el producto actualizado
  return await Product.findByPk(product_id, {
    include: [
      { model: Size, through: { attributes: [] } },
      { model: Combination, through: { attributes: [] } },
    ],
  });
}

export async function deleteProduct(product_id: string) {
  return await Product.destroy({ where: { product_id: product_id } });
}
