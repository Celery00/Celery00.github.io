<template>
  <div class="home_left">
		<img src="../assets/7.jpg" alt="">
		<p class="fs-30 mar-tb-20">Celery</p>
		<p class="fs-16">爱玩爱工作,爱吃爱生活~</p>
		<ul class="ufb ufb-pc mar-t-20">
			<li>
				<a href="https://weibo.com/5831188960/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1" title='微博'>
					<i class="fa fa-weibo" aria-hidden="true"></i>
				</a>
			</li>
			<li>
				<a href="https://github.com/Celery00/Celery00.github.io" title="github">
					<i class="fa fa-github" aria-hidden="true"></i>
				</a>
			</li>
			<li>
				<a href="" title="微信">	
					<i class="fa fa-wechat" aria-hidden="true"></i>
				</a>
			</li>
		</ul>		
	</div>
</template>

<script>
export default {
  name: 'home_left'
}
</script>

<style>

  .home_left{
	text-align: center;
	width: 200px;
	height: 500px;
	border-radius: 10px;
	line-height: 50px;
	position: fixed;;
	top: 100px;
	left: 60px;
	background:rgba(255,255,255,0.1);
	z-index: 100;
}
.home_left img{
	display: inline-block;
	width: 150px;
	height: 150px;
	border: 4px solid #ccc;
	border-radius:50%;
	margin-top: 30px;
}
.home_left .fs-30{
	color: #333;
	font-weight: 500;
}
.home_left .fs-16{
	color: #8A4F19;
}
.home_left ul li a .fa{
	width: 25px;
	line-height: 25px;
	border-radius: 50%;
	background: #eee;
	font-size: 20px;
	margin:0 15px;
}

</style> 