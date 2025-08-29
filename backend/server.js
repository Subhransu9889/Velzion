const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const {connectDB} = require("./config/db");
const cors = require('cors');
const authRouter = require("./routes/AuthRoutes");
const userRouter = require("./routes/UserRoutes");
const movieRouter = require("./routes/MovieRouter");
const TvRouter = require("./routes/TvRouter");
const DiscoverRouter = require("./routes/DiscoverRouter");
const VideoRouter = require("./routes/VideoRouter");
const PaymentRouter = require("./routes/PaymentRouter");

// app config
const app = express();
const PORT = 4000;

// middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

// DB connection
connectDB();


// Auth routes
app.use('/api/auth', authRouter);

// user routes
app.use('/api/user', userRouter);


app.use("/api/movies", movieRouter);
app.use("/api/tv", TvRouter);
app.use("/api/discover", DiscoverRouter);
app.use("/api/video", VideoRouter);


// payment
app.use("/api/payment", PaymentRouter);

// USER routes

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log('Server is running on port 4000');
});