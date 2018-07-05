
import axios from 'axios'
import router from '@/router'
//axios请求拦截，这里可以加一些请求头
axios.interceptors.request.use(
  config => {
      
      return config;
  },
  err => {
      return Promise.reject(err);
  });
//axios响应拦截，这里可以针对返回的不同errCode做相应的处理
axios.interceptors.response.use(
  response => {
      return response;
  },
  error => {
      if (error.response) {
          switch (error.response.status) {
              case 404:
                  router.push({
                      path: '/404',
                      query: {errorMsg:'error:请求不成功'}
                  })
          }
      }
      return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  });
export default {
  get (url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
          params: params
        }).then(response => {
          resolve(response.data);
        }).catch(err => {
          reject(err)
        })
    })
  },
  post (url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
          .then(response => {
            resolve(response.data);
          }, err => {
            reject(err)
          })
    })
  }
}


