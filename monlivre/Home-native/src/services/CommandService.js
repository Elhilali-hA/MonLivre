import axios from 'axios';
const APP_URL = "http://172.16.8.87:5500/api/orders/";

export function Allreservation() {
    return axios.get(APP_URL + "reservation");
}

