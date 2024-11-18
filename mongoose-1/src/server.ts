
import app from "./app";
import config from "./app/config";
import mongoose from 'mongoose';

const mailDB = async () => {
    try {
        await mongoose.connect(config.DATABASE_URL as string)
        app.listen(config.PORT, () => {
            console.log(`Server is running http://localhost:${config.PORT}`)
        })
        console.log('Database is connections')
    } catch (error) {
        console.log(error)
    }
}
mailDB();


