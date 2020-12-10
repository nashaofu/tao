# Promise

```bash
.
├── P.js # 创建P类，继承于Promise，但添加了静态方法
├── MyPromise.js # 按Promise A+规范实现
├── PromiseStatic.js # 实现Promise 的静态方法，主要医原理实现为主，不严谨
├── parallelResolveOnce.js # 并行Promise，其中又一个成功则整个任务完成并切整个任务成功
├── resolveOnce.js  # parallelResolveOnce与serialResolveOnce执行示例
└── serialResolveOnce.js  # 串行Promise，直到又一个成功就结束整个进程，并切整个任务成功
```

## Promise A+

实现一个符合 Promise A+规范的自定义 Promise，该实现可通过[promises-aplus-tests](https://github.com/promises-aplus/promises-tests)全部测试

<<< @/docs/js 知识/Promise/MyPromise.js

## 实现 Promise 的静态方法

### Promise.all

<<< @/docs/js 知识/Promise/all.js

### Promise.race

<<< @/docs/js 知识/Promise/race.js

### Promise.allSettled

<<< @/docs/js 知识/Promise/allSettled.js

## 并行 Promise 与串行 Promise

一批函数执行后，如果有一个函数返回成功，则整个任务成功。分为串行和并行两种方式。使用场景举例：扫描服务器端口 0-65535。每次并发扫描10个端口，直到找到一个可用端口。

<<< @/docs/js 知识/Promise/P.js
