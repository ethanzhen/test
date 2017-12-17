import "whatwg-fetch"
import axios from "axios"
import URL from "../common/urlApi.js"

export function getBannerData(){
	return new Promise((resolve, reject)=>{
		/*fetch(`${URL.bannerApi}?__t=1508721047600`)
		.then((response)=>{
			
			return response.json();
			
		}).then((result)=>{
			console.log(response);
			resolve(result);
		})*/
		
		axios.get(`${URL.bannerApi}?__t=1508721047600`)
		.then((response)=>{
			let bannerInfo = response.data.data;
			resolve(bannerInfo);
		})
	})
}

export function getnowPlayingData(){
	return new Promise((resolve, reject)=>{
		
		axios.get(`${URL.nowPlayingListApi}?__t=1508741133281&page=1&count=5`)
		.then((response)=>{
			let nowPlayingInfo = response.data.data;
			resolve(nowPlayingInfo);
		})
	})
}

export function getFilmDetailDate(id){
	return new Promise((resolve, reject)=>{
		axios.get(`${URL.detailFilmApi}/${id}?__t=1508826306206`)
		.then((response)=>{
			let FilmDetail = response.data.data;
			resolve(FilmDetail);
		})
	})
}

export function getCityData(){
	return new Promise((resolve, reject)=>{
		axios.get(`${URL.addressApi}?__t=1508910950577`)
		.then((response)=>{
			let cityData = response.data.data.cities;
			resolve(cityData);
		})
	})
}

export function getCinemaData(){
	return new Promise((resolve, reject)=>{
		axios.get(`${URL.cinemaApi}?__t=1508920116524`)
		.then((response)=>{
			let cinemaData = response.data.data.cinemas;
			resolve(cinemaData);
		})
	})
}

export function getShoppingData(){
	return new Promise((resolve, reject)=>{
		axios.get(`${URL.shoppingApi}`).then((response)=>{
			let shoppingData = response.data.data;
			resolve(shoppingData);
		})
	})
}
