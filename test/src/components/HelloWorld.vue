<template>
  <div class="hello">
    <top></top>
    <left></left>
    <right>
		
    </right>
  </div>
</template>

<script>

import top from '@/components/top'
import left from '@/components/left'
import right from '@/components/right'




export default {
  name: 'HelloWorld',
  data () {
    return {
     
    }
  },
  components:{
  	top,
  	left,
  	right,


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
	background:rgba(255,255,255,0.1);
	border-radius: 10px;
	box-shadow: 0 0 30px 2px #eee;
	position: fixed;;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: 20px 50px;
	margin-bottom: -10px;
}
</style>
