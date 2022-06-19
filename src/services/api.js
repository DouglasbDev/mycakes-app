import axios from "axios";

const api = axios.create({
    baseURL: "https://my-cakes.herokuapp.com"
})

export default api;