export interface CombinationAttributes {
  combination_id: string;
  name: string;
  additional_price: number;
  product_id: string;
}

export interface CreateCombinationData {
  name: string;
  additional_price: number;
  product_id: string;
}
