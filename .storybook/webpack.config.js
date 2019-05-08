const path = require('path');
const SRC_PATH = path.join(__dirname, '../packages');
module.exports = async ({
  config
}) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH],
    use: [{
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          configFileName: './.storybook/tsconfig.json'
        }
      },
      {
        loader: require.resolve('react-docgen-typescript-loader')
      }
    ]
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  config.resolve.extensions.push('.ts', '.tsx', '.scss');
  return config;
};