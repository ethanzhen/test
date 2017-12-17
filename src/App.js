import React, { Component } from "react"
import { BrowserRouter as Router, Route, Redirect, NavLink, Switch } from "react-router-dom"

import Home from "./pages/Home.js"
import Cinema from "./pages/Cinema.js"
import Tickets from "./pages/Tickets.js"
import Shopping from './pages/Shopping.js'
import Mine from './pages/Mine.js'

export default class App extends Component {
	
	constructor(){
		super();
		this.state = {
			tabData:[
				{title:"电影", icon:"icon-film", path:"/home"},

				
				{title:"影院", icon:"icon-cinema", path:"/cinema"},

				{title:"卖座卡", icon:"icon-tickets", path:"/tickets"},
				{title:"商城", icon:"icon-shopping", path:"/shopping"},

				{title:"我的", icon:"icon-mine", path:"/mine"}

			],
			selectIndex: 0
		}
	}
	
	render(){
		return(
			
			<Router>
				<div>
				<Switch>
					{/* 路径"/"的重定向 */}
					
					<Route path="/" exact render={()=>{
						return <Redirect to="/home"/>
					}}/>
					
					<Route path="/home" component={Home}/>
					<Route path="/cinema" component={Cinema}/>
					<Route path="/tickets" component={Tickets}/>
					<Route path="/shopping" component={Shopping}/>
					<Route path="/mine" component={Mine}/>
					
					{/* 路径"*"的匹配 */}
					<Route component = { Home }/>
					
				</Switch>
				
					<nav class="tabs one-top-px">
						{
							this.state.tabData.map((item,i)=>{
								return(
									<NavLink key={i} to={item.path}  onClick={this.selectNav.bind(this, i)} >
										<span class={"iconfont "+item.icon}></span>
										<span class={this.state.selectIndex == i ? "hidden": ""}>{item.title}</span>
									</NavLink>
								) 
							})
						}
					</nav>
				
				</div>
			</Router>
			
		)
	}
	
	selectNav(i){
		this.setState({selectIndex : i});
	}
}
