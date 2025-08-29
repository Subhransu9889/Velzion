const UserModel = require('../models/UserModel');

const getCurrentUser = async (req, res) => {
    try{
        const userId = req.body.userId;
        if(!userId){
            return res.status(400).json({
                success: false,
                message: "User id is required"
            })
        }
        const { name, email, createdAt, wishlist, isPremium } = await UserModel.findById(userId);
        res.status(200).json({
            success: true,
            message: "User found",
            user: {
                name,
                email,
                createdAt,
                wishlist,
                isPremium
            }
        })
    } catch (err){
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal Server error"
        });
    }
}

module.exports = { getCurrentUser };