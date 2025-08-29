import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const authMiddleware = (req, res, next) => {
    const {token} = req.headers;

    if(!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized! Login to continue."
        })
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decoded.id;
        next();
    } catch(err) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized! Login to continue.",
            error: err
        })
    }
}