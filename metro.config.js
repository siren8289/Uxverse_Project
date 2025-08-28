// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  // ✅ svg transformer 적용
  config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");

  // ✅ svg 확장자 제거 후 sourceExts에 추가
  config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== "svg");
  config.resolver.sourceExts.push("svg");

  return config;
})();
