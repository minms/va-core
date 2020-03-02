import service from './axios'

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    service.get(url, {params}).then(data => {
      resolve(data);
    }).catch(err => {
      reject(err)
    });
  })
}

export function post(url, params = {}) {
  return new Promise((resolve, reject) => {
    service.post(url, params).then(data => {
      resolve(data);
    }).catch(err => {
      reject(err)
    });
  })
}

export default service
