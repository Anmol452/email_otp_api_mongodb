import mongoose from "mongoose";

 
type connectionObject = {
    isConnected?: number
}

const connection: connectionObject = {}

async function dbConnect(): Promise<void> {
    if(connection.isConnected){
        console.log("Already connected to databass")
        return
    }

    try {
    const db = await mongoose.connect(process.env.mongoDB_URI || '', {})
    connection.isConnected = db.connections[0].readyState
    console.log('db connected succefull ')
    } catch (error) {
        console.log("databass connetion falid",error)
        process.exit(1)
    }
}

export default dbConnect