<template>
  <button @click="click">点击我，然后在控制台查看效果</button>
</template>

<script>
import throttle from './throttle'
export default {
  name: 'throttle-demo',
  data () {
    return {
      count: 0,
      last: 0
    }
  },
  methods: {
    click: throttle(function () {
      let last = this.last
      this.last = Date.now()
      console.log('点击回调', this.count, this.last - last)
      this.count++
    }, 1000)
  }
}
</script>
