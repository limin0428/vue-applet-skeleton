import { instance } from './request.js'
const get = (url, params) => {
  const config = {
    method: 'get',
    url: url
  }
  if (params) {
    config.params = params
  }
  return instance(config)
}
const post = (url, params) => {
  const config = {
    method: 'post',
    url: url
  }
  if (params) {
    config.data = params
  }
  return instance(config)
}
const put = (url, params) => {
  const config = {
    method: 'put',
    url: url
  }
  if (params) {
    config.params = params
  }
  return instance(config)
}
const del = (url, params) => {
  const config = {
    method: 'delete',
    url: url
  }
  if (params) {
    config.params = params
  }
  return instance(config)
}

export default {
  get,
  post,
  put,
  del
}
