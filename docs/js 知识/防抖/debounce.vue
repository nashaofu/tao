<template>
  <button @click="click">点击我，然后在控制台查看效果</button>
</template>

<script>
import debounce from './debounce'
export default {
  name: 'debounce-demo',
  methods: {
    click: debounce(function () {
      console.log('点击回调')
    }, 1000, true)
  }
}
</script>
