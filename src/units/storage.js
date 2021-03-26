const getStorage = (name) => {
  if (name === undefined) {
    return window.localStorage
  } else {
    return window.localStorage.getItem([name])
  }
}
const setStorage = (name, value) => {
  if (name === undefined || name === null || typeof (name) !== 'string') {
    return
  }
  window.localStorage.setItem([name], value)
}
const removeStorage = name => {
  if (name === undefined || name === null || typeof (name) !== 'string') {
    return
  }
  window.localStorage.removeItem([name])
}
const clearStorage = () => {
  window.localStorage.clear()
}
module.exports = {
  getStorage,
  setStorage,
  removeStorage,
  clearStorage
}
