import {getModules} from "./loadModules";

const modules = getModules()

export function getStores() {
  let stores = {};
  modules.map((module) => {
    if (!module['store']) return;
    let moduleStore = module['store'];
    if (typeof moduleStore === "function") {
      moduleStore = moduleStore();
    }

    stores[module.name] = Object.assign({
      namespaced: true
    }, moduleStore);
  });
  return stores;
}