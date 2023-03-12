import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const MONGODB_URI = `mongodb+srv://${username}:${password}@cluster0.aewqbvm.mongodb.net/?retryWrites=true&w=majority  `;
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;