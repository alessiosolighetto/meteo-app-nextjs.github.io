const path = require('path')

// next.config.js
module.exports = {
  // ...
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    config.resolve.modules.push(path.resolve('./src'));
    config.resolve.modules.push(path.resolve('./src/styles'));
    return config;
  },
};
