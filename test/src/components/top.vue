<template>
  <div class="top">
    <ul>
    	<li v-for='item in lists'>{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
     	lists:['个人主页','个人技能','相册','心情','呵呵哒']
    }
  }
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
}
.top ul li:first-child{
	margin-left: 0!important;
}
.top ul li:last-child{
	margin-right: 0!important;
}
</style>