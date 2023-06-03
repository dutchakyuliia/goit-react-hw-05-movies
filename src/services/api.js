import axios from "axios";
const API_KEY = "5a89a77ee86e229bc729afaae3192a23";
const API_URL = 'https://api.themoviedb.org/3/';


export const fetchTrendingMovies = async () => {
    const {data} = await axios.get(`${API_URL}/trending/all/day?api_key=${API_KEY}`)
    return data
};

 export const fetchSearchMovies = async query => {
     const {data} = await axios.get(`${API_URL}/search/movie&query=${query}?api_key=${API_KEY}`)
     return data
};

 export const fetchDetailsMovies = async  movieId => {
     const {data} = await axios.get(`${API_URL}/movies/${movieId}/?api_key=${API_KEY}`) 
     return data
}
 export const fetchCastMovies = async  movieId => {
     const {data} = await axios.get(`${API_URL}/movies//${movieId}/credits?api_key=${API_KEY}`)
     return data
}

 export const fetchReviewsMovies = async  movieId => {
     const {data} = await axios.get(`${API_URL}/movies//${movieId}/reviews?api_key=${API_KEY}`) 
     return data
}