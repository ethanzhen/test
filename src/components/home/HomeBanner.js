import React, { Component } from 'react'
import { getBannerData } from "../../services/homeServices" 


export default class HomeBanner extends Component {
	
	constructor(){
		super();
		this.state = {
			bannerArr: []
		};


	}
	
	render(){
		return (
			<div id="homebanner" class="swiper-container" ref="banner">
				<div class="swiper-wrapper">
					{
						this.state.bannerArr.map((item, index)=>{
							return(
								<div class="swiper-slide" key={index}>
				    				<img src={item.imageUrl}/>
				    			</div>
							) 
						})
					}
				</div>
			    <div class="swiper-pagination"></div>
			</div>
		)
		
	}
	
	componentWillMount(){
		getBannerData().then((result)=>{
			this.setState({bannerArr: result.billboards});
		})
	}
	
	componentDidMount(){
		this.swiper = new Swiper(this.refs.banner, {
			pagination: '.swiper-pagination'
		});
	}
	
	componentDidUpdate(){
		this.swiper.update();
		this.props.refresh();
	}
	
}