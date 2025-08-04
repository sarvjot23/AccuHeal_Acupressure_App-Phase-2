module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
            '@components': './src/components',
            '@screens': './src/screens',
            '@services': './src/services',
            '@types': './src/types',
            '@utils': './src/utils',
            '@constants': './src/constants',
            '@data': './src/data',
            '@localization': './src/localization',
            '@contexts': './src/contexts',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};