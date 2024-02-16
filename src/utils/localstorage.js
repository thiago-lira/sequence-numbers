const localStorageFactory = function(key) {
  const get = function() {
    const item = localStorage.getItem(key)

    if (!item) {
      const defaultValue = {}

      set(defaultValue)

      return defaultValue
    }

    return JSON.parse(item)
  }

  const set = function (value) {
    const stringValue = JSON.stringify(value)
    localStorage.setItem(key, stringValue)
  }

  return {
    get,
    set,
  }
}

export default localStorageFactory
