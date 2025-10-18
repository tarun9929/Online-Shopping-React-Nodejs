import User from "../models/User.model.js";

export async function generateAuthTokens(_id) {
    const user = await User.findOne({_id});
    const access_token = user.getAccessToken({_id})
    const refresh_token = user.getRefreshToken({_id})

    return {access_token , refresh_token}
}