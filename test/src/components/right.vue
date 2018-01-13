<template>
  	<div class="home_right">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
  name: 'right'
}
</script>

<style scoped>
.home_right{
	position: fixed;
	top:100px;
	left: 280px;
	right: 0px;
	bottom: 0;
	padding-right: 80px;
	overflow: auto;
}

</style> 