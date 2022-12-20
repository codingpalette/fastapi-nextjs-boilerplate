import axios from 'axios';

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://port-0-fastapi-nextjs-boilerplate-ngsnp25lbs18e9i.gksl2.cloudtype.app' : 'http://localhost:8000';
axios.defaults.timeout = 180000;
axios.defaults.withCredentials = true;

export default axios;