import select from './select'
export default (...msgs) => (thing) => {
  console.log(...msgs, thing)
  return thing
}

export const tapRejection = (...msgs) => (thing) => {
  console.error(...msgs, thing)
  return Promise.reject(thing)
}

export const tapSelect = (path) => (thing) => {
  console.log(`${path}: `, select(path)(thing))
  return thing
}
