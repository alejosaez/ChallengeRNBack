module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }], // Configura Babel para que transpile código moderno compatible con la versión actual de Node.js.
      '@babel/preset-typescript', // Añade soporte para TypeScript.
    ],
  };
  