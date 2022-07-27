import mongoose from "mongoose";


export const Connection = async () => {
    const URL = 'mongodb://user:addes24@ecommerce-web-shard-00-00.wz82z.mongodb.net:27017,ecommerce-web-shard-00-01.wz82z.mongodb.net:27017,ecommerce-web-shard-00-02.wz82z.mongodb.net:27017/PROJECT?ssl=true&replicaSet=atlas-xu5s6u-shard-0&authSource=admin&retryWrites=true&w=majority';
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default Connection;