import app from './app.js';
import connectMongoDb from './db/mongodb/index.js';
import { port } from './config/dotenv.config.js';

connectMongoDb()
.then(() => {
    app.on("error" , (error) => {
        console.log("server/src/app.js -> app.on error -> error" , error);
    })

    app.listen(port , () => {
        console.log(`server is running at http://localhost:${port}`);
    })
})
.catch((error) => {
    console.log("server/src/app.js -> connectMongoDb -> error", error)
})