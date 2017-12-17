import { createStore } from "redux"

let reducer = function(state, action){
	if(action.type == "@@redux/INIT"){
		state = {
			t : 1508721047600,
			HotCity : ["北京", "上海", "广州", "深圳"]
		}
	}
	
	return state;
	
}

let store = createStore(reducer);

export default store;
