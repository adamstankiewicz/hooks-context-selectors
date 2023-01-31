// eslint-disable-next-line import/no-extraneous-dependencies
const { createConfig } = require('@edx/frontend-build');

const config = createConfig('eslint');

config.rules = {
  ...config.rules,
  'no-param-reassign': ['error', { props: false }],
};

module.exports = config;
