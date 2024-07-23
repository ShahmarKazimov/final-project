import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (request, response, next) => {
    try {
        const token = request.cookies.jwt;
        if (!token) {
            return response.status(404).send({ error: 'No token provided - unAuthorized user' });
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        if (!decode) {
            return response.status(404).send({ error: 'Invalid token- unAuthorized user' });
        }

        const user = await User.findOne({ _id: decode._id });
        if (!user) {
            return response.status(404).send({ error: 'User not found' });
        }

        request.user = user;
        next();
    } catch (error) {
        console.log(`Error in protectRoute middleware: ${error}`);
        response.status(500).send({ error: 'Internal server error' });
    }
}

export default protectRoute;