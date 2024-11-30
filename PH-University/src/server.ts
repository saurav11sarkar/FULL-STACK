import mongoose from "mongoose"
import { config } from "./app/config"
import app from "./app"

const server = async()=>{
    try {
        await mongoose.connect(config.URL as string)
        app.listen(config.PORT,()=>{
            console.log(`Server is running http://localhost:${config.PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}
server();