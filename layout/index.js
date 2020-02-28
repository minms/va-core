const layouts = {};
const loadLayouts = require.context('./', true, /\/(.*)\/index\.vue$/)
loadLayouts.keys().reduce((module, modulePath) => {
  const value = loadLayouts(modulePath);
  const name = modulePath.replace(/^\.\/(.*)\/index\.vue$/, '$1');
  layouts[name] = value.default;
}, {});

export default layouts