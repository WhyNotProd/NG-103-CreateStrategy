/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  alias: {
    "@app": "./src",
    features: "./src/features",
    components: "./src/features/components",
    styles: "./src/styles",
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    // "@snowpack/plugin-babel",
    // [
    //   "@snowpack/plugin-run-script",
    //   {
    //     cmd:
    //       "node-sass ./src/ -o ./src/ --output-style expanded --include-path src/ --include-path node_modules/",
    //     watch: "$1 --watch ",
    //   },
    // ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
