<template>
  <div id="prototype">
    <div class="nav">原型展示</div>
    <div class="apps">
      <div class="app" v-for="app in apps" :key="app.name">
        <img :src="app.img" alt="">
        <div class="name">{{app.name}}</div>
        <div class="desc">
          <div class="time"></div>
          <div class="content"></div>
        </div>
        <button @click="app.action">展示</button>
      </div>
    </div>
    <show-tips v-show="showTip"></show-tips>
  </div>
</template>

<script>
import showTips from './showTips.vue'
export default {
  components: {showTips},
  name: 'prototype',
  props: {
    msg: String
  },
  data () {
    return {
      apps: [{
        name: '电商网页端',
        description: {
          time: '2018/6-2018/10',
          content: 'Main page item detail order page user profile page'
        },
        img: '',
        action: this.showEcommerce
      }, {
        name: '智慧小区-人脸识别',
        description: {
          time: '2019/7-2019/9',
          content: 'use AI tech detect specific face who are suspicious.',
        },
        img: '',
        action: this.showFace
      }, {
        name: '智慧小区-案件分析',
        description: {
          time: '2019/9-2020/1',
          content: 'use E-charts display community case situation.',
        },
        img: '',
        action: this.showCase,
      }, {
        name: '智慧小区-主界面展示',
        description: {
          time: '2020/3----',
          content: 'Main page',
        },
        img: '',
        action: this.showMedusa
      }],
      showTip: false
    }
  },
  methods: {
    showEcommerce () {this.showTip = true},
    showCase () {},
    showMedusa () {},
    showFace () {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
