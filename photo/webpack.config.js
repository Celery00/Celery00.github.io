module.exports={
	entry:'./main.js',
	Output:{
		path:'',
		filename:'builds.js'
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			}
		]
	}


}