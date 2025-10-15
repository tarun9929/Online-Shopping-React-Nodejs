import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT || 5000;
export const mongodb_url = process.env.MONGODB_URL;