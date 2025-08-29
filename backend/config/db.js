const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ndc0j1a.mongodb.net/velzion?retryWrites=true&w=majority&appName=Cluster0`).then(
            () => console.log('MongoDB Connected...')
        )
    } catch (err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = { connectDB };