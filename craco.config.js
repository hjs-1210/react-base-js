const path = require("path");

module.exports = {
  plugins: [
    {
      plugin: require("craco-alias"),
      options: {
        source: "jsconfig",
        baseUrl: "./",
        tsConfigPath: path.resolve(__dirname, "./jsconfig.json"),
      },
    },
  ],
};
