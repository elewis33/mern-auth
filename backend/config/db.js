import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongDB connected: ${conn.connection.host}`);
        // console.log(`Using port: ${conn.connection.port}`);
        // console.log(`Using database: ${conn.connection.db}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;
