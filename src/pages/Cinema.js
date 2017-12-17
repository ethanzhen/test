import React, { Component } from 'react'
import { getCinemaData } from "../services/homeServices" 
import PubSub from 'pubsub-js'

import Header from "../components/cinema/Header.js"

export default class Cinema extends Component {
	
	constructor({history}){
		super();
		this.history = history;
		this.state = {
			data : {},
			title: "全部影院"
		};
	}
	
	render(){
		
		let cinemasHtml = [];
		for( let key in this.state.data ){
			let value = this.state.data[key];
			let listHtml = value.list.map((item, index)=>{
				return <li key={index}>{item}</li>;
			})
			let html = (
				<div key={key}>
					<h1 onClick={this.titleClick.bind(this, key)}>{value.name}</h1>
					<ul>
						{value.isShow ? listHtml : ''}
					</ul>
				</div>
			);
			cinemasHtml.push(html);
		}
		
		return (
			<div id="cinema" class="page">
			
				<Header title={this.state.title}/>
				
				<div class="Cinecontent" ref="Cinecontent">
					<div class="wrapper">					
							
						{ cinemasHtml }
							
					</div>
				</div>
				
			</div>
		)		
	}
	
	titleClick(key){
		//获得对应的区域的值
		let value = this.state.data[key];
		value.isShow = !value.isShow;
		
		this.setState({data: this.state.data});
		
	}
	
	componentWillMount(){
		let cinemaObj = {};
		getCinemaData().then((result)=>{
			
			/*console.log(result);*/
			
			result.map((item, index)=>{
				let name = item.district.name;
				if(!cinemaObj[name]){
					cinemaObj[name] = {
						name: name,
						list:[],
						isShow: false
					}
				}
				cinemaObj[name].list.push(item.name);
				this.setState({data : cinemaObj});
			})
			
		})
				
	}
	
	componentDidMount(){
		this.scroll = new IScroll(this.refs.Cinecontent, {
			click: true,
			tap: true
		});
		this.scroll.on('scrollStart', ()=>{
			this.scroll.refresh();
		})
	}
	
}