import React, { Component } from 'react'
import { Route, Link } from "react-router-dom"

import Header from "../components/cinema/Header.js"
import Register from "../components/tickets/Register.js"

export default class Tickets extends Component {
	
	constructor({history}){
		super();
		this.history = history;
		this.state = {
			title: "卡券"
		};
	}
	
	render(){
		return (
			<div id="tickets" class="page">
			
				<Header title={this.state.title}/>
				
				<div class="Cinecontent" ref="Cinecontent">
					<div class="wrapper">					
						<div>	
						
							<input type="text" placeholder="输入卖座账号/手机号"/>
							<input type="text" placeholder="输入密码/验证码"/>
							<div class="regORfor">
								<Link to="/tickets/register">立即注册</Link>|
								<Link to="">忘记密码</Link>
							</div>
							
							<div class="login">
								<button>确认登录</button>
							</div>
							<Route path="/tickets/register" component = { Register } />
							
						</div>
					</div>
				</div>
				
			</div>
		)
		
	}
	
	
	
}