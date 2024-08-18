import { conn } from './src/database/connection';
import app from './src/app';
import { setupAssociations } from './src/models';

// User.hasMany(Product, { foreignKey: 'user_id' });
// Product.belongsTo(User, { foreignKey: 'user_id' });

setupAssociations();

(async () => {
  try {
    await conn.sync({ force: false });
    console.log('Database synchronized');

    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database or start the server:', error);
  }
})();
