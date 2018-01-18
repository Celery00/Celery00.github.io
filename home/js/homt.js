
new Vue({
	el:'.home_center',
	data:{
		curr:1
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
		}
	},

});
