import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Home extends Component {	
	
	constructor(){
		super();
		this.state = {
			navData : [
				{title:"热映电影",path:"/home"},
				{title:"即将上映",path:"/home/content2"},
				{title:"热门活动",path:"/home/content3"}
			],
			selectIndex: 0
		}
	}
	
	
	
	render(){
		return (
			<div id="homeheader">
				<div class="headertitle">
					<span class="iconfont icon-address"></span>
					<span onClick={this.goAddress.bind(this)}>
						{this.props.address ? this.props.address : '地址'}
					</span>
					<h1>电影</h1>
				</div>
				<nav>
					<ul class="nav-tab">
						{
							this.state.navData.map((item,i)=>{
								return <Link to={item.path} key={i} 
								onClick={this.changeList.bind(this, i)}>
								<span class={ i == this.state.selectIndex ? "active" : ""}>{item.title}</span>
								</Link>
							})
						}
					</ul>
				</nav>
			</div>
		)
		
	}
	
	goAddress(){
		this.props.history.push("/home/address");
	}
	
	changeList(i){
		this.setState({selectIndex : i});
	}	
	
}
