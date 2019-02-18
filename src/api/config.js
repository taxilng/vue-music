export const commonParams = {
  g_tk: 1928093487,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}

export const options = {
  param: 'jsonpCallback'
}

export const ERR_OK = 0

const guid = (() => {
  const t = new Date().getUTCMilliseconds()
  const guid = (Math.round(2147483647 * Math.random()) * t) % 1e10
  return guid
})()

export function getGuid() {
  return guid
}
