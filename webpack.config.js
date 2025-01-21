const webpack = import('webpack');
const dotenv = import('dotenv');

dotenv.config();

module.exports = {
  //...other configurations
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })
  ]
};
