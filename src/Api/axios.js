import axios from "axios";

const axiosInstance = axios.create({
  
    // baseURL :'http://127.0.0.1:5001/clone-13a3d/us-central1/api'
    baseURL : 'https://amazon-api-deploy-q8lj.onrender.com/'
});

export { axiosInstance };


