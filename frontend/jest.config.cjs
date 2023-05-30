module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      
    },
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
      "axios": "axios/dist/node/axios.cjs"
    },
    transformIgnorePatterns: [
      '/node_modules/(?!axios)/',
      '/node_modules/'
    ],
    collectCoverage: true,
    moduleFileExtensions: ['js', 'jsx', 'json'],
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
    collectCoverageFrom: [
      'src/**/*.{js,jsx}',
      '!src/index.js',
      '!src/registerServiceWorker.js',
    ],
    "verbose": true,
    "maxWorkers": 1
  };
  