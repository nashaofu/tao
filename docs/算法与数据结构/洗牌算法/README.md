# 洗牌算法

类似于洗牌，将所有牌的位置打乱，其中比较有代表性的是 Fisher-Yates Shuffle 算法

## Fisher-Yates Shuffle 算法

简单来说 Fisher–Yates shuffle 算法是一个用来将一个有限集合生成一个随机排列的算法（数组随机排序）。这个算法生成的随机排列是等概率的。同时这个算法非常高效。

## 算法思路

1. 从数组中取出一个元素
2. 在元素后面随机选取一个交换
3. 执行 arr.length 次

## 代码实现

<<< @/docs/算法与数据结构/洗牌算法/index.js
