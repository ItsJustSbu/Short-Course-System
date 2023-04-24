module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.css$': '<rootDir>/node_modules/jest-transform-css',
    },
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
    },
  };
  