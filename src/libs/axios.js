import axios from 'axios'
import cookie from 'js-cookie'

import talkUrl from '../axios_url_config'

let urlObj = talkUrl(process.env);

let axiosInstance = axios.create({
  baseURL: urlObj.ruby_axiosUrl,
  withCredentials: true,
  params: {},
  data: {}
});

// 在发送请求之前做些什么
axiosInstance.interceptors.request.use(function (config) {
  if (config.method == 'post' || config.method == 'POST') {
    config.data.token = cookie.get('token') || sessionStorage.getItem('token') || '';
  } else {
    config.params.token = cookie.get('token') || sessionStorage.getItem('token') || '';
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 请求完成之后做些什么
axiosInstance.interceptors.response.use(response => {
  return response.data
}, error => {
  return {
    'code': 500,
    'msg': error.toString()
  }
})


export async function axiosPost(url,params){
  return  await axiosInstance.post(url,params)
}

export async function axiosGet(url,params){
  return  await axiosInstance.get(url,{
    params
  })
}


