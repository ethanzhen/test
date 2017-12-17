import React, { Component } from 'react'

import Header from "../components/cinema/Header.js"
import HomeBanner from "../components/home/HomeBanner.js"
import ShoppingList from "../components/shopping/ShoppingList.js"

export default class Shopping extends Component {
	
	constructor({history}){
		super();
		this.history = history;
		this.state = {
			title: "商城"
		};
	}
	
	render(){
		return (
			<div id="shopping" class="page">
				
			<Header title={this.state.title} />	
			
			<div class="Cinecontent" ref="Cinecontent">
				<div class="wrapper">
					<HomeBanner refresh={this.refreshScroll.bind(this)}/>
					<ShoppingList />
				</div>
			</div>
				
			</div>
		)
		
	}
	
	refreshScroll(){
		this.scroll.refresh();
	}
	
	componentDidMount(){
		this.scroll = new IScroll(this.refs.Cinecontent, {
			click: true,
			tap: true
		});
		this.scroll.on('scrollStart', ()=>{
			this.refreshScroll();
		})
	}
	
}