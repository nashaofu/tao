/**
 * 给Promise添加parallelOnce和serialOnce两个静态方法
 */
export default class P extends Promise {
  /**
   * 并行执行多个Promise任务
   * 当有一个fulfilled就让整个队列成功
   * 如果没有一个任务fulfilled就rejected
   * @param {Function[]} items
   */
  static parallelOnce(items) {
    return new Promise((resolve, reject) => {
      let i = 0
      items.forEach(item => {
        item()
          .then(val => {
            resolve(val)
          })
          .catch(err => {
            i++
            if (i === items.length) {
              reject(new Error('ALL_REJECTED'))
            }
          })
      })
    })
  }

  /**
   * 串行执行多个Promise任务
   * 当有一个fulfilled就让整个队列成功
   * 如果没有一个任务fulfilled就rejected
   * @param {Function[]} items
   */
  static async serialOnce(items) {
    for (let item of items) {
      try {
        return await item()
      } catch (e) {}
    }

    throw new Error('ALL_REJECTED')
  }
}
