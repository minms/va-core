/**
 * 动态加载模块
 * @type {never}
 */
let _modules = [];
const loadModules = require.context('@/modules', true, /\/(.*)\/index\.js$/)
loadModules.keys().reduce((module, modulePath) => {
  const value = loadModules(modulePath);
  const moduleName = modulePath.replace(/^\.\/(.*)\/index\.js$/, '$1');
  _modules.push(
    Object.assign(
      {
        name: moduleName
      },
      value.default
    )
  );
}, {});

const modules = _modules.sort((a, b) => {
  let t1 = 100, t2 = 100;
  if (a.weight !== undefined) t1 = a.weight;
  if (b.weight !== undefined) t2 = b.weight;
  if (t1 > t2) return 1;
  else if (t1 < t2) return -1;
  else return 0;
});

export function getModules() {
  return modules
}