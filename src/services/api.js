import axios from "axios";
const API_KEY = "5a89a77ee86e229bc729afaae3192a23";
const API_URL = 'https://api.themoviedb.org/3/';


export const fetchTrendingMovies = async () => {
    const response = await axios.get(`${API_URL}/trending/all/day?api_key=${API_KEY}`)
    return response
};

 export const fetchSearchMovies = async () => {
     const response = await axios.get(`${API_URL}/search/movie?api_key=${API_KEY}`)
     return response
};

 export const fetchDetailsMovies = async () => {
     const response = await axios.get(`${API_URL}/movies?api_key=${API_KEY}`) 
     return response
}
 export const fetchCast = async () => {
     const response = await axios.get(`${API_URL}/movies/credits?api_key=${API_KEY}`)
     return response
}

 export const fetchReviews = async () => {
     const response = await axios.get(`${API_URL}/movies/reviews?api_key=${API_KEY}`) 
     return response
}