import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: 'public/api/blog/login',
    method: 'post',
    params: {
      'loginName': username,
      'password': password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/private/api/blog/user',
    method: 'get',
    // params: { token }
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}
