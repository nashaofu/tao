/**
 * 实现Promise.allSettled
 * 参数未验证，主要实现原理
 */
Promise.allSettled = function(promiseArray) {
  return new Promise((resolve, reject) => {
    let i = 0
    const result = []
    promiseArray.forEach((p, index) => {
      p.then(
        val => {
          i++
          result[index] = {
            status: 'fulfilled',
            value: val
          }
          if (i === promiseArray.length) {
            resolve(result)
          }
        },
        err => {
          i++
          result[index] = {
            status: 'rejected',
            value: err
          }
          if (i === promiseArray.length) {
            resolve(result)
          }
        }
      )
    })
  })
}
