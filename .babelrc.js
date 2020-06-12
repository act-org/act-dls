/**
 * @prettier
 */

/* eslint-disable immutable/no-mutation, no-template-curly-in-string */

module.exports = api => {
  const isTestEnv = api.env('test');

  const plugins = [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: './src',
      },
    ],
    [
      'babel-plugin-transform-imports',
      {
        '@material-ui/core': {
          preventFullImport: true,
          transform: '@material-ui/core/${member}',
        },
        '@material-ui/icons': {
          preventFullImport: true,
          transform: '@material-ui/icons/${member}',
        },
        lodash: {
          preventFullImport: true,
          transform: 'lodash/${member}',
        },
        'mdi-material-ui': {
          preventFullImport: true,
          transform: 'mdi-material-ui/${member}',
        },
      },
    ],
  ];

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ];

  if (isTestEnv) {
    plugins.push('styled-jsx/babel-test');
  }

  return {
    plugins,
    presets,
  };
};