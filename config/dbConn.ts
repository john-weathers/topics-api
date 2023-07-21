import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        if (typeof process.env.DATABASE_URI === 'string') {
          await mongoose.connect(process.env.DATABASE_URI);
        }
    } catch (err) {
        // @ts-ignore
        console.log(`${err.name}\t${err.message}\tCould not connect to database`);
        
    }
}

module.exports = connectDb;