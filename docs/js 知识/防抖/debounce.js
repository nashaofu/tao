/**
 * 防抖
 * @param {*} fn 回调函数
 * @param {*} delay 间隔大小
 * @param {*} immediate 第一次是否立即回调
 */
export default function debounce(fn, delay, immediate) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    if (immediate && timer === undefined) {
      fn.apply(this, args)
    }
    timer = setTimeout(() => {
      timer = undefined
      fn.apply(this, args)
    }, delay)
  }
}
