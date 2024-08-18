import { conn } from './src/database/connection';
import User from './src/models/user';
import Product from './src/models/product';
import Category from './src/models/category';
import Size from './src/models/size';
import ProductSize from './src/models/productSize';
import app from './src/app';

// User.hasMany(Product, { foreignKey: 'user_id' });
// Product.belongsTo(User, { foreignKey: 'user_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });
Category.hasMany(Product, { foreignKey: 'category_id' });

Product.belongsToMany(Size, { through: ProductSize, foreignKey: 'product_id' });
Size.belongsToMany(Product, { through: ProductSize, foreignKey: 'size_id' });


(async () => {
  try {
    await conn.sync({ force: true });
    console.log('Database synchronized');

    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database or start the server:', error);
  }
})();
