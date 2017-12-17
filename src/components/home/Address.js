import React, { Component } from 'react'
import store from '../../store';
import { getCityData } from "../../services/homeServices" 
import PubSub from 'pubsub-js'
import Header from "../cinema/Header.js"

export default class Address extends Component {
	
	constructor({history}){
		super();
		this.history = history;
		this.state = {
			HotCityArr : store.getState().HotCity,
			cityObj : {},
			title: "地址",
			action: "返回"
		};
	}
	
	render(){
		//console.log(this.state.cityObj);
		let cityHtml = [];
		for(let key in this.state.cityObj){
			let value = this.state.cityObj[key];
			let listHtml = value.list.map((item, index)=>{
				return <li class="city one-bottom-px" key={index}
				onClick = {this.changeCity.bind(this, item)}>{item}</li>;
			})
			let newTitle = String.fromCharCode(value.title);
			let html = (
				<div key={key}>
				
					<div class="address-title">
						<span>{newTitle}</span>
					</div>
					<ul>
						{listHtml}
					</ul>
				
				</div>
			)
			cityHtml.push(html);
		}
		
		return (
			<div id="address" class="slide">
				
				<Header history={this.history} title={this.state.title} action={this.state.action}/>
				
				<div class="IScontent" ref="IScontent">
					<div class="wrapper">
						<div>
							<div class="address-title">
								<span>GPS定位您所在的城市</span>
							</div>
							<div class="location">
								<span>深圳</span>
							</div>
							<div class="address-title">
								<span>热门城市</span>
							</div>
							<div class="hotCity">
								{
									this.state.HotCityArr.map((item,i)=>{
										return(
											<span key={i}>
												{item}
											</span>
										)
									})
								}
							</div>
							
							{ cityHtml }
							
						</div>
					</div>
				</div>
			</div>
		)
		
	}
	
	changeCity(item){
		PubSub.publish('address', item);
		this.history.goBack();
	}
	
	componentWillMount(){
		let cityObj = {};
		getCityData().then((result)=>{
			result.map((item, index)=>{
				let OriTitle = item.pinyin.charAt(0);
				let title = OriTitle.charCodeAt();
				
				if(!cityObj[title]){
					cityObj[title] = {
						title: title,
						list:[]
					}
				}
				cityObj[title].list.push(item.name);
				this.setState({cityObj});
			})
			
		})
				
	}
	
	componentDidMount(){
		this.scroll = new IScroll(this.refs.IScontent, {
			click: true,
			tap: true
		});
		this.scroll.on('scrollStart', ()=>{
			this.scroll.refresh();
		})
	}
	
}