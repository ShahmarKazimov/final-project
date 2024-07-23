import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import validator from "validator";
import { generateTokenAndSetCookie } from "../generateTokenAndSetCookie.js";

export const signup = async (request, response) => {
    const { userName, fullName, password, confirmPassword, gender, profilePic, } =
        request.body;


    if (!userName ||
        !fullName ||
        !password ||
        !confirmPassword ||
        !gender ||
        !profilePic) {
        return response
            .status(404)
            .send({ error: "Please fill all required fields" });
    }

    if (
        !validator.isStrongPassword(password, {
            minLength: 6,
            minLowercase: 1,
            minUppercase: 0,
            minNumbers: 1,
            minSymbols: 0,
        })) {
        return response
            .status(404)
            .send({ error: "Please enter a strong password" });
    }

    if (confirmPassword != password) {
        return response
            .status(404)
            .send({ error: "Password and confirm password dont match" });
    }

    const existingUser = await User.findOne({ userName });

    if (existingUser) {
        return response.status(404).send({ error: "Username already in use" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;


    const newUser = await User.create({
        fullName,
        userName,
        password: hashedPassword,
        gender,
        profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (!newUser) {
        return response
            .status(404)
            .send({ error: "User not created !" });
    }
    generateTokenAndSetCookie(newUser._id, response)
    response.status(201).send(newUser)
};

export const signin = async (request, response) => {
    const { userName, password } = request.body;


    if (!userName || !password) {
        return response
            .status(404)
            .send({ error: "Please fill all required fields" });
    }

    const user = await User.findOne({ userName });

    let isCorrectPassword;

    if (user) {
        isCorrectPassword = await bcrypt.compare(password, user?.password);
    }

    if (!isCorrectPassword || !user) {
        return response
            .status(404)
            .send({ error: "incorrect password or username" });
    }
    generateTokenAndSetCookie(user._id, response)

    response.status(200).send(user)

};

export const logout = async (request, response) => {
    response.cookie("jwt", "");
    response.status(200).send({ message: "Logged out succesfully" })
};