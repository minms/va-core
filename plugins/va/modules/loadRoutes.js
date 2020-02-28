import {getModules} from "./loadModules";
import {DefaultLayout} from "../../../layout";

const modules = getModules()

export function getRoutes() {
  let routers = [];
  modules.map((module) => {
    if (!module['routers']) return;
    let moduleRouters = module['routers'];
    if (typeof moduleRouters === Object) {
      moduleRouters = [moduleRouters];
    } else if (typeof moduleRouters === "function") {
      moduleRouters = moduleRouters();
    }
    routers = routers.concat(moduleRouters);
  });
  if (routers.length > 0) {
    routers = [
      {
        path: '',
        component: DefaultLayout,
        children: routers
      }
    ];
  }

  return routers;
}