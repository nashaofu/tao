/**
 * 实现Promise.race
 * 参数未验证，主要实现原理
 */
Promise.race = function(promiseArray) {
  return new Promise((resolve, reject) => {
    let i = 0
    promiseArray.forEach((p, index) => {
      p.then(
        val => resolve(val),
        err => reject(err)
      )
    })
  })
}
