import axios from 'axios'
import Vue from 'vue'
import configs from "../app-config";

// create an axios instance
const service = axios.create({
  baseURL: configs.baseApi, // url = base url + request url
  timeout: 60000 // request timeout
})
// service.defaults.withCredentials = true
// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)
Vue.prototype.$http = service;
export default service
