const presets = [
    [
      "@babel/env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
        },
        useBuiltIns: "usage"
      },
    ],
  ];

const plugins = [ 
    [
      require('@babel/plugin-proposal-decorators').default,
      {
        legacy: true
      }
    ],
    [
      require('@babel/decorators').default,
      {
        legacy: true
      }
    ],
    [
      require("transform-decorators-legacy").default
    ]
  ];
  
module.exports = { presets, plugins };