import {getModules} from "./loadModules";
import layouts from "../../../layout";
import configs from "../../app-config";
import store from "../../store";

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
      path: '',
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
  return [{
    label: 'title',
    icon: '',
    path: '1',
    children: [{
      label: 'title2',
      icon: '',
      path: '2',
    }, {
      label: 'title3',
      icon: '',
      path: '3',
    }]
  },{
    label: 'title4',
    icon: '',
    path: '4',
    children: [{
      label: 'title5',
      icon: '',
      path: '5',
    }]
  }];
}

if (!configs.customMenus) {
  store.dispatch('app/updateMenus', generateMenus());
}