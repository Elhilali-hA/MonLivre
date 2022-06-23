import axios from 'axios';
const APP_URL = "http://172.16.8.87:5500/api/";
export function AllProduct() {
    return axios.get(APP_URL + "books");
}

