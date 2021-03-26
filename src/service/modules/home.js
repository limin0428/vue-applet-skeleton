import * as http from '../index.js'
console.log(http)
export const getMenu = (params) => {
  return http.get('/processCenter/utils/getProcessTrackingChart', params)
}
