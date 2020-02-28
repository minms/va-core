import Vue from 'vue'

export const defaultSetting = {
  urlModel: 'hash',
  title: 'Vue Element Admin',
  storagePrefix: 'va-',
  baseApi: '',
};

// https://webpack.js.org/guides/dependency-management/#requirecontext
const appSettingFiles = require.context('@', true, /app\.js$/)
// it will auto require all vuex module from modules file
const appSetting = appSettingFiles.keys().reduce((appSetting, file) => {
  const value = appSettingFiles(file)
  return Object.assign(appSetting, value.default);
}, {})

const configs = Object.assign(defaultSetting, appSetting);
Vue.prototype.$config = configs;

console.log(configs)


export default configs;
