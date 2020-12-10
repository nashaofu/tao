/**
 * 实现Promise.all
 * 参数未验证，主要实现原理
 */
Promise.all = function(promiseArray) {
  return new Promise((resolve, reject) => {
    let i = 0
    const result = []
    promiseArray.forEach((p, index) => {
      p.then(
        val => {
          i++
          result[index] = val
          if (i === promiseArray.length) {
            resolve(result)
          }
        },
        err => reject(err)
      )
    })
  })
}
