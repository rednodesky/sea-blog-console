import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/private/api/blog/category',
    method: 'get',
  })
}
