import VueStore from './store'
import VueRouter from './router'
import Va from './va'

import "./element-ui"
import "./app-config"
import "./http"

Va.start();

export const store = VueStore;
export const router = VueRouter;
