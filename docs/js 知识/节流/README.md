# 节流

节流

## 示例

假如我们给一个按钮点击事件加上了节流，然后我们以小于间隔时间的频率连续点击按钮，那么按钮回调处理函数会每间隔一段时间执行一次。

<iframe src="./throttle.html" width="100%" height="60" style="border:none;" />

::: details 查看源码
<<< @/docs/js 知识/节流/throttle.vue
:::

## 代码实现

<<< @/docs/js 知识/节流/throttle.js
