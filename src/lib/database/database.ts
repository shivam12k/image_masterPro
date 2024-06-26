import mongoose, { Mongoose } from "mongoose";
const mongodbURL = process.env.MONGODB_URI;
interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}
let cached: MongooseConnection = (global as any).mongoose;
if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}
export const ConnectToDB=async()=>{
    if(cached.conn) return cached.conn;
    if(!mongodbURL) throw new Error("Missing MongoDB url");
    cached.promise= cached.promise || mongoose.connect(mongodbURL,{
      dbName:'image_master',
      bufferCommands:false,
    })
    cached.conn=await cached.promise;
    return cached.conn;
    
}