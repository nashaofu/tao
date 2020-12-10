# 类与类的继承

## 类的实例化

类的实例化可参考[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

```js
// 因此，当你执行：
var o = new Foo()

// JavaScript 实际上执行的是：
var o = new Object()
o.__proto__ = Foo.prototype
Foo.call(o)
```

## 类的继承

ES6 提供了类继承相关的语法，我们直到类的继承是基于原型的，那么如果用 ES5，我们应该怎么些呢？

<<< @/docs/js 知识/类与类的继承/es6.js

### babel 编译后的代码

<<< @/docs/js 知识/类与类的继承/es6ToEs5.js

#### B 继承 A 简化

```js
function A() {
  this.myA = 'a'
}

A.prototype.a = function() {
  console.log('A-a')
}

function B() {
  const _this = A.apply(this, arguments) || this
  _this.myB = 'b'
  return _this
}

B.prototype.__proto__ = A.prototype
B.__proto__ = A
```

## instanceof 与 isPrototypeOf 的区别

```js
b instanceof B // b.__proto__ === B.prototype 一直查找__proto__是否为B.prototype
B.isPrototypeOf(b) // b.__proto__ === B 一直查找 __proto__ 上的值是否为B

B.prototype.isPrototypeOf(b) // 相当于 b instanceof B
```
