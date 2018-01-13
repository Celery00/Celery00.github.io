<template>
  <div class="top">
    <ul class="ufb">
    	<li @click='changeBack'>
			<router-link to="/home">个人主页</router-link>
    	</li>
    	<li @click='changeBack'>
			<router-link to="/skill">个人技能</router-link>
    	</li>
    	<li @click='changeBack'>
			<router-link to="/photo">相册</router-link>
    	</li>
    	<li @click='changeBack'>
			<router-link to="/mood">心情</router-link>
    	</li>
    	<li @click='changeBack'>
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
     	curr:1
    }
  },
  methods:{
  	changeBack:function(e){
  		console.log(e);

  	},
  },
  mounted:function(){

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.curr{
	background: #ccc;
	opacity: 0.5;
	color: #333!important;
}
.top{
	line-height: 60px;
	border-radius: 10px;  
	position: fixed;
	top: 30px;
	left: 320px;
	right: 80px;
	background:rgba(255,255,255,0.1);
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
a{
	color:#fff;
}
</style>