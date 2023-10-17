<script lang="tsx">
import {defineComponent,} from "vue";
import {Emits, Props,Slots} from "./types";

export default defineComponent<Props,Emits,{},Slots>((props,ctx) => {
  const { emit,slots, } = ctx;
  console.log(props,ctx,slots)
  const clickSon = () => {
    console.log('调用了子组件的clickSon')
    //去调用父组件的方法
    emit('selfClick')
  }
  return () => (
      <div>
        <button onClick={clickSon}>
          Hello,World!{ props.text}
        </button>
        <div>
          {slots.default()}
        </div>
        <div>
          {slots.first()}
        </div>
      </div>
  )
},{
  //即使使用了泛型,这个也不能省略~
  props: {text:String},
})
</script>

<style scoped>

</style>
