import axios from 'axios';


axios.defaults.baseURL = process.env.NODE_ENV === "production" ? "https://api.codingpalette.com" : "http://localhost:8000";
// axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.timeout = 180000;
axios.defaults.withCredentials = true;

export default axios;