import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT || 5000;
export const mongodb_url = process.env.MONGODB_URL;
export const cors_origin = process.env.CORS_ORIGIN;
export const secret_access_token = process.env.SECRET_ACCESS_TOKEN;
export const access_duration = process.env.ACCESS_DURATION;
export const secret_refresh_token = process.env.SECRET_REFRESH_TOKEN;
export const refresh_duration = process.env.REFRESH_DURATION;