<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<template>
  <div>
    <ButtonSelf
        :text="text"
        v-model="clickTime"
        @selfClick="handleClick">
      <!--默认插槽也需要名字,名字就交default-->
      <template #default>
        <div>默认插槽-default</div>
      </template>
      <template #first>
        <div>使用第一个具名插槽-first</div>
      </template>
      <template #second="{name,age,sex}">
        <div>使用第二个插槽接收值-{{name}} {{age}} {{sex}}</div>
      </template>
    </ButtonSelf>
    <div>点击次数:<span style="color: red;font-weight: bold;font-size: 20px">{{clickTime}}</span></div>
    <div class="button_div">
      <span>来自父组件-cssScoped测试</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import ButtonSelf from "./components/Button/index.vue"
import {ref} from "vue";
const text = ref<string>('我是来自父组件的值')
const clickTime = ref<number>(0);//点击次数
const handleClick = () => {
  console.log('触发了父组件的回调,handleClick')
}

</script>

