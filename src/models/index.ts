import Category from './category';
import Product from './product';
import Size from './size';
import Combination from './combination';
import ProductSize from './productSize';
import ProductCombination from './productCombination';

export function setupAssociations() {
  Category.hasMany(Product, { foreignKey: 'category_id' });
  Product.belongsTo(Category, { foreignKey: 'category_id' });

  Product.belongsToMany(Size, { through: ProductSize, foreignKey: 'product_id' });
  Size.belongsToMany(Product, { through: ProductSize, foreignKey: 'size_id' });

  Product.belongsToMany(Combination, { through: ProductCombination, foreignKey: 'product_id' });
  Combination.belongsToMany(Product, { through: ProductCombination, foreignKey: 'combination_id' });
}
