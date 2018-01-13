<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

/*美化滚动条*/
::-webkit-scrollbar {
	width: 8px;
} /* 这是针对缺省样式 (必须的) */
::-webkit-scrollbar-track {
	  background-color: #333;
	  border-radius: 10px;
} /* 滚动条的滑轨背景颜色 */

::-webkit-scrollbar-thumb {
	  background-color: rgba(0, 0, 0, 0.2); 
	  background: #ccc;
	  border-radius: 10px;
} /* 滑块颜色 */

::-webkit-scrollbar-button {
	 /* background-color: #333;
	  border-top-right-radius: 10px;
	  border-top-left-radius: 10px;*/

} /* 滑轨两头的监听按钮颜色 */

::-webkit-scrollbar-corner {
	  background-color: black;
} /* 横向滚动条和纵向滚动条相交处尖角的颜色 */

	body{
	    background: url(./assets/home_back.jpg) no-repeat;
	    background-size:cover; 
	}
	.fs-16{
		font-size: 16px;
	}
	.fs-30{
		font-size: 30px;
	}
	.ufb {
	  display: -webkit-box;
	  display: -webkit-flex;
	  display: -moz-box;
	  display: -moz-flex;
	  display: -ms-flexbox;
	  display: flex;
	}
	.ufb-str {
	  display: -webkit-box;
	  display: -webkit-flex;
	  display: -moz-box;
	  display: -moz-flex;
	  display: -ms-flexbox;
	  display: flex;
	  -webkit-align-items: stretch;
	  -moz-align-items: stretch;
	  align-items: stretch;
	}
	.ufb-f1 {
	  -webkit-flex-grow: 1;
	  -moz-flex-grow: 1;
	  flex-grow: 1;
	}
	.ufb-ac {
	  -webkit-align-items: center;
	  -moz-align-items: center;
	  align-items: center;
	}
	.ufb-ae {
	  -webkit-align-items: flex-end;
	  -moz-align-items: flex-end;
	  align-items: flex-end;
	}
	.ufb-pc {
	  -webkit-justify-content: center;
	  -moz-justify-content: center;
	  justify-content: center;
	}
	.ufb-pe {
	  -webkit-justify-content: flex-end;
	  -moz-justify-content: flex-end;
	  justify-content: flex-end;
	}
	.ufb-pj {
	  -webkit-justify-content: space-between;
	  -moz-justify-content: space-between;
	  justify-content: space-between;
	}
	.ufb-ver {
	  -webkit-flex-direction: column;
	  -moz-flex-direction: column;
	  flex-direction: column;
	}
	/*子元素可换行*/
	.ufb-wrap {
	  -webkit-flex-wrap: wrap;
	  -moz-flex-wrap: wrap;
	  flex-wrap: wrap;
	}
	* {
	  margin: 0;
	  padding: 0;
	  outline: none;
	}
	*,
	*:before,
	*:after {
	  -webkit-box-sizing: border-box;
	  -moz-box-sizing: border-box;
	  box-sizing: border-box;
	}
	body,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	hr,
	p,
	blockquote,
	dl,
	dt,
	dd,
	ul,
	ol,
	li,
	pre,
	form,
	fieldset,
	legend,
	button,
	th,
	td,
	img,
	div {
	  -webkit-touch-callout: inherit;
	  -webkit-user-select: auto;
	}
	a,
	input,
	button,
	div,
	textarea {
	  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	  -webkit-tap-highlight-color: transparent;
	}
	html {
	  -ms-text-size-adjust: 100%;
	  -webkit-text-size-adjust: 100%;
	}
	body {
	  width: 100%;
	  font-family: "Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei", FreeSans, Arimo, "Droid Sans", "Hiragino Sans GB", "Hiragino Sans GB W3", Simsun, sans-serif;
	  font-size: 14px;
	  color: #333;
	  -webkit-touch-callout: inherit;
	  -webkit-user-select: auto;
	  background-color: #fff;
	}
	a {
	  color: #333;
	  text-decoration: none;
	  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	  -webkit-touch-callout: none; 
	}
	a:hover,
	a:active {
	  text-decoration: none;
	  outline: 0;
	}
	button,
	input:not[type="checkbox"],
	select,
	textarea {
	  margin: 0;
	  padding: 0;
	  font: inherit;
	  color: inherit;
	  outline: none;
	  -webkit-appearance: none;
	  text-transform: none;
	}
	img {
	  vertical-align: top;
	  -webkit-touch-callout: none;
	}
	textarea {
	  resize: none;
	}
	ul,
	ol,
	li {
	  list-style: none;
	}
	em {
	  font-style: normal;
	}
	button {
	  border-image: none;
	  border: 0;
	}
	input::-webkit-input-placeholder {
	  color: #ccc;
	}
</style> 