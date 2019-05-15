import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/private/api/blog/message',
    method: 'get',
    params
  })
};

export function deleteById(id) {
  return request({
    url: '/private/api/blog/message/'+id,
    method: 'delete',
  })
};


