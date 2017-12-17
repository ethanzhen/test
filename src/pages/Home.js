import React, { Component } from 'react'
import { Route } from "react-router-dom"
import PubSub from 'pubsub-js'

import HomeHeader from "../components/home/HomeHeader.js"
import HomeBanner from "../components/home/HomeBanner.js"
import HomeList from "../components/home/HomeList.js"
import ComingSoonList from "../components/home/ComingSoonList.js"
import HotActivity from "../components/home/HotActivity.js"
import FilmDetails from "../components/home/FilmDetails.js"
import Address from "../components/home/Address.js"

export default class Home extends Component {

	constructor({history}){
		super();
		this.state = {
			selectIndex: 0,
			city: ""
		};
		this.history = history;
	}

	render(){
		
		return (
			<div>
				<div id="home" class="page">
					
					<HomeHeader address={this.state.city} history={ this.history } />
					
					<div class="content" ref="content">
						<div class="wrapper">
							<HomeBanner refresh={this.refreshScroll.bind(this)}/>
							<HomeList history={ this.history } refresh={this.refreshScroll.bind(this)}/>
						</div>
					</div>
	
				</div>
			
				<Route path="/home/content2" component={ ComingSoonList }/>
				
				<Route path="/home/content3" component={ HotActivity }/>
				
				<Route path="/home/address" component={ Address }/>
				
				<Route path="/home/detail" component={ FilmDetails }/>
				
			</div>
		)
		
	}
	
	refreshScroll(){
		this.scroll.refresh();
	}
	
	componentWillMount(){
		PubSub.subscribe('address', (msg, data)=>{
			this.setState({city: data});
		})
	}
	
	componentDidMount(){
		this.scroll = new IScroll(this.refs.content, {
			click: true,
			tap: true
		});
		this.scroll.on('scrollStart', ()=>{
			this.refreshScroll();
		})
	}
}