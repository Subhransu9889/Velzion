const userModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const validator = require('validator');
const dotenv = require('dotenv');
dotenv.config();

//login user
const loginHandler = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: "Please provide email and password"
        });
    }
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User does not exist"
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });
        res.status(200).json({
            success: true,
            message: "Login successful",
            token: token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                isPremium: user.isPremium || false,
                wishlist: user.wishlist || []
            }
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal Server error"
        });
    }
}

const signupHandler = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    if (!name || !email || !password || !confirmPassword) {
        return res.status(400).json({
            message: "Please provide name, email and password"
        });
    }
    if (password !== confirmPassword) {
        return res.status(400).json({
            message: "Passwords do not match"
        });
    }
    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }
    //     validating email format and strong password
        if(!email || !validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email"
            });
        }
        if(password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters"
            })
        }

    //     hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
            confirmPassword: hashedPassword,
        })

        const user = await newUser.save();
        res.status(200).json({
            success: true,
            message: "Signup successful",
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal Server error"
        });
    }
}

const logoutHandler = async (req, res) => {
    try{
        res.cookie("jwt", "", {
            maxAge: 0,
            httpOnly: true,
            secure: true,
        });
        res.status(200).json({
            success: true,
            message: "Logout successful",
        })
    } catch (err){
        console.log(err);
        res.status(500).json(
            {
                success: false,
                message: "Internal Server error"
            }
        )
    }
}

module.exports = { loginHandler, signupHandler, logoutHandler};