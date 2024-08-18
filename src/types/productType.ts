export interface ProductAttributes {
  product_id: string;
  name: string;
  unit_price: number;
  description: string;
  image_url?: string;
  category_id: string;
}

export interface ProductCreationAttributes extends Omit<ProductAttributes, "product_id"> {}

export interface ProductSizeAttributes {
  product_size_id: string;
  product_id: string;
  size_id: string;
}

export interface ProductCombinationAttributes {
  product_combination_id: string;
  product_id: string;
  combination_id: string;
}

export interface CreateProductData {
  name: string;
  unit_price: number;
  description: string;
  image_url?: string;
  category_id: string;
  sizes: string[];
  combinations: string[];
}

export interface UpdateProductData extends Partial<CreateProductData> {}
