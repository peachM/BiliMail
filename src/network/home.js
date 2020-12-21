import {request} from './axios'

export function getMultidata() {
  return request({
    url: '/home/multidata'
  })
}
