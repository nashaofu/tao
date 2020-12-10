/**
 * 节流
 * @param {*} fn 回调函数
 * @param {*} time 间隔时间
 */
export default function throttle(fn, time) {
  let timer
  // 是否执行过了回调
  let called = false

  return function(...args) {
    const timeout = () => {
      return setTimeout(() => {
        if (called === true) {
          // 开始下一个计时
          timer = timeout()
          fn.apply(this, args)
          called = false
        } else {
          timer = null
        }
      }, time)
    }

    called = true
    if (!timer) {
      fn.apply(this, args)
      called = false
      timer = timeout()
    }
  }
}
