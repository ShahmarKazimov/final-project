

import User from "../models/user.model.js"

export const getAllUsers = async (request, response) => {
    const clientId = request.user._id;

    const filteredUsers = await User.find({ _id: { $ne: clientId } });

    response.status(200).send(filteredUsers);
}
