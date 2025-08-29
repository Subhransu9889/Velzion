const { tmdbApi, TMDB_ENDPOINT } = require("../services/tmdb.services.js");

const getNowPlaying = async (req, res) => {
    try {
        const data = await tmdbApi.get(TMDB_ENDPOINT.fetchNowPlaying);

        if (!data || !data.results) {
            return res.status(404).json({
                message: "No data found for now playing movies",
                status: "failure",
            });
        }

        res.status(200).json({
            status: "success",
            response: data
        });
    } catch (err) {
        console.error("Error fetching now playing movies:", err);
        res.status(500).json({
            message: err.message || "Failed to fetch now playing movies",
            status: "failure",
        });
    }
};

const getTrending = async (req, res) => {
    try {
        const data = await tmdbApi.get(TMDB_ENDPOINT.fetchTrending);

        if (!data || !data.results) {
            return res.status(404).json({
                message: "No data found for trending movies",
                status: "failure",
            });
        }

        res.status(200).json({
            status: "success",
            response: data
        });
    } catch (err) {
        console.error("Error fetching trending movies:", err);
        res.status(500).json({
            message: err.message || "Failed to fetch trending movies",
            status: "failure",
        });
    }
};

const getTopRated = async (req, res) => {
    try {
        const data = await tmdbApi.get(TMDB_ENDPOINT.fetchTopRated);

        if (!data || !data.results) {
            return res.status(404).json({
                message: "No data found for top rated movies",
                status: "failure",
            });
        }

        res.status(200).json({
            status: "success",
            response: data
        });
    } catch (err) {
        console.error("Error fetching top rated movies:", err);
        res.status(500).json({
            message: err.message || "Failed to fetch top rated movies",
            status: "failure",
        });
    }
};

const getUpcoming = async (req, res) => {
    try {
        const data = await tmdbApi.get(TMDB_ENDPOINT.fetchUpcoming);

        if (!data || !data.results) {
            return res.status(404).json({
                message: "No data found for upcoming movies",
                status: "failure",
            });
        }

        res.status(200).json({
            status: "success",
            response: data
        });
    } catch (err) {
        console.error("Error fetching upcoming movies:", err);
        res.status(500).json({
            message: err.message || "Failed to fetch upcoming movies",
            status: "failure",
        });
    }
};

module.exports = {
    getNowPlaying,
    getTrending,
    getTopRated,
    getUpcoming,
};