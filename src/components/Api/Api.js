import axios from "axios";


const APi = axios.create({
    baseURL: "https://dummyjson.com/",
})

export default APi;