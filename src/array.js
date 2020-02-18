import { isPlainObject, isFunction, isNumber } from './utils'

export const flat = arr => (Array.isArray(arr) ? arr.flat() : [])

export const flatDepth = (num, arr) => (Array.isArray(arr) ? arr.flat(num) : [])

export const flatDeep = arr => (Array.isArray(arr) ? arr.flat(Infinity) : [])

export const flatMap = (fn, arr) => (Array.isArray(arr) ? arr.flatMap(fn) : [])

export const reverse = arr =>
  Array.isArray(arr) ? arr.map(i => i).reverse() : arr

export const splice = (start, deleteCount, item, arr) => {
  if (!Array.isArray(arr)) return []

  const copy = arr.map(i => i)
  copy.splice(start, deleteCount, item)

  return copy
}

export const slice = (start = 0, end = 0, arr) =>
  Array.isArray(arr) ? arr.slice(start, end) : []

export const includes = (val, arr) =>
  Array.isArray(arr) ? arr.includes(val) : false

export const sort = arr => (Array.isArray(arr) ? arr.map(i => i).sort() : [])

export const sortWith = (fn, arr) =>
  Array.isArray(arr) ? arr.map(i => i).sort(fn) : []

const sortByKeyAsec = key => (a, b) =>
  a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0

export const sortBy = (key, arr) =>
  Array.isArray(arr) ? arr.map(i => i).sort(sortByKeyAsec(key)) : []

const sortByKeyDesc = key => (a, b) =>
  a[key] > b[key] ? -1 : b[key] > a[key] ? 1 : 0

export const sortByDesc = (key, arr) =>
  Array.isArray(arr) ? arr.map(i => i).sort(sortByKeyDesc(key)) : []

export const uniq = arr => (Array.isArray(arr) ? [...new Set(arr)] : [])

export const shuffle = arr =>
  Array.isArray(arr) ? arr.map(i => i).sort(() => Math.random() - 0.5) : []

export const indexOf = (val, arr) =>
  Array.isArray(arr) ? arr.indexOf(val) : -1

export const lastIndexOf = (val, arr) =>
  Array.isArray(arr) ? arr.lastIndexOf(val) : -1

export const max = arr =>
  Array.isArray(arr) && arr.length !== 0 ? Math.max(...arr) : undefined

export const min = arr =>
  Array.isArray(arr) && arr.length !== 0 ? Math.min(...arr) : undefined

export const sample = arr =>
  Array.isArray(arr) && arr.length !== 0
    ? arr[Math.floor(Math.random() * arr.length)]
    : undefined

export const zip = (a, b) => {
  a = castArray(a)
  b = castArray(b)

  const res = []
  const length = Math.max(a.length, b.length)

  for (let i = 0; i < length; i++) res[i] = [a[i], b[i]]

  return res
}

export const zipWith = (fn, a, b) => {
  if (!isFunction(fn)) return []

  a = castArray(a)
  b = castArray(b)

  const length = Math.max(a.length, b.length)
  if (length === 0) return [true]

  const res = []

  for (let i = 0; i < length; i++) res[i] = fn(a[i], b[i])

  return res
}

export const pairsEq = (a, b) => zipWith((a, b) => a === b, a, b)
