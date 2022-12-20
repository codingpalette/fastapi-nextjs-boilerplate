import axios from 'axios';
import {backUrl} from "../config/config";

axios.defaults.baseURL = backUrl
axios.defaults.timeout = 180000;
axios.defaults.withCredentials = true;

export default axios;