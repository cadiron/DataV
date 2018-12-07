const { parse, stringify } = JSON

export function deepClone (object) {
  return parse(stringify(object))
}

export function deleteArrayAllItems (arrays) {
  arrays.forEach(element => element.splice(0, element.length))
}

export function debounce (delay, callback) {
  let lastTime

  return function () {
    clearTimeout(lastTime)

    const [that, args] = [this, arguments]

    lastTime = setTimeout(() => {
      callback.apply(that, args)
    }, delay)
  }
}

export function multipleSum (...num) {
  let sum = 0

  num.forEach(n => (sum += n))

  return sum
}

export default function (Vue) {
  Vue.prototype.deepClone = deepClone
  Vue.prototype.deleteArrayAllItems = deleteArrayAllItems
  Vue.prototype.debounce = debounce
  Vue.prototype.multipleSum = multipleSum
}
