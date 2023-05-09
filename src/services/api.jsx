import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8001/explosao-service"
})

export default api