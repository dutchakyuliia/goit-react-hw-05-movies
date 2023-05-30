import axios from "axios";
const API_KEY = "5a89a77ee86e229bc729afaae3192a23";
const API_URL = 'https://api.themoviedb.org/3/';


const fetchTrendingMovies = async () => {
    const response = await axios.get('${API_URL}/trending/get-trending?api_key=${API_KEY}')
};

const fetchSearchMovies = async () => {
    const response = await axios.get('${API_URL}/search/search-movies?api_key=${API_KEY}')
};

const fetchDetailsMovies = async () => {
   const response = await axios.get('${API_URL}/movies/get-movie-details?api_key=${API_KEY}') 
}
const fetchCast = async () => {
    const response = await axios.get('${API_URL}/movies/get-movie-credits?api_key=${API_KEY}')
}

const fetchReviews = async () => {
   const response = await axios.get('${API_URL}/movies/get-movie-reviews?api_key=${API_KEY}') 
}