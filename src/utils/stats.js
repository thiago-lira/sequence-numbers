import localStorageFactory from "./localstorage"

const ls = localStorageFactory('stats')

export default {
  save(value) {
    const key = new Date().toLocaleDateString('pt-BR')
    const results = ls.get()

    if (!results[key]) {
      results[key] = [value]
    } else {
      results[key].push(value)
    }

    ls.set(results)
  }
}
