import axios from "axios";

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function postPublish(body , token){
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/publish`, body, 
    createConfig(token))  
    return promise;
}

function getPublishes(token){
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/publish`, createConfig(token))
    return promise
}

function postLike(body, token){
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/like`,body, createConfig(token))
    return promise
}



const apiPublishes = { postPublish , getPublishes, postLike};

export default apiPublishes;
