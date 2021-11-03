module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.json', '.ts', '.tsx'],
        alias: {
          '~': './src',
          assets: './src/assets',
          components: './src/components',
          atoms: './src/components/atoms',
          molecules: './src/components/molecules',
          organisms: './src/components/organisms',
          templates: './src/components/templates',
          config: './src/config',
          ducks: './src/ducks',
          screens: './src/screens',
          utils: './src/utils',
        },
      },
    ],
  ],
};
