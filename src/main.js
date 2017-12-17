import React from "react"
import ReactDom from "react-dom"

import App from "./App.js"

ReactDom.render(
	<App/>,
	document.getElementById("root")
)


function computedWidth(){
	var screenWidth = document.documentElement.clientWidth;
	var width = 640;
	if(screenWidth >= width){
		document.documentElement.style.fontSize = '100px'
	}
	else{
		var fontsize = (screenWidth/width)*100 + 'px';
		document.documentElement.style.fontSize = fontsize;
	}
}

//第一次进入需要计算
computedWidth();
//屏幕宽度变化时
window.addEventListener('resize', computedWidth);
//横竖屏切换时
window.addEventListener('orientationchange', computedWidth);