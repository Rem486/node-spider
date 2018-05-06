'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1525615961325_3620';

  // add your config here
  config.middleware = [];

  return config;
};
