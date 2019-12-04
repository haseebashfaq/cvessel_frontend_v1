import Cookies from 'js-cookie'

export function addCookie(name, value, expires = 30) {
  Cookies.set(name, value, { expires })
}

export function deleteCookie(name) {
  Cookies.remove(name)
}

export function getCookie(name) {
  return Cookies.get(name)
}
