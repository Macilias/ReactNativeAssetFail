/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const {getDefaultConfig} = require('metro-config');

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    resolver: {
      assetExts: [assetExts, 'txt', 'xml', 'png', 'jpg', 'pb', 'tflite'],
      sourceExts: [...sourceExts, 'txt', 'xml', 'png', 'jpg', 'pb', 'tflite'],
    },
  };
})();
