
const headers = {
    accept: 'application/json',
    // api key
    Authorization: `Bearer ${process.env.TMDB_KEY}`
};
const imageBASEURL = "https://image.tmdb.org/t/p/original/";
const tmdbBASEURL = "https://api.themoviedb.org/3/";
// ahmarae backend yah data leke aayega
const TMDB_ENDPOINT = {
    //discover
    fetchNowPlaying: "/movie/now_playing",
    fetchTrending: `/trending/all/week`,
    fetchPopular: `/trending/all/week`,
    fetchUpcoming: `/movie/upcoming?include_video=true`,
    fetchTopRated: `/movie/top_rated?include_video=true`,

    // Movies
    fetchActionMovies: `/discover/movie?language=en-US&with_genres=28`,
    fetchComedyMovies: `/discover/movie?language=en-US&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?language=en-US&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?language=en-US&with_genres=10749`,
    fetchAnimeMovies: '/discover/movie?language=en-US&with_genres=16',
    fetchMovieVideos: (id) => `/movie/${id}/videos`,
    fetchMovieDetails: (id) => `/movie/${id}`,

    // Tv Shows
    fetchActionTvShows: `/discover/tv?language=en-US&with_genres=10759`,
    fetchComedyTvShows: `/discover/tv?language=en-US&with_genres=35`,
    fetchMysteryTvShows: `/discover/tv?language=en-US&with_genres=9648`,
    fetchDramaTvShows: `/discover/tv?language=en-US&with_genres=18`,
    fetchCrimeTvShows: `/discover/tv?language=en-US&with_genres=80`,
    fetchTvShowVideos: (id) => `/tv/${id}/videos`,
    fetchTvShowDetails: (id) => `/tv/${id}`,
};


const tmdbApi = {
    get: async (endpoint) => {
        const url = tmdbBASEURL + endpoint;
        
        // Retry logic with exponential backoff
        const maxRetries = 3;
        let retries = 0;
        let lastError;
        
        while (retries < maxRetries) {
            try {
                const response = await fetch(url, { method: 'GET', headers: headers });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                
                const data = await response.json();
                return data;
            } catch (error) {
                lastError = error;
                retries++;
                
                if (retries >= maxRetries) {
                    console.error(`Failed after ${maxRetries} retries for endpoint: ${endpoint}`, error);
                    break;
                }
                
                // Exponential backoff: wait longer between each retry
                const delay = Math.pow(2, retries) * 300;
                console.log(`Retry ${retries}/${maxRetries} for ${endpoint} after ${delay}ms`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
        
        throw lastError || new Error(`Failed to fetch data from ${endpoint}`);
    }
}

module.exports = {
    tmdbApi, TMDB_ENDPOINT,
}