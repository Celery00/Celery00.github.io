
$(function(){
	var app=new Vue({
	el:'.home_center',
	data:{
		// 首页页面
		curr:1,
		// 技能页面
		text:'',
		select:'en',
		translateText:'',
		cityList:[
			{
				label:'英国',
				value:'en'
			},
			{
				label:'日本',
				value:'fa'
			},
		]
	},
	mounted:function(){
		var that = this;
		that.$nextTick(function () {
			that.init();
        })
	},
	methods:{
		//初始化数据
		init:function () {
		
        },
        //改变导航背景色
        changeBack:function(num){
        	this.curr=num;
		},
		// 翻译
		translate:function(){
			console.log(this.text);
			var text=this.text;
			console.log(this.select);
			this.translateText=this.text;
			this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=tras.1.1.201707.217082515z.54cf3dc583f679db.f4a96182281281d8b5dfe24b4e88298e2133f219&lang=en&text='+text).then(function(res){
				console.log(res)
			})
		},
	},

	});
});



 
