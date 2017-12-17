import React, { Component } from 'react'
import { getnowPlayingData } from "../../services/homeServices" 

export default class HomeList extends Component {
	
	constructor(){
		super();
		this.state = {
			listArr: []
		};
	}
	
	render(){
		return (
			<div id="homelist">
				{
					this.state.listArr.map((item, i)=>{
						return(
							<div class="list-box one-bottom-px" key={i} onClick={this.enterDetails.bind(this, item)}>
								<div class="list-top">
									<div class="list-img">
										<img src={item.poster.origin}/>
									</div>
									<div class="list-info one-bottom-px">
										<h3>{item.name}</h3>
										<span>{item.grade}</span>
										<p>{item.intro}</p>
										<p>{item.cinemaCount}个影院上映</p>
									</div>
								</div>
								<div class="activity">
								
								</div>
								<div class="news">
								
								</div>
							</div>
						)
					})
				}
			</div>
		)
		
	}
	
	enterDetails(item){
		this.props.history.push({
			 pathname:"/home/detail/"+item.id,
			 state: item.id
		});
	}
	
	componentWillMount(){
		getnowPlayingData().then((result)=>{
			/*console.log(result.films);*/
			this.setState({listArr: result.films});
			
		})
		
	}
	
	componentDidUpdate(){
		this.props.refresh();
	}
	
}