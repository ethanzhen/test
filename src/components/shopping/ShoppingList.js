import React, { Component } from 'react'
import { getShoppingData } from "../../services/homeServices" 

export default class Shopping extends Component {
	
	constructor(){
		super();
		this.state = {
			data:[]
		};
	}
	
	render(){

		return (
			<div id="shopping">
			
				<div class="iconList">
					<ul>
						{
							this.state.data.map((item, index)=>{
								if(item.type == 1){
										return (
										<li key={index}>
											<img src={item.imageSrc}/>
											<span>{item.name}</span>
										</li>
									)
								}
							})
						}
					</ul>
				</div>
				
				<div class="shandowBox"></div>
				
				<div class="ImgList">
					{
						this.state.data.map((item, index)=>{
							if(item.type == 3){
								return (
									<div key={index}>
										<img src={item.imageSrc}/>
									</div>
								)
							}
						})
					}
				</div>
				
				<div class="shandowBox"></div>
				
				<div class="AdList">
					<div>
						<h3>——有品专区——</h3>
					</div>
					<div class="AdListBigBox">
						{
							this.state.data.map((item, index)=>{
								if(item.type == 4){
									return (
										<div key={index} class="AdListBox">
											<img src={item.imageSrc}/>
										</div>
									)
								}
							})
						}
					</div>
				</div>
					
				<div class="goodsList">
					{
						this.state.data.map((item, index)=>{
							if(item.type == 5){
								return (
									<div  key={index}>
										<div class="shandowBox"></div>
										<div class="titleImg">
											<img src={item.imageSrc}/>
										</div>
										<div class="goodsListBox">
											<ul>
												{
													item.products.map((item,i)=>{
														return(
															<li key={i}>
																<img src={item.image}/>
																<p>{item.name}</p>
																<p>¥{item.price*0.01}</p>
															</li>
														)
													})
												}
											</ul>
										</div>
									</div>
								)
							}
						})
					}
				</div>
					
			</div>
		)
		
	}
	
	componentWillMount(){
		getShoppingData().then((result)=>{
			this.setState({data:result});
			console.log(this.state.data);
		})
	}
}