<script lang="tsx">
import {defineComponent, nextTick} from "vue";
import { SlotsType } from 'vue'
export default defineComponent({
 //props:{
 //  text:String,
 //},
  //或者
  props:['text','modelValue'],
  emits:['selfClick','update:modelValue'],
  slots: Object as SlotsType<{
    default: {}
    first: {},
    second: {
      name:String,
      age:Number,
      sex:'男' | '女',
    }
  }>,
  setup:(props,ctx) => {
    const { emit,slots, } = ctx;
    console.log(props,ctx,slots)
    //v-bind示例
    const clickSon = () => {
      console.log('调用了子组件的clickSon')
      //去调用父组件的方法
      emit('selfClick')
    }
    // 双向绑定示例
    const clickValue = () => {
      emit('update:modelValue',props.modelValue + 1);
      //查看props值
      nextTick(() => {
        console.log(props)
      })
    }
    return () => (
        <div>
          {
          //  v-bind示例
          }
          <button onClick={clickSon}>
            点击我调用父元素方法{ props.text}
          </button>
          { /** 默认插槽 */ }
          <div>
            [默认插槽]{slots.default?.()}
          </div>
          { /** 具名插槽 */ }
          <div>
            [具名插槽]{slots.first?.()}
          </div>
          { /** 插槽传值 */ }
          <div>
            [插槽传值]{slots.second?.({
              name:'梦洁',
              age:18,
              sex:'男',
          })}
          </div>
          <div>
            <button onClick={clickValue}>
              点击我
            </button>
          </div>
            <div class="button_div">
              <span>子组件-cssScoped测试</span>
            </div>
        </div>
    )
  }
})
</script>

<style scoped>
.button_div{
  background-color: #535bf2;
}
</style>
