module.exports = {
    module: {
      rules: [
        {
          test: /\.less$/i,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
            },
            {
              loader: "less-loader",
              options: {
                lessOptions: {
                  strictMath: true,
                },
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            'babel-loader', 'vue-svg-loader',
          ],
        },
      ],
    },
  };





// module.exports = {
//   module: {
//       rules: [
//         {
//           test: /\.svg$/,
//           use: [
//             'babel-loader', 'vue-svg-loader',
//           ],
//         },

//           {
//               test: /\.less$/,
//               use: [
//               'nativescript-dev-webpack/style-hot-loader',
//               'nativescript-dev-webpack/apply-css-loader.js',

//               { loader: "css-loader", options: { minimize: false, url: false } },
//               "less-loader",
//             ]
//             }
//       ]
//   }
// };