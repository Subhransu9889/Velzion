const {tmdbApi, TMDB_ENDPOINT} = require('../services/tmdb.services');

const getSearch = async (req, res) => {
    const {query} = req.params;
    try{
        if(!query){
            return res.status(400).json({
                success: false,
                message: "Query is required"
            });
        }
        const newQuery = {q : query,  page : 1,  language : 'en-US', include_adult : false}
        const data = tmdbApi.get(TMDB_ENDPOINT.fetchSearch(newQuery));
        res.status(200).json({
            success: true,
            message: "Search successful",
            data: data
        })
    } catch (err){
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal Server error"
        });
    }
};

module.exports = {getSearch};