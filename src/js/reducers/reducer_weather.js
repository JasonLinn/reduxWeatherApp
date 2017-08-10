import { FETCH_WEATHER } from "../actions/index";
export default function (state=[],action){
    switch (action.type) {
        case 'FETCH_WEATHER':
            // return state.concat([action.payload.data]);
            //no state.tomorrowWheather = weather
            return [action.payload.data,...state];//[city,city,city]//有新增的話會創新的陣列
    }
    return state;
};