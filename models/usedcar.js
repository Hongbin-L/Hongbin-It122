import mongoose from 'mongoose';
const { Schema } = mongoose;
import {connectionString} from '../credentials.js';


mongoose.connect(connectionString, {
    dbName: 'it122',
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const usedCarSchema = new Schema({
 brand: String,
 year: Number,
 color: String,
 price: String,
});

export const usedCar = mongoose.model('usedCar', usedCarSchema);