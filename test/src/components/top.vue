<template>
  <div class="top">
    <ul class="ufb">
    	<li :class="curr==1?'curr':''" @click='changeBack(1)'>
			<router-link to="/home">个人主页</router-link>
    	</li>
    	<li :class="curr==2?'curr':''" @click='changeBack(2)'>
			<router-link to="/skill">个人技能</router-link>
    	</li>
    	<li :class="curr==3?'curr':''" @click='changeBack(3)'>
			<router-link to="/photo">相册</router-link>
    	</li>
    	<li :class="curr==4?'curr':''" @click='changeBack(4)'>
			<router-link to="/mood">心情</router-link>
    	</li>
    	<li :class="curr==5?'curr':''" @click='changeBack(5)'>
			<router-link to="/hehe">呵呵哒</router-link>
    	</li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
     	curr:1,
    }
  },
  methods:{
  	changeBack:function(num){
  		this.curr=num;
  	},
  },
  mounted:function(){

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.curr{
	background: rgba(255,255,255,0.3);
}
.top{
	line-height: 60px;
	border-radius: 10px;  
	position: fixed;
	top: 30px;
	left: 320px;
	right: 80px;
	background:rgba(255,255,255,0.3);
	z-index: 100;
}

.top ul li{
	margin:0 10px;
	text-align: center;
	flex: 1;
	border-radius: 10px;
	color: #efeeee;
	font-size: 16px;
}
.top ul li:first-child{
	margin-left: 0!important;
}
.top ul li:last-child{
	margin-right: 0!important;
}

</style>