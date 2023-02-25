import mongoose from 'mongoose';


const connectDB = async () => {
    // avoid deprecation warning
    mongoose.set('strictQuery', true);
    return await mongoose.connect(
        // 'mongodb://localhost:27017/mongoose_fdb' // local
        // server: user:password@host:port/dbname <== db will be created if not exist
        'mongodb+srv://mongo_first:hassan123@cluster0.xtykq4s.mongodb.net/mongoose_fdb' // online
    ).then(() => console.log('MongoDB Connected 📟'))
        .catch(err => console.log({
            "Catched DB Error ❌": err
        }));
}


export {
    connectDB
}