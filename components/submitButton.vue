<template>
     <button class="btn w-100 my-3 py-2 btn-color text-light" @click="doSomeThing">
         {{title}}
          </button>
</template>
<script>

export default ({
 props: {
     title:{
         type:String,
     },
     callBack:{
         type:Function
     }
 },
 methods:{
     doSomeThing(){
         this.callBack();
     }
 }
})
</script>
