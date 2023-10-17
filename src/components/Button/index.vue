<script lang="tsx">
import {defineComponent, nextTick,} from "vue";
import {Emits, Props,Slots} from "./types";

export default defineComponent<Props,Emits,{},Slots>((props,ctx) => {
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
        <div>
          {slots.default()}
        </div>
        <div>
          {slots.first()}
        </div>
        <div>
          <button onClick={clickValue}>
            点击我
          </button>
        </div>

      </div>
  )
},{
  //即使使用了泛型,这个也不能省略~
  props: {
    text:String,
    modelValue:Number,
  },
})
</script>

<style scoped>

</style>
