
const { getDefaultConfig, mergeConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  let config1 = {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    },
  };

  let config2 = {
    transformer: {
      babelTransformerPath: require.resolve("react-native-sass-transformer"), // react-native-obfuscating-transformer
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    resolver: {
      sourceExts: [...sourceExts, "scss", "sass"],
    },
  };

  return mergeConfig(config1, config2);
})();
