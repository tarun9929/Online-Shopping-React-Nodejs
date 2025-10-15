import mongoose from 'mongoose';
import { mongodb_url } from '../../config/dotenv.config.js';
import { db_name } from '../../constents.js';

const connectMongoDb = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${mongodb_url}/${db_name}`);
        console.log("mongodb connected successfully");
        console.log(`mongodb connected at host: ${connectionInstance.connection.host}`)
    } catch (error) {
        throw error;
        process.exit(1);
    }
}

export default connectMongoDb;