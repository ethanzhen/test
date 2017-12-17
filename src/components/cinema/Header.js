import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Home extends Component {	
	
	constructor(){
		super();
		this.state = {
			
		}
	}

	render(){
		return (
			<div id="Allheader" class="one-bottom-px">
				<span onClick={this.goBack.bind(this)}>{this.props.action}</span>
				<h1>{this.props.title}</h1>
			</div>
		)
	}
	
	goBack(){
		this.props.history.goBack();
	}
	
}
