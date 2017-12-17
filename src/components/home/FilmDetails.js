import React, { Component } from 'react'
import { getFilmDetailDate } from "../../services/homeServices" 

export default class FilmDetails extends Component {
	
	constructor({location, history}){
		super();
		this.state = {
			id: location.state,
			filmObj: null
		};
		this.history = history;
	}
		
	render(){
		let html;
		if(!this.state.filmObj){
			html = <div></div>
		}else{
			html = (
				<div>					
				
					<div class="FilmDetailsHeader">					
						<img src={this.state.filmObj.cover.origin}/>
						<div class="DetailsHeader-info">
						
							<h2>{this.state.filmObj.name}</h2>
							<span>{this.state.filmObj.category}</span>
							<span>{this.state.filmObj.nation}</span>
							<span>{this.state.filmObj.mins}</span>	
							<span>{this.state.filmObj.grade}</span>
							
						</div>
					</div>
					
					<div class="FilmDetailsIntro">
						<p>{this.state.filmObj.synopsis}</p>
					</div>
				</div>
			)
		}

		return (
			<div id="FilmDetails" class="slide">
				<div class="DetailsHeader-title">
					<span onClick={()=>{
						this.history.goBack();
					}}>返回</span>
					<span>预告片</span>
					<span>剧照</span>
				</div>
			
				{ html }
				
				<div class="byNow">
					<div>
						<span>评论</span>
						<span>点赞</span>
						<span>分享</span>
					</div>
					<div>立即购买</div>
				</div>
				
			</div>
		)
		
	}
	
	componentWillMount(){
		getFilmDetailDate(this.state.id).then((result)=>{
			this.setState({filmObj: result.film});
		})
	}
	
}

