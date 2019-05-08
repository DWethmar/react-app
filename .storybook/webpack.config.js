var path = require('path');

module.exports = async ({
  config
}) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [
      path.resolve(__dirname, '.'),
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../packages'),
    ],
    loader: require.resolve('awesome-typescript-loader'),
    options: {
      configFileName: 'tsconfig.storybook.json'
    }
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};