import axios from "axios";
import moment from 'moment';

export function updateCityInput(CityInput){
     const APPID = 'dfeb2f059877c4edbbbeea5638365bd4'
    const payload = axios.get(`/api/${CityInput}`);
    return {
        type: 'UPDATE_CITY_INPUT',
        payload
        
    }

}

export function addHistory(CityInput) {
    return {
        type: 'ADD_HISTORY',
        payload: {
            CityInput, date: moment().format('MMMM do YYYY, h:mm:ss a')
        }
    }
}