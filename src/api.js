import axios from 'axios';

const api = axios.create({
    baseURL: `http://www.omdbapi.com`,
    params: {
        apikey: '3b173a71' // Tu key
    }
    // http://www.omdbapi.com/?i=tt3896198&apikey=3b173a71
})

export default api;