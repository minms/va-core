import {getModules} from "./loadModules";
import layouts from "../../../layout";
import configs from "../../app-config";
import store from "../../store";
import path from "path"

import {resolvePath} from "../../../utils";

const routers = [];
getModules().map((module) => {
  if (!module['routers']) return;
  let moduleRouters = module['routers'];
  if (typeof moduleRouters === Object) {
    moduleRouters = [moduleRouters];
  } else if (typeof moduleRouters === "function") {
    moduleRouters = moduleRouters();
  }
  moduleRouters.map(item => {
    routers.push(item);
  })
});

/**
 * 获取系统所有路由
 * @returns {{path: string, component: *}[]|Array}
 */
export function getRoutes() {
  if (routers.length > 0) {
    let layout = layouts['default'];
    if (configs.layout !== undefined) {
      if (typeof configs.layout === 'function') {
        layout = configs.layout;
      } else if (typeof configs.layout === "string") {
        layout = layouts[configs.layout];
      }
    }
    return [{
      path: '/',
      component: layout,
      children: routers
    }];
  } else {
    return [];
  }
}

/**
 * 将路由生成菜单
 */
export function generateMenus() {
  return getMenus(routers);
}

function getMenus(_routes, basePath) {
  let __r = [];
  _routes.forEach(item => {
    if (item.hidden) return;

    let __item = {
      label: item.meta.title,
      icon: item.meta.icon,
      path: resolvePath(item.path, basePath),
    };

    if (item.children) {
      let __children = getMenus(item.children, __item.path);
      if (__children && __children.length > 0) {
        __item.children = __children;
      }
    }

    __r.push(__item);
  });

  return __r;
}

/** 处理系统菜单 */
if (configs.customMenu === false) {
  store.dispatch('vaLayout/updateMenus', generateMenus());
} else if (typeof configs.customMenu === 'object') {
  store.dispatch('vaLayout/updateMenus', configs.customMenu);
}