import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json'
    },
    params: {
        api_key: '85d75996c5eb8c0809e550874a24ed39'
    }
});

export default instance;